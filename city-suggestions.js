// Local suggestions only; delivery rates and pickup points are not changed here.
window.bindCitySuggestions = function () {
  const input = document.querySelector('#checkout-city');
  const list = document.querySelector('#city-options');
  const status = document.querySelector('#city-status');
  if (!input || !list || !status) return;
  const normalize = value => value.toLocaleLowerCase('ru').replace(/ё/g, 'е').trim().replace(/\s+/g, ' ');
  const cities = (window.OUTMAX_RUSSIAN_CITIES || []).map(([name, region]) => ({name, region, search: normalize(name)}));
  let matches = [], active = -1;
  const close = () => {
    list.hidden = true;
    input.setAttribute('aria-expanded', 'false');
    input.removeAttribute('aria-activedescendant');
    active = -1;
  };
  const select = index => {
    const city = matches[index];
    if (!city) return;
    input.value = city.name + (city.region === city.name ? '' : ', ' + city.region);
    status.textContent = 'Выбран город: ' + input.value;
    close();
  };
  const search = () => {
    const query = normalize(input.value);
    active = -1;
    input.removeAttribute('aria-activedescendant');
    if (query.length < 2) { close(); status.textContent = 'Введите минимум 2 буквы. Если города нет в списке, укажите его вручную.'; return; }
    matches = cities.filter(city => city.search.startsWith(query));
    matches.push(...cities.filter(city => !city.search.startsWith(query) && city.search.includes(query)));
    matches = matches.slice(0, 8);
    list.replaceChildren();
    matches.forEach((city, index) => {
      const option = document.createElement('li');
      option.id = 'city-option-' + index;
      option.setAttribute('role', 'option');
      option.setAttribute('aria-selected', 'false');
      const name = document.createElement('strong');
      const region = document.createElement('span');
      name.textContent = city.name;
      region.textContent = city.region;
      option.append(name, region);
      option.addEventListener('pointerdown', event => event.preventDefault());
      option.addEventListener('click', () => select(index));
      list.append(option);
    });
    list.hidden = matches.length === 0;
    input.setAttribute('aria-expanded', String(matches.length > 0));
    status.textContent = matches.length ? 'Выберите город и регион из подсказок.' : 'Город не найден. Проверьте название или укажите город и регион вручную.';
  };
  input.addEventListener('input', search);
  input.addEventListener('focus', search);
  input.addEventListener('blur', close);
  input.addEventListener('keydown', event => {
    if (event.key === 'Escape') { event.preventDefault(); close(); return; }
    if (event.key === 'Enter' && !list.hidden && active >= 0) { event.preventDefault(); select(active); return; }
    if (!['ArrowDown', 'ArrowUp'].includes(event.key)) return;
    event.preventDefault();
    if (list.hidden) search();
    if (!matches.length || list.hidden) return;
    active = (active + (event.key === 'ArrowDown' ? 1 : active < 0 ? 0 : -1) + matches.length) % matches.length;
    Array.from(list.children).forEach((option, index) => option.setAttribute('aria-selected', String(index === active)));
    input.setAttribute('aria-activedescendant', list.children[active].id);
    list.children[active].scrollIntoView({block: 'nearest'});
  });
};
