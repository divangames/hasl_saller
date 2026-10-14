param([switch]$NoOpen, [int]$StartPort = 4317)
$ErrorActionPreference = 'Stop'
$projectRoot = [IO.Path]::GetFullPath((Split-Path -Parent $PSScriptRoot)).TrimEnd('\')
$nodeCommand = Get-Command node -ErrorAction SilentlyContinue
if (-not $nodeCommand) { throw 'Node.js is required. Install Node.js LTS and run START.bat again.' }
$sha = [Security.Cryptography.SHA256]::Create()
$identity = ([BitConverter]::ToString($sha.ComputeHash([Text.Encoding]::UTF8.GetBytes($projectRoot.ToLowerInvariant())))).Replace('-', '').ToLowerInvariant()
$sha.Dispose()

function Test-Project([int]$Port) {
  try {
    $result = Invoke-RestMethod -Uri "http://127.0.0.1:$Port/__hasl_project" -TimeoutSec 1
    return $result.project -eq 'hasl_saller' -and $result.identity -eq $identity
  } catch { return $false }
}

for ($port = $StartPort; $port -lt $StartPort + 83; $port++) {
  $listener = [Net.Sockets.TcpListener]::new([Net.IPAddress]::Loopback, $port)
  $free = $false
  try { $listener.Start(); $free = $true } catch {} finally { $listener.Stop() }
  if (-not $free) {
    if (Test-Project $port) { break }
    continue
  }
  $server = Join-Path $PSScriptRoot 'local-server.cjs'
  $process = Start-Process -FilePath $nodeCommand.Source -ArgumentList @('"' + $server + '"', "$port") -WorkingDirectory $projectRoot -WindowStyle Hidden -PassThru
  $ready = $false
  for ($attempt = 0; $attempt -lt 30; $attempt++) {
    if (Test-Project $port) { $ready = $true; break }
    if ($process.HasExited) { break }
    Start-Sleep -Milliseconds 100
  }
  if ($ready) { break }
}
if (-not (Test-Project $port)) { throw 'Unable to start the HASL project server.' }
$url = "http://127.0.0.1:$port/#home"
if (-not $NoOpen) { Start-Process $url }
Write-Output "HASL_URL=$url"
