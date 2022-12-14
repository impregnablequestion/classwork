const assert = require('assert');
const PaintCan = require('../paint_can.js');

describe('PaintCan', function() {

    let paintcan;

    this.beforeEach(function() {
        paintcan = new PaintCan(20);
    })

    it('should have a number of litres of paint', function() {
        const actual = paintcan.litres;
        assert.strictEqual(actual, 20)
    });

    it('should be able to check if it is empty', function() {
        const actual = paintcan.check_empty();
        assert.strictEqual(actual, false)
    });

    it('should be able to empty itself of paint', function () {
        paintcan.empty();
        const actual = paintcan.litres;
        assert.strictEqual(actual, 0)
    });
});