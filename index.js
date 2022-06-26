// #1
function setup() {
  // set-up function runs on page load
  createCanvas(windowWidth, windowHeight);
  // loop over x1000
  for (let i = 0; i < 1000; i++) {
    // Inside the for loop, write code to draw a circles
    // Fill(num red, num green, num blue, alpha (transparency))
    fill(random(150), random(25), random(215), random(15));
    // Elipse is coordinated for centtere of a circle ((x,y,width,h))
    ellipse(random(windowWidth), random(windowHeight), random(50));
  }
}

// #2
function setup() {
  // set-up function runs on page load height and width of window
  createCanvas(windowWidth, windowHeight);
  // background set to rgb value
  background(153, 194, 161);

  // for loops executing 'x' amount of time with rectangle and circle shapes
  // fill adds rgb value and opacity color to the inside of the shape
  // stroke adds rgb value to the 'edges' of the shape
  for (let i = 0; i < 100; i++) {
    ellipse(random(windowWidth), random(windowHeight), random(140));
    fill(255, 191);
    stroke(237, 157, 155);
  }

  for (let i = 0; i < 200; i++) {
    rect(random(windowWidth), random(windowHeight), random(90));
    fill(237, 157, 155, 100);
    stroke(201, 28, 60);
  }

  for (let i = 0; i < 500; i++) {
    ellipse(random(windowWidth), random(windowHeight), random(20));
    fill(201, 28, 60);
    stroke(237, 157, 155);
  }
}
