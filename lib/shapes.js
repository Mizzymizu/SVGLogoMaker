class Shape {
    constructor(text, color) {
        this.text = text;
        this.color= color;
    }
}

class Circle extends Shape {
    render () {
        return `<circle cx="100" cy="100" r="100" stroke-width="3" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    render () {
        return `<polygon points="100,0 200,200 0,200" stroke-width="3" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render () {
        return `<rect width="200" height="200" stroke-width="3" fill="${this.color}" />`
    }
}

module.exports = {
    Circle,
    Triangle,
    Square
};