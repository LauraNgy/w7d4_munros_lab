const Munro = require('./models/munro');
const MunroListView = require('./views/munro_list_view');
const Append = require('./helpers/append');
const SelectView = require('./views/select_view');

document.addEventListener('DOMContentLoaded', () => {
  const select = document.querySelector('.select-region');
  const selectView = new SelectView(select);
  selectView.bindEvents();
  const munro = new Munro();
  munro.getData();
  const body = document.querySelector('body');
  const munroDiv = new Append('div', "", body);
  const munroListView = new MunroListView(munroDiv);
  munroListView.bindEvents();

})
