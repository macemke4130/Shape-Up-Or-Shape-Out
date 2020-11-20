class Shape {
    constructor(){
        this.div = $('<div></div>');
        this.div.css({
            "position" : "absolute"
        });
        this.div.css({
            "background-color": ranColor()
        });
        
    }

    square(width){
        $('#canvas').append(this.div);
        this.div.css({
            "height" : width,
            "width" : width
        });
        this.div.css({
            "left" : randomVal(0, max),
            "top" : randomVal(0, max)
        });
    }
}

function ranColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let output = `rgb(${r}, ${g}, ${b})`;
    return output;
}

let max = 600; // Size of #canvas --
function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

$('#add-square').click(function(){
    let width = $('#add-square-input').val();
    s1 = new Shape;
    s1.square(width);
})