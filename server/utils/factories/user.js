const Factory = require('rosie').Factory;
const faker = require('faker');

user = new Factory()
    .attr('email', () => faker.internet.email())
    .attr('password', () => faker.internet.password())
 
module.exports = user