import inquirer from 'inquirer';
import { promises as fs } from 'fs';

async function main() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => (input.length <= 3 ? true : 'Please enter up to three characters.'),
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hexadecimal):',
    },
  ]);

  const { text, textColor, shape, shapeColor } = answers;

  const svgHeader = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
  
    let shapeElement = '';
    switch (shape) {
      case 'circle':
        shapeElement = `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
        break;
      case 'triangle':
        shapeElement = `<polygon points="150,50 100,150 200,150" fill="${shapeColor}" />`;
        break;
      case 'square':
        shapeElement = `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`;
        break;
    }
  
    const fontSize = 40;
    const textY = 100 + (fontSize / 3);
  
    const textElement = `<text x="150" y="${textY}" text-anchor="middle" font-size="${fontSize}" fill="${textColor}" font-family="Arial">${text}</text>`;
    const svgFooter = `</svg>`;
  
    const svgContent = `${svgHeader}\n${shapeElement}\n${textElement}\n${svgFooter}`;
  
    await fs.writeFile('logo.svg', svgContent);
    console.log('Generated logo.svg');
  }

main();


module.exports = main;