const Room = function (area, painted=false) {
    this.area = area;
    this.painted = painted;
}

Room.prototype.paint = function () {
    this.painted = true;
};

module.exports = Room;