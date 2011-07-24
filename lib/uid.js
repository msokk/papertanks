
var UID = function(len) {
  this.len = len || 5;
  this.used = {};
};

UID.prototype.get = function() {
  var uid = Math.random().toString(36).substr(2, this.len);
  if(this.used[uid]) {
    return this.get();
  } else {
    this.used[uid] = true;
    return uid;
  }
};

UID.prototype.release = function(uid) {
  delete this.used[uid];
};

module.exports = new UID(5);
