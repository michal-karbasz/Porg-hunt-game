var Furry = require("./furry.js");
var Porg = require("./porg.js");


// konstruktor gry

function Game() {
    var fields = document.querySelectorAll("#board div");
    this.board = fields;
    this.furry = new Furry();
    this.porg = new Porg();
    this.score = 0;
    var reyTheme = new Audio ("FX/rey.mp3");
    reyTheme.play();
    reyTheme.volume = 0.7;

    // przeliczamy pozycję futrzaka i porga (x/y 0-9)na tablicowy zapis liczby pól (0-99)
    this.index = function(x,y) {
        return x + (y * 10);
    };
    // wywołujemy porga i futrzaka na planszy
    this.showFurry = function() {
        this.hideVisibleFurry();
        this.board[this.index (this.furry.x, this.furry.y)].classList.add("furry");
    };
    // dodajemy ryk polującego futrzaka
    this.scream = function() {
        var chewyScream = new Audio("FX/chewy.mp3");
        this.screamTimeOut = setTimeout(function() {
            chewyScream.volume = 0.2;
            chewyScream.play();
        },500);
        this.screamInterval = setInterval(function () {
            chewyScream.volume = 0.2;
            chewyScream.play();
        },30000);
    };

    this.showPorg = function() {
        this.board[this.index (this.porg.x, this.porg.y)].classList.add("porg");
    };
    //ożywiamy grę
    this.startGame = function() {
        var self = this;
        this.idSetInterval = setInterval(function () {
            self.moveFurry();
        }, 250);
    this.scream();
    };
    //poruszamy futrzakiem
    this.moveFurry = function() {
        if(this.furry.direction === "right") {
            this.furry.x = this.furry.x + 1;
        } else if (this.furry.direction === "left") {
            this.furry.x = this.furry.x - 1;
        } else if (this.furry.direction === "down") {
            this.furry.y = this.furry.y + 1;
        } else if (this.furry.direction === "up") {
            this.furry.y = this.furry.y - 1;
        }
        this.gameOver();
        this.showFurry();
        this.checkPorgCollision();
        
    };
    //usuń klony futrzaka
    this.hideVisibleFurry = function() {
        var memoryOfFurry = document.querySelector(".furry");
        if (memoryOfFurry != null) {
            memoryOfFurry.classList.remove("furry");
        }
    };
    //sterowanie  klawiaturą
    this.turnFurry = function(event) {
        switch (event.which) {
            case 37:
            this.furry.direction = "left";
            break;
            case 38:
            this.furry.direction = "up";
            break;
            case 39:
            this.furry.direction = "right";
            break;
            case 40:
            this.furry.direction = "down";
        }
    };
    //zderzenie z porgiem
    this.checkPorgCollision = function() {
        var porgCollected = document.querySelector(".porg");
        var porgScream = new Audio("FX/porg.mp3");
        if (this.furry.x === this.porg.x && this.furry.y === this.porg.y) {
            porgScream.play();
            this.score += 1;
            document.querySelector("#score strong").innerHTML = this.score;
            porgCollected.classList.remove("porg");
            this.porg = new Porg;
            this.showPorg();
        }
    };

    this.gameOver = function() {
        if (this.furry.x < 0 || this.furry.y < 0 || this.furry.x > 9 || this.furry.y > 9) { 
           clearInterval(this.idSetInterval);
           this.hideVisibleFurry();
           alert("HUNT OVER \u2665                                          SCORE: " + this.score + "\n\nYou content yourself with the poor animals you've already caught\nand let some porgs live till tomorrow..."); 
        }
    };
}

var game1 = new Game();
game1.showFurry();
game1.showPorg();
game1.startGame();

document.addEventListener("keydown", function(event) {
    game1.turnFurry(event);
});