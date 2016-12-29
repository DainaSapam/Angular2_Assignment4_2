class Animal {
    name: string;
    constructor(name: string) { this.name = name};
    move(distance : number) { };
    makeSound() { };
}

class Tiger extends Animal{
    constructor() {
        super("Tiger");
    }
    move(distance: 5) {
        super.move(distance);
    }
    maskeSound() {
        super.makeSound();
    }
}

class Lion extends Animal{
    constructor() {
        super("Lion");
    }
    move(distance: 3) {
        super.move(distance);
    }
    maskeSound() {
        super.makeSound();
    }
}

class Cheetah extends Animal{
    constructor() {
        super("Cheetah");
    }
    move(distance: 9) {
        super.move(distance);
    }
    maskeSound() {
        super.makeSound();
    }
}

class Elephant extends Animal{
    constructor() {
        super("Elephant");
    }
    move(distance: 1) {
        super.move(distance);
    }
    maskeSound() {
        super.makeSound();
    }
}