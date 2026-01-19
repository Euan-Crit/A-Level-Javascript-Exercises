let smiley;
let floor;
let isPaused = false;
let keyWasPressed = false;
let savedVelocities = {};
function setup() {
	new Canvas(800, 800);


	smiley = new Sprite(10,10);
	smiley.d = 100;
	smiley.color = 'pink'
	smiley.bounciness = 5;
	smiley.physics = DYNAMIC;
	s = new Sprite(100,100);
	s.d = 100;
	s.color = 'pink'
	s.bounciness = 5;
	s.physics = DYNAMIC;
	world.gravity.y = 1;
    floor1 = new Sprite(400,800,1000,100);
floor1.physics = STATIC;
floor2 = new Sprite(400,8,1000,100);
floor2.physics = STATIC;
floor3 = new Sprite(800,400,10,1000);

floor3.physics = STATIC;
floor4 = new Sprite(4,800,10,10000);

floor4.physics = STATIC;
}
function draw() {
	background(200);
	
	// Check for space bar press (only triggers once per press)
	if (keyIsPressed && key === ' ' && !keyWasPressed) {
		if (isPaused) {
			unpauseAllSprites();
			isPaused = false;
		} else {
			pauseAllSprites();
			isPaused = true;
		}
		keyWasPressed = true;
	}
	
	// Reset when key is released
	if (!keyIsPressed) {
		keyWasPressed = false;
	}
}
function mousePressed() {
	new Sprite(mouseX, mouseY).d = 50;
	sprite.bounciness = 2	;
}

function pauseAllSprites() {
	for (let i = 0; i < allSprites.length; i++) {
		let sprite = allSprites[i];
		savedVelocities[i] = {x: sprite.vel.x, y: sprite.vel.y};
		sprite.physics = STATIC;
	
	}
}

function unpauseAllSprites() {
	for (let i = 0; i < allSprites.length; i++) {
		let sprite = allSprites[i];
		if (savedVelocities[i]) {
			sprite.physics = DYNAMIC;
			sprite.vel.x = savedVelocities[i].x;
			sprite.vel.y = savedVelocities[i].y;
			floor4.physics = STATIC;
			floor3.physics = STATIC;
			floor2.physics = STATIC;
			floor1.physics = STATIC;
		}
	}
}