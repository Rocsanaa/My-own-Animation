var p = document.getElementById("text");
var xpos = 0;
var ypos = 0;
var id = setInterval(frame, 5);

function frame() {
    if (xpos == 350) {
        clearInterval(id);
    }
    else {
        xpos++;
        ypos++;
        triangle.style.top = ypos + 'px';
        triangle.style.left = xpos + 'px';
    }
}
