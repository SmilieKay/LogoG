class Triangle {
    constructor(color) {
      this.color = color;
      this.type = "triangle";
    }
  }
  
  class Circle {
    constructor(color) {
      this.color = color;
      this.type = "circle";
    }
  }
  
  class Square {
    constructor(color) {
      this.color = color;
      this.type = "square";
    }
  }
  
  module.exports = {
    Triangle,
    Circle,
    Square,
  };
  