class Triangle {
  constructor(color) {
    this.color = color;
    this.type = "triangle";
  }

  render() {
    return `<polygon points="150,50 100,150 200,150" fill="${this.color}" />`;
  }
}

class Circle {
  constructor(color) {
    this.color = color;
    this.type = "circle";
  }

  render() {
    return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
  }
}

class Square {
  constructor(color) {
    this.color = color;
    this.type = "square";
  }

  render() {
    return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
  }
}

module.exports = {
  Triangle,
  Circle,
  Square,
};
