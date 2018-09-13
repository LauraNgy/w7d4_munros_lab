const PubSub = require('../helpers/pub_sub')
const Request = require('../helpers/request_helper')

const Munro = function () {
  this.munros = [];
}

Munro.prototype.getData = function () {
  const request = new Request ('https://munroapi.herokuapp.com/api/munros')
  request.get((data) => {
    // console.log(data);
    this.handleData(data);
    // console.log(this.munros);
    PubSub.publish('Munro:all-munros', this.munros);
  });
};

Munro.prototype.handleData = function (munros) {
  munros.map ((munro, index) => {
    // console.log(munro);
    return this.munros[index] = {
      name: munro.name,
      meaning: munro.meaning,
      region: munro.region,
      height: munro.height
    }
  });
};



module.exports = Munro;
