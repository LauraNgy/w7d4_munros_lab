const PubSub = require('../helpers/pub_sub')
const MunroView = require('./munro_view')

const MunroListView = function (element) {
  this.element = element;
};

MunroListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munro:all-munros', (event) => {
    const allMunros = event.detail;
    // console.log(allMunros);
    allMunros.forEach((munro) => {
      const newMunro = new MunroView (munro, this.element)
      newMunro.renderView();
    });
  });
};

module.exports = MunroListView;
