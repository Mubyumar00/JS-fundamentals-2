const Umar = {
    firstName: 'Umar',
    lastName: 'Mubarak',
    birthYear: 1991,
    job: 'Student',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // Method to calculate age
    // calcAge: function() {
    //    return 2037 - this.birthYear;
    // }

    calcAge: function() {
        console.log(this); // 'this' refers to the Umar object
        // this.age = 2037 - this.birthYear; // Adding age property to the object
        return 2037 - this.birthYear; // Returns the age
    },
}
console.log(Umar.calcAge()); // Calling the method to calculate age