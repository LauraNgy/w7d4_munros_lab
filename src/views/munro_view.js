const MunroListView = require('./munro_list_view')
const CreateAppend = require('../helpers/append')

const MunroView = function (munro, parent) {
  this.munro = munro;
  this.parent = parent;
};

MunroView.prototype.renderView = function () {
  const name = new CreateAppend ('h2', this.munro.name, this.parent);
  const munroDetails = new CreateAppend('ul', "", this.parent);
  const meaning = new CreateAppend ('li', this.munro.meaning, munroDetails);
  const height = new CreateAppend ('li', this.munro.height, munroDetails);
  const region = new CreateAppend ('li', this.munro.region, munroDetails);

};

module.exports = MunroView;
