var UID = require(__dirname + '/uid');

var RoomManager = function() {
  this.roomMap = {};
};

RoomManager.prototype.create = function(name, user) {
  var room = new Room(name, user);
  this.roomMap[room.uid] = room;
  return room.uid;
};

RoomManager.prototype.count = function() {
  return Object.keys(this.roomMap).length;
};

RoomManager.prototype.destroy = function(uid) {
  this.roomMap[uid].destroy();
  delete this.roomMap[uid];
};




var Room = function(name, owner) {
  this.participants = {};
  this.name = name;
  this.owner = owner;
  this.uid = UID.get();
};

Room.prototype.join = function(sid) {


};

Room.prototype.destroy = function() {
  UID.release(this.uid);
};

module.exports = new RoomManager();