var numbers = [19, 30, 62,89,52];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Hue, Saturation, Brightness
  // Hues = 0 -360
  colorMode(HSB,360, 100, 100, 100);
  // set the bg to white with 0 hues, 0 sat, brightness 100 = color white
  background(0, 0,100);
  
  for ( var i = 0; i < numbers.length; i++){
    var n = numbers[i]; // get the current number from the array 
    var w = width/numbers.length;
    var x = map(i, 0, numbers.length, 0,width);
    var h = map(n, 0, max(numbers),0, height);
    var y = height - h;
    var c = map(n, 0, max(numbers), 0, 360);
    
    if ( mouseX > x && mouseX < x + w && mouseY > y && mouseY < height){
      fill((c + 180) % 360, 100, 100);
      rect(x, y,w,h);
      
      fill(0);
      textAlign(CENTER);
      textSize(16);
      text(n, x + w/2 ,y - 10);
    }else{
    
    fill( c, 100, 100); // Hue // sat 100 // bright 100
    rect(x, y,w,h);
    
   // rect(i*20,height - n,20,n );
    }
    
  }
}