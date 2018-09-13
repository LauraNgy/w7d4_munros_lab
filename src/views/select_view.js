const PubSub = require('../helpers/pub_sub');

const SelectView = function (element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Munro:all-munros', (event) => {
    const allMunros = event.detail;
    allMunros.forEach( (munro) => {
      const options = this.element.children;
      console.log(options);
      if (options != [] && !options.includes(munro.region)) {
      const option = new CreateAppend('option', munro.region, this.element);
      }
    });
  });
};

module.exports = SelectView;
