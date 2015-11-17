var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/bbjet',
  idAttribute: '_id',
  defaults: {
    imgUrl: "image placeholder",
    comment: "comment placeholder"
  },
  initialize: function () {

  }
});
