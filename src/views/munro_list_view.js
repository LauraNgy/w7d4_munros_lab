const PubSub = require('../helpers/pub_sub')
const MunroView = require('./munro_view')

const MunroListView = function (element) {
  this.element = element;
};

MunroListView.prototype.bindEvents = function () {
  this.allRegions();
  PubSub.subscribe('Munro:munros-filtered', (event) => {
    const munrosByRegion = event.detail;
    this.populate(munrosByRegion);
  });
};

MunroListView.prototype.allRegions = function () {
  PubSub.subscribe('Munro:all-munros', (event) => {
    const allMunros = event.detail;
    this.populate(allMunros);
  });
};

MunroListView.prototype.populate = function (munros) {
  this.element.innerHTML = "";
  munros.forEach(  (munro) => {
    const newMunro = new MunroView (munro, this.element)
    newMunro.renderView();
  });
};

module.exports = MunroListView;
