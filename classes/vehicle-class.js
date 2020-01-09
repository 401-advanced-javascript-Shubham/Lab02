'use strict';

class Vehicle {

    constructor(name){
        this.name = name;
        this.wheels = wheels;
    }

    //All cars can drive and stop This is a prototype method
    drive = () => {
        return 'Moving Forward';
      };
      
    stop = () => {
        return 'Stopping';
      };
}

class Car extends Vehicle {
    constructor(name, wheels){
        super(name,4);
    }
}

class Motorcycle extends Vehicle {
    constructor(name, wheels) {
      super(name, 2);
    }

    //Motorcycle method
    wheelie() {
      return 'Wheee!';
    }
  }

  //Export class for Car and Motorcycle
module.exports = {Car, Motorcycle};