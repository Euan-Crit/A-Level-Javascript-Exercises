let smiley;
let floor;
function setup() {
	new Canvas(800, 800);


	smiley = new Sprite(10,10);
	smiley.d = 100;
	smiley.color = 'pink'
	smiley.bounciness = 0.8;
	smiley.physics = DYNAMIC;
	s = new Sprite(100,100);
	s.d = 100;
	s.color = 'pink'
	s.bounciness = 8;
	s.physics = DYNAMIC;
	world.gravity.y = 1;
    floor = new Sprite(400,800,1000,100);

floor.physics = STATIC;
floor = new Sprite(400,8,1000,100);
floor.physics = STATIC;
floor = new Sprite(800,400,10,1000);

floor.physics = STATIC;
floor = new Sprite(4,800,10,10000);

floor.physics = STATIC;
}
function draw() {
	background(200);

}
function mousePressed() {
	new Sprite(mouseX, mouseY).d = 50;
}