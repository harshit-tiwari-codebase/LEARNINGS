// Student object
let student = {
  name: "Harshit",
  age: 20,
  course: "B.Tech CSIT",

  introduce: function () {
    console.log(
      "Hi, my name is " + this.name +
      ". I am " + this.age +
      " years old and studying " + this.course
    );
  }
};

// Access properties
console.log(student.name);     // Harshit
console.log(student.age);      // 20

// Call method
student.introduce();
