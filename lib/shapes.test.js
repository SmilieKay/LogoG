const { Circle, Triangle, Square } = require("./shapes");

test("Circle renders the correct SVG element", () => {
  const circle = new Circle("red");
  expect(circle.render()).toBe('<circle cx="150" cy="100" r="50" fill="red" />');
});

test("Triangle renders the correct SVG element", () => {
  const triangle = new Triangle("green");
  expect(triangle.render()).toBe('<polygon points="150,50 100,150 200,150" fill="green" />');
});

test("Square renders the correct SVG element", () => {
  const square = new Square("blue");
  expect(square.render()).toBe('<rect x="100" y="50" width="100" height="100" fill="blue" />');
});
