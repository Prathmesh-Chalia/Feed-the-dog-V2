
var database;

var dogIMG, happyIMG, foodIMG;

var dog;

var foodS, foodStock, food, time;

var ft;

function preload() {

  dogIMG = loadImage("src/images/Dog.png");

  happyIMG = loadImage("src/images/happydog.png");

  foodIMG = loadImage("src/images/Milk.png")

}

function setup() {
  createCanvas(800, 700);

  database = firebase.database()

  foodStock = database.ref("Food")

  foodStock.on("value", readValue);
  time = database.ref("Time")
  time.on("value", readValueOfTime)

  dog = new Dog(650, 350);

  food = new Food(100, 100)

}


function draw() {

  background(46, 139, 87)

  dog.feed();
  food.addFood();
  food.display();

  drawSprites();

  textSize(20)
  fill("white")

  if (ft == undefined) {
    text("<- press the button to feed the dog", 450, 60);
  }

  text("Last time fed: " + new Date(time).toLocaleDateString() + " at " + new Date(time).toLocaleTimeString(), 100, 120)

  text("Milk supply: " + foodS, 100, 100)

}

readValue = (data) => {

  foodS = data.val();

}

readValueOfTime = (data) => {

  time = data.val();

}


