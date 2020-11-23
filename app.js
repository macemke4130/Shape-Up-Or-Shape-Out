class Shape {
    constructor() {
        this.div = $('<div></div>');
        this.div.addClass('shape');
        this.xPos = randomVal(0, max);
        this.yPos = randomVal(0, max);
        this.div.css({
            "background-color": this.ranColor(),
            "left": this.xPos,
            "top": this.yPos
        });
    }

    ranColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let output = `rgb(${r}, ${g}, ${b})`;
        return output;
    }

    // this.div.click(function () {
    //     outputs("Square", width, height);
    // });
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.div.addClass('circle');
        this.div.css({
            "height": radius * 2,
            "width": radius * 2
        });
        $('#canvas').append(this.div);
    }
}

class Square extends Shape {
    constructor(width, height = width){
        super();
        this.div.css({
            "height": height,
            "width": width
        });
        $('#canvas').append(this.div);
    }
}

function outputs(type, width, hight) {
    console.log(type, width, height);
}

let max = 600; // Size of #canvas. Should be dynamic --
function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

$('#add-square').click(function () {
    let width = $('#add-square-input').val();
    s1 = new Square(width);
});

$('#add-rectangle').click(function () {
    let width = $('#add-rectangle-width-input').val();
    let height = $('#add-rectangle-height-input').val();
    s1 = new Shape;
    s1.square(width, height);
});

$('#add-circle').click(function () {
    let radius = $('#add-circle-input').val();
    s1 = new Circle(radius);
});