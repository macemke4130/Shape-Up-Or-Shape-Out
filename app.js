let max = 600; // Size of #canvas. Should be dynamic --
let shapeList = [];
let shapeCount = 0;

class Shape {
    constructor() {
        this.arrayPos = shapeCount;
        this.xPos = this.randomVal(0, max);
        this.yPos = this.randomVal(0, max);
        this.div = $('<div></div>');
        this.div.css({
            "background-color": this.ranColor(),
            "left": this.xPos,
            "top": this.yPos
        });
        this.div.attr('arraypos', this.arrayPos);

        this.div.click(function () {
            outputs($(this).attr('class'), $(this).css("width"), $(this).css("height"));
        });
    }

    ranColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let output = `rgb(${r}, ${g}, ${b})`;
        return output;
    }

    randomVal(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    outputs(type, width, height) {
        console.log("Found Me!");
    }
}

function outputs(type, width, height) {
    console.log(width);
    console.log(height);
    if (type == "square" && width != height) { type = "rectangle"; }
    console.log(type);
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
    constructor(width, height = width) {
        super();
        this.div.addClass('square');
        this.div.css({
            "height": height,
            "width": width
        });
        $('#canvas').append(this.div);
    }
}

$('#add-square').click(function () {
    let width = $('#add-square-input').val();
    shapeList[shapeCount] = new Square(width);
    shapeCount++;
});

$('#add-rectangle').click(function () {
    let width = $('#add-rectangle-width-input').val();
    let height = $('#add-rectangle-height-input').val();
    shapeList[shapeCount] = new Square(width, height);
    shapeCount++;
});

$('#add-circle').click(function () {
    let radius = $('#add-circle-input').val();
    shapeList[shapeCount] = new Circle(radius);
    shapeCount++;
});