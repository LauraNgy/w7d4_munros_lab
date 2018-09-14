const PubSub = require('../helpers/pub_sub')
const Request = require('../helpers/request_helper')

const Munro = function () {
  this.munros = [];
}

Munro.prototype.getData = function () {
  const request = new Request ('https://munroapi.herokuapp.com/api/munros')
  request.get((data) => {
    this.handleData(data);
    const regions = this.getRegions(this.munros);
    PubSub.publish('Munro:all-munros', this.munros);
    PubSub.publish('Munro:all-regions', regions);
  });
  PubSub.subscribe('SelectView:region-selected', (event) => {
    const regionName = event.detail;
    const munrosByRegion = this.munros.filter( (munro) => {
      return munro.region === regionName;
    });
    PubSub.publish('Munro:munros-filtered', munrosByRegion);
  });
};

Munro.prototype.handleData = function (munros) {
  munros.map ((munro, index) => {
    return this.munros[index] = {
      name: munro.name,
      meaning: munro.meaning,
      region: munro.region,
      height: munro.height
    }
  });
};

Munro.prototype.getRegions = function (munros) {
  const regions = [];
  munros.forEach( (munro) => {
    if (!regions.includes(munro.region)){
      regions.push(munro.region);
    }
  });
  return regions;
};


module.exports = Munro;
