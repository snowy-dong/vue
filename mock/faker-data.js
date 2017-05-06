module.exports = function () {
 var faker = require("faker");
 faker.locale = "zh_CN";
 var _ = require("lodash");
 return {
     people: _.times(100, function (n) {
         return {
             id: n,
             name: faker.name.findName(),
             avatar: faker.internet.avatar()
         }
     }),
     address: _.times(100, function (n) {
         return {
             id: faker.random.uuid(),
             city: faker.address.city(),
             county: faker.address.county()
         }
     }),
     image:_.times(100, function (n) {
         return {
             id: n,
             food: faker.image.food(),
             imageUrl: faker.image.imageUrl()
         }
     }),
     seller:_.times(1,function (n) {
         return {
             id: n,
             name:faker.name.findName(),
             description: faker.lorem.paragraph,
             avatar: faker.internet.avatar(),
             deliveryTime:faker.date.recent(),
             supports:faker.lorem.paragraph

         }
     })
 }
}
