let max = 600; // Size of #canvas. Should be dynamic --
let shapeList = [];
let shapeCount = 0;

class Shape {
    constructor(type, width, height) {
        this.type = type;
        this.width = width;
        this.height = height;
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

        //this.div.click(() => this.outputs());
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
    clearOutputs();
    if (type == "square" && width != height) { type = "rectangle"; }
    type = type.charAt(0).toUpperCase() + type.slice(1); // Capitalizes first character --

    $('#shape-output').val(type);
    $('#width-output').val(width);
    $('#height-output').val(height);

    // Removes "px" from variables --
    width = width.slice(0, width.length - 2);
    height = height.slice(0, height.length - 2);

    switch (type) {
        case "Circle":
            $('#radius-output').val(width / 2 + "px");
            $('#area-output').val(Math.floor(Math.PI * ((width / 2) * (width / 2))) + "px");
            $('#perimeter-output').val(Math.floor(2 * Math.PI * (width / 2)) + "px");
            break;

        case "Triangle":
            $('#area-output').val((width * height) / 2);
            $('#radius-output').val("N/A");
            $('#perimeter-output').val((Math.floor(Math.sqrt((width * width) + (width * width)) + (width * 2))) + "px");
            break;

        default:
            $('#area-output').val(width * height + "px");
            $('#perimeter-output').val(width * 2 + height * 2 + "px");
            $('#radius-output').val("N/A");
            break;
    }
}

function clearOutputs(){
    $('#shape-output').val("");
    $('#width-output').val("");
    $('#height-output').val("");
    $('#area-output').val("");
    $('#perimeter-output').val("");

}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.type = "circle";
        this.div.addClass('circle');
        this.div.css({
            "height": radius * 2,
            "width": radius * 2
        });
        $('#canvas').append(this.div);
    }
}

class Triangle extends Shape {
    constructor(width) {
        super();
        this.type = "triangle";
        this.div.addClass('triangle');
        this.div.css({
            "background-color": "transparent", // Overrides Shape Class Decloration --
            "border-width": width + "px 0 0 " + width + "px",
            "border-color": "transparent transparent transparent " + this.ranColor(),
            "transform": "rotate(135deg)"
        });
        $('#canvas').append(this.div);
    }
}

class Square extends Shape {
    constructor(width, height = width) {
        super();
        this.type = "square";
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

$('#add-triangle').click(function () {
    let width = $('#add-triangle-input').val();
    shapeList[shapeCount] = new Triangle(width);
    shapeCount++;
});