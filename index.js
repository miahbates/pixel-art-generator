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
