!function(r){var t={};function i(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return r[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=r,i.c=t,i.d=function(r,t,e){i.o(r,t)||Object.defineProperty(r,t,{configurable:!1,enumerable:!0,get:e})},i.r=function(r){Object.defineProperty(r,"__esModule",{value:!0})},i.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return i.d(t,"a",t),t},i.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},i.p="",i(i.s=2)}([function(r,t){r.exports=function(){this.x=Math.floor(10*Math.random()),this.y=Math.floor(10*Math.random())}},function(r,t){r.exports=function(){this.x=0,this.y=0,this.direction="right"}},function(r,t,i){var e=i(1),o=i(0);var s=new function(){var r=document.querySelectorAll("#board div");this.board=r,this.furry=new e,this.porg=new o,this.score=0;var t=new Audio("FX/rey.mp3");t.play(),t.volume=.7,this.index=function(r,t){return r+10*t},this.showFurry=function(){this.hideVisibleFurry(),this.board[this.index(this.furry.x,this.furry.y)].classList.add("furry")},this.scream=function(){var r=new Audio("FX/chewy.mp3");this.screamTimeOut=setTimeout(function(){r.volume=.2,r.play()},500),this.screamInterval=setInterval(function(){r.volume=.2,r.play()},3e4)},this.showPorg=function(){this.board[this.index(this.porg.x,this.porg.y)].classList.add("porg")},this.startGame=function(){var r=this;this.idSetInterval=setInterval(function(){r.moveFurry()},250),this.scream()},this.moveFurry=function(){"right"===this.furry.direction?this.furry.x=this.furry.x+1:"left"===this.furry.direction?this.furry.x=this.furry.x-1:"down"===this.furry.direction?this.furry.y=this.furry.y+1:"up"===this.furry.direction&&(this.furry.y=this.furry.y-1),this.gameOver(),this.showFurry(),this.checkPorgCollision()},this.hideVisibleFurry=function(){var r=document.querySelector(".furry");null!=r&&r.classList.remove("furry")},this.turnFurry=function(r){switch(r.which){case 37:this.furry.direction="left";break;case 38:this.furry.direction="up";break;case 39:this.furry.direction="right";break;case 40:this.furry.direction="down"}},this.checkPorgCollision=function(){var r=document.querySelector(".porg"),t=new Audio("FX/porg.mp3");this.furry.x===this.porg.x&&this.furry.y===this.porg.y&&(t.play(),this.score+=1,document.querySelector("#score strong").innerHTML=this.score,r.classList.remove("porg"),this.porg=new o,this.showPorg())},this.gameOver=function(){(this.furry.x<0||this.furry.y<0||this.furry.x>9||this.furry.y>9)&&(clearInterval(this.idSetInterval),this.hideVisibleFurry(),alert("HUNT OVER ♥                                          SCORE: "+this.score+"\n\nYou content yourself with the poor animals you've already caught\nand let some purgs live till tomorrow..."))}};s.showFurry(),s.showPorg(),s.startGame(),document.addEventListener("keydown",function(r){s.turnFurry(r)})}]);