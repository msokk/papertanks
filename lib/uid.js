/**
 * Short Unique Identifier Factory
 * @param {Number} Length of UID
 * @constructor
 */
var UID = function(len) {
  this.len = len || 5;
  this.used = {};
};

/**
 * Generate a random UID
 * @returns {String} UID
 */
UID.prototype.get = function() {
  var uid = Math.random().toString(36).substr(2, this.len);
  if(this.used[uid]) {
    return this.get();
  } else {
    this.used[uid] = true;
    return uid;
  }
};

/**
 * Release an UID, useful for shorter identifiers
 * @param {String} UID
 */
UID.prototype.release = function(uid) {
  delete this.used[uid];
};

module.exports = new UID(3); //Approx 46k combinations