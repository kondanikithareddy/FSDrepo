//1.

class Vec {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    plus(other) {
      return new Vec(this.x + other.x, this.y + other.y);
    }
  
    minus(other) {
      return new Vec(this.x - other.x, this.y - other.y);
    }
  
    get length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }
  
  // Sample Inputs and Outputs
  console.log(new Vec(1, 2).plus(new Vec(2, 3)));
  // → Vec {x: 3, y: 5}
  console.log(new Vec(1, 2).minus(new Vec(2, 3)));
  // → Vec {x: -1, y: -1}
  console.log(new Vec(3, 4).length);
  // → 5

  

  //2. 

  class Group {
    constructor() {
      this.members = [];
    }
  
    add(value) {
      if (!this.has(value)) {
        this.members.push(value);
      }
    }
  
    delete(value) {
      this.members = this.members.filter(member => member !== value);
    }
  
    has(value) {
      return this.members.includes(value);
    }
  
    static from(iterable) {
      let group = new Group();
      for (let value of iterable) {
        group.add(value);
      }
      return group;
    }
  }
  
  // Sample Inputs and Outputs
  let group = Group.from([10, 20]);
  console.log(group.has(10)); // → true
  console.log(group.has(30)); // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10)); // → false
  