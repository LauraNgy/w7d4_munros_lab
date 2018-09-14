const MunroListView = require('./munro_list_view')
const CreateAppend = require('../helpers/append')

const MunroView = function (munro, parent) {
  this.munro = munro;
  this.parent = parent;
};

MunroView.prototype.renderView = function () {
  const name = new CreateAppend ('h2', this.munro.name, this.parent);
  const munroDetails = new CreateAppend('ul', "Details", this.parent);
  const meaning = new CreateAppend ('li', `Meaning: ${this.munro.meaning}`, munroDetails);
  const height = new CreateAppend ('li', `Height: ${this.munro.height}`, munroDetails);
};

module.exports = MunroView;
