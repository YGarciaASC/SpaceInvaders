let spaceX = 325;
let alienX = 325;
let alienInc = 1;
let projectilesArray = [];
let aliensArray = [];
let proX = 500;
let proY = 650;
let crePro = false;
let variableX = false;

function setup() {
    createCanvas(700, 700);
    background(255);
    numOfAliens = 0;
    for(let i = 0; i < 5; i++) {
        aliensArray.push(new Aliens((i * 100) + 25, 100)) //weird
    }
    console.log(aliensArray)
    console.log(aliensArray[0].width)
}

function draw() {
    background(255);
    
    //spaceship code
    fill(0);
    rect(spaceX, 650, 50, 25);
    if(keyIsDown(LEFT_ARROW) && (spaceX >= 25)) {
        spaceX -= 5;
    } else if(keyIsDown(RIGHT_ARROW) && (spaceX <= 625)){
        spaceX += 5;
    }
    for(let i = 0; i < projectilesArray.length; i++) {
        projectilesArray[i].draw();
        projectilesArray[i].move();
    }
    for(let i = 0; i < aliensArray.length; i++) {
        aliensArray[i].draw();
        aliensArray[i].move();
    }
    for(let i = 0; i < projectilesArray.length; i++) {
        for(let j = 0; j < aliensArray.length; j++) {
            console.log(projectilesArray);
            console.log(projectilesArray[i].y);
            if(projectilesArray[i].y - projectilesArray[i].diameter <= aliensArray[j].y + 35) {
                projectilesArray.splice(i);
            }
        }
        
    }
}

function keyPressed(){
    if (keyCode === 32 && variableX == false) {
        projectilesArray.push(new Projectiles(spaceX + 25))         
      } 
}

// function keyReleased() {
//     if (keyCode === 32 && variableX == true) {
//       variableX = false;
//     }
    
// }

// function createProjectile() {
//     fill(255, 0, 0);
//     ellipse(proX, proY, 25, 25)
//     proY -= 5;
    
// }

class Projectiles {
    constructor(x) {
        this.x = x;
        this.y = 650;  
        this.diameter = 25;
        this.speed = 5;
    }
  
    move() {
      this.y -= this.speed;
    }
  
    draw() {
        fill("red");
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
  
}

class Aliens {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 25;
        this.height = 50;
        this.speed = 5;
        this.health = 20;
    }
    move() {
        this.x += this.speed;
        if(this.x >= 675) {
            this.speed *= -1;
        } 
        if(this.x <= 25) {
            this.speed *= -1;
        }
        // else if (this.x >= 649 && this.y > 99 && this.y < 200) {
        //     this.y += 3;
        // } else if (this.x < 650 && this.y > 199 && this.y < 299) {
        //     this.x -= 3;
        // }
    }

    draw() {
        fill("black")
        rect(this.x, this.y, this.width, this.height);
    }
}

//checkCollision function
//if the x or y values of the Aliens have a distance of 0-10 to the x or y values of the projectiles
// projectiles kys
//Aliens takedamage