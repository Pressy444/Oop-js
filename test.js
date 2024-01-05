// exercice 1

console.log("Hello from index.js"); 

class Beverage {
  
  constructor(color, price, temperature = 'cold') {
   
    this.color = color;
    this.price = price;
    this.temperature = temperature;
  }

  
  getInfo() {
    return `This beverage is ${this.temperature} and ${this.color}.`;
  }
}


const cola = new Beverage('black', 2.0);


console.log(cola.getInfo());


console.log(cola.temperature);




// exercie 2 cas numero 1

class Item {
  constructor(name, quantity, price, taxRate) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.taxRate = taxRate;
  }

  getTotal() {
    const itemPrice = this.quantity * this.price;
    const tax = itemPrice * (this.taxRate / 100);
    return itemPrice + tax;
  }
}

const banana = new Item("Banana", 6, 1, 6);
const apple = new Item("Apple", 3, 1.5, 6);
const wine = new Item("Wine", 2, 10, 21);

const totalCost = banana.getTotal() + apple.getTotal() + wine.getTotal();
console.log("Total Cost: €" + totalCost.toFixed(2));









// exercie 2 cas numero 2

class DiscountItem extends Item {
  constructor(name, quantity, price, taxRate, discountRate) {
    super(name, quantity, price, taxRate);
    this.discountRate = discountRate;
  }

  applyDiscount() {
    this.price *= (1 - this.discountRate / 100);
  }
}

const discountedBanana = new DiscountItem("Banana", 6, 1, 6, 50);
const discountedApple = new DiscountItem("Apple", 3, 1.5, 6, 50);
const wine = new Item("Wine", 2, 10, 21);

discountedBanana.applyDiscount();
discountedApple.applyDiscount();

const totalCost = discountedBanana.getTotal() + discountedApple.getTotal() + wine.getTotal();
console.log("Total Cost with Discount: €" + totalCost.toFixed(2));



// exercie 2 cas numero 3

class Content {
  constructor(title, text) {
    this.title = title;
    this.text = text;
  }

  displayContent() {
    return `<h2>${this.title}</h2><p>${this.text}</p>`;
  }
}

class Advertisement extends Content {
  displayContent() {
    return `<h2>${this.title.toUpperCase()}</h2><p>${this.text}</p>`;
  }
}

class JobPost extends Content {
  displayContent() {
    return `<h2>${this.title} - Postulez maintenant !</h2><p>${this.text}</p>`;
  }
}

const articles = new Content("Article Title", "Article Text");
const ad = new Advertisement("Ad Title", "Ad Text");
const jobPost = new JobPost("Job Title", "Job Text");

console.log(articles.displayContent());
console.log(ad.displayContent());
console.log(jobPost.displayContent());





// exercie 2 cas numero 4

class Student {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

class Group {
  constructor(students) {
    this.students = students;
  }

  calculateAverageScore() {
    const totalScore = this.students.reduce((sum, student) => sum + student.score, 0);
    return totalScore / this.students.length;
  }

  moveStudent(student, targetGroup) {
    const index = this.students.indexOf(student);
    if (index !== -1) {
      this.students.splice(index, 1);
      targetGroup.students.push(student);
    }
  }
}

const group1 = new Group([new Student("Alice", 85), new Student("Bob", 92), /* ... */]);
const group2 = new Group([new Student("Charlie", 78), new Student("David", 88), /* ... */]);

console.log("Average Score in Group 1: " + group1.calculateAverageScore());
console.log("Average Score in Group 2: " + group2.calculateAverageScore());


const studentToMove = group1.students[0];
group1.moveStudent(studentToMove, group2);

console.log("New Average Score in Group 1: " + group1.calculateAverageScore());
console.log("New Average Score in Group 2: " + group2.calculateAverageScore());



