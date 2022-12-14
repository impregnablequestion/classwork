const PaintCan = function (litres) {
    this.litres = litres
}

PaintCan.prototype.check_empty = function () {
    // if (this.litres === 0) {
    //     return true;
    // }
    // else {
    //     return false;
    // }
    return !this.litres;
}

PaintCan.prototype.empty = function () {
    this.litres = 0;
}

module.exports = PaintCan