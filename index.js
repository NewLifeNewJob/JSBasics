// This is a single-line comment
      console.log("Hello, World!");

      /*
       * This is a multi-line comment
       * It can span multiple lines
       */
      console.log("This is a multi-line comment");

    
      // Primitive data types in JavaScript
      let name = "John Doe"; // This is a String variable declaration
      let age = 30; // This is number variable declaration
      let isStudent = false; // This is a boolean variable declaration
      let hobbies = ["reading", "gaming", "coding"]; // This is an array variable declaration
      let firstName = null; // This is a null variable declaration
      let lastName; // This is an undefined variable declaration
      console.log(name); // undefined

      //object type
      let person = {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        isStudent: false,
        hobbies: ["reading", "gaming", "coding"],
      };
        console.log(person); // undefined

        //performing a task
        function greet(name, lastName) {
          console.log("Hello, " + name + " " + lastName + " !");
        }   
        greet("Alice",  "Lee"); // Hello, Alice!

        //calculating a value
        function add(a, b) {
          return a + b;
        }  
        let sum = add(5, 10); // 15
        console.log(sum); // 15

        