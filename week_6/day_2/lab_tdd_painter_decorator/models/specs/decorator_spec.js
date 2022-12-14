const assert = require('assert');
const Decorator = require('../decorator.js');
const PaintCan = require('../paint_can.js');

describe('Decorator', function() {

    let decorator;

    beforeEach(function() {
        decorator = new Decorator();
    });

    it('should start with an empty paint stock', function() {
        const actual = decorator.stock[0];
        assert.strictEqual(actual, undefined);
    });

    it('should be able to add a a can of paint to paint stock', function() {
        const paint_can = new PaintCan(10);
        decorator.add_paint(paint_can);
        const actual = decorator.stock[0];
        assert.strictEqual(actual, paint_can);
    });

    it('should be able to calculate total litres paint it has in stock', function() {
        const paint_can = new PaintCan(10);
        decorator.add_paint(paint_can);
        const actual = decorator.calculate_paint_total();
        assert.strictEqual(actual)

    });

    it('should be able to calculate whether it has enough to paint a room', function() {

    });

    it('should be able to paint a room if it has enough paint in stock', function () {

    })

});