const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');

const questions = [
    {
        type: 'input',
        name: 'letters',
        message: 'Please choose 3 letters to use for this image.'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please choose the color for the text.'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like?',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Using a commond color keyword or hex code, please identify your shape color.'
    }
];