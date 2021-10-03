/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';


DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23% */

function Car(make, currentSpeed) {
  this.make = make;
  this.currentSpeed = currentSpeed;
}

function EV(make, currentSpeed, charge) {
  Car.call(this, make, currentSpeed);
  this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV.prototype;

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.currentSpeed += 20;
  this.charge -= 1;

  console.log(
    `Telsa is going at ${this.currentSpeed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('tesla', 100, 50);

///////////////////////CLASSES/////////////////////////

class CarCl {
  constructor(make, currentSpeed) {
    this.make = make;
    this.currentSpeed = currentSpeed;
  }

  brake(currentSpeed) {
    this.currentSpeed -= 10;
    console.log(`${this.make} is going at ${this.currentSpeed} mph `);
    return this;
  }
}

class EvCl extends CarCl {
  #charge;
  constructor(make, currentSpeed, charge) {
    super(make, currentSpeed);
    this.#charge = charge;
  }
  chargeBattery(percentage) {
    this.#charge = percentage;
    return this;
  }
  accelerate(currentSpeed) {
    this.currentSpeed += 10;
    this.#charge -= 1;
    console.log(
      `${this.make} is going at ${this.currentSpeed} mph and battery is at ${
        this.#charge
      }`
    );
    return this;
  }
}

const tezzy = new EvCl('telsa', 75, 59);
