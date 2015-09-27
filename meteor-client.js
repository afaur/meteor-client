module.exports = function(jQuery,underscore) {
  var Meteor = require("meteor-core")(underscore);
  require("meteor-tracker")(Meteor);
  require("meteor-reactive-var")(Meteor);
  require("meteor-blaze")(Meteor,jQuery);
  require("meteor-blaze-tools")(Meteor);
  require("meteor-templating")(Meteor);
  require("meteor-spacebars")(Meteor);
  require("meteor-spacebars-compiler")(Meteor);
  return Meteor;
};
