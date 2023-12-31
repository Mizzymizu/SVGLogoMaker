const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes');



const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please choose 3 letters to use for this image.',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Using a common color keyword or hex code, please identify your text color.',
    },
    {
        type: 'list',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square'],
        message: 'What shape would you like?',
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Using a common color keyword or hex code, please identify your shape color.',
    },
];

function writeSVG(answers) {
    let shape;
    switch (answers.shape) {
        case 'Circle':
            shape = new shapes.Circle(answers.text, answers.shapeColor);
            break;
        case 'Triangle':
            shape = new shapes.Triangle(answers.text, answers.shapeColor);
            break;
        case 'Square':
            shape = new shapes.Square(answers.text, answers.shapeColor);
            break;
    }
    let svg = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="100" y="100" font-size="35px" fill="${answers.textColor}" text-anchor="middle">${answers.text}</text>
    </svg>`;
    fs.writeFile('sampleSVG.svg', svg, (err) => {
        if (err) throw err;
        console.log('File successfully generated!')
    });
};

function init() {
    inquirer
        .prompt(questions)
            .then(answers => {
            writeSVG(answers);
            });
}

init();
