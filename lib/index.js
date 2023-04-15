const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./shapes");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to three characters for the logo text:",
    validate: (input) => input.length <= 3 || "Text must be three characters or fewer.",
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter the text color (keyword or hexadecimal):",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape:",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter the shape color (keyword or hexadecimal):",
  },
];

inquirer.prompt(questions).then((answers) => {
  const shape = createShape(answers.shape, answers.shapeColor);
  const logoSvg = generateLogoSvg(answers.text, answers.textColor, shape);
  fs.writeFileSync("logo.svg", logoSvg);
  console.log("Generated logo.svg");
});

function createShape(shape, color) {
  switch (shape) {
    case "circle":
      return new Circle(color);
    case "triangle":
      return new Triangle(color);
    case "square":
      return new Square(color);
  }
}
function generateLogoSvg(text, textColor, shape) {
    let shapeSvg = "";
  
    switch (shape.type) {
      case "circle":
        shapeSvg = `<circle cx="150" cy="100" r="50" fill="${shape.color}" />`;
        break;
      case "triangle":
        shapeSvg = `<polygon points="150,50 100,150 200,150" fill="${shape.color}" />`;
        break;
      case "square":
        shapeSvg = `<rect x="100" y="50" width="100" height="100" fill="${shape.color}" />`;
        break;
    }
  
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeSvg}
        <text x="150" y="180" text-anchor="middle" fill="${textColor}" font-size="30">${text}</text>
      </svg>
    `;
  }
  

// function generateLogoSvg(text, textColor, shape) {
//   // Replace with your own SVG generation logic.
//   // This is a basic example that will need improvements to meet your requirements.
//   return `
//     <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//       <${shape.type} fill="${shape.color}" />
//       <text x="150" y="100" text-anchor="middle" fill="${textColor}" font-size="30">${text}</text>
//     </svg>
//   `;
// }
