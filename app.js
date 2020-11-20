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
        let xPos = randomVal(0, max);
        if(xPos > max - width){xPos = max - width;} // This can be cleaner --
        let yPos = randomVal(0, max);
        if(yPos > max - width){yPos = max - width;} // This can be cleaner --
        this.div.css({
            "left" : xPos,
            "top" : yPos
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

let max = 600; // Size of #canvas. Should be dynamic --
function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

$('#add-square').click(function(){
    let width = $('#add-square-input').val();
    s1 = new Shape;
    s1.square(width);
})

// for (let index = 0; index < 500; index++) {
//     let width = 50;
//     s1 = new Shape;
//     s1.square(width);
    
// }