document.getElementById("lefteye").style.backgroundColor ="green";
document.getElementById("head").style.transform ="rotate(30deg)";
document.getElementById("mouth").style.backgroundColor= "lightblue";
document.getElementById("rightarm").style.left="22%";

var body = document.getElementById("body");
var nose = document.getElementById("nose");

body.addEventListener("click", moveleftright);
nose.addEventListener("click", moverightdown);

function moveleftright(b) {
    var robot = b.target;
    var left = 0;
    var id = setInterval(frame,5) // draw every 5ms
    function frame() {
        robot.style.left = left + '%';
        left++;
        if (left === 26){
            
            clearInterval (id);
            
        }
    }
}

function moverightdown(n) {
    var robot = n.target;
    var left = 65;
    var id = setInterval(frame,10) // draw every 5ms
    function frame() {
        robot.style.left = left + '%';
        left--;
        if (left === 44){

            clearInterval(id);

        }
    }

}
