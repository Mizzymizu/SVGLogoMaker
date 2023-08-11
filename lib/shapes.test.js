const shapes = require('./shapes');

describe('Circle', () => {
    it ('should return a circle', () => {
        const circle = new shapes.Circle('A', 'red');
        expect(circle.render()).toBe('<circle cx="100" cy="100" r="100" stroke-width="3" fill="red" />');
    });
});

describe('Square', () => {
    it ('should return a square', () => {
        const square = new shapes.Square('B', 'blue');
        expect(square.render()).toBe('<rect width="200" height="200" stroke-width="3" fill="blue" />');
    });
});

describe('Triangle', () => {
    it ('should return a triangle', () => {
        const triangle = new shapes.Triangle('C', 'green');
        expect(triangle.render()).toBe('<polygon points="100,0 200,200 0,200" stroke-width="3" fill="green" />');
    });
});