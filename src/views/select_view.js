const PubSub = require('../helpers/pub_sub');
const CreateAppend = require('../helpers/append.js');

const SelectView = function (element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Munro:all-regions', (event) => {
    const regions = event.detail;
    this.populateOptions(regions);
    this.element.addEventListener('change', (event) => {
      const regionName = event.target.value;
      PubSub.publish('SelectView:region-selected', regionName);
    });
  });
};

SelectView.prototype.populateOptions = function (regions) {
  regions.forEach((region, index) => {
    const option = new CreateAppend('option', region, this.element);
    option.value = region;
  });
};

module.exports = SelectView;
