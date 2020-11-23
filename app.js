let max = $('#canvas').css("width").slice(0, 3); // Gets the size of the #canvas element --
let shapeList = [];
let shapeCount = 0;

class Shape {
    constructor(width) {
        this.div = $('<div></div>');
        this.div.addClass('shape');
        this.div.click(() => this.describe(this.type, this.width, this.height));
        this.div.dblclick(() => this.removeShape());
        this.div.mouseover(() => this.hoverShape());
        this.div.mouseout(() => this.hoverOffShape());
    }

    randomVal(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    describe(type, width, height) {
        this.clearOutputs();
        // Determines output for Square or Rectangle --
        if (type == "square" && width != height) { type = "rectangle"; }
        type = type.charAt(0).toUpperCase() + type.slice(1); // Capitalizes first character --

        $('#shape-output').val(type);
        $('#width-output').val(width + "px");
        $('#height-output').val(height + "px");

        switch (type) {
            case "Circle":
                $('#radius-output').val(width / 2 + "px");
                $('#area-output').val(Math.floor(Math.PI * ((width / 2) * (width / 2))) + "px");
                $('#perimeter-output').val(Math.floor(2 * Math.PI * (width / 2)) + "px");
                break;

            case "Triangle":
                $('#area-output').val((width * height) / 2 + "px");
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

    clearOutputs() {
        this.hoverOffShape();
        $('#shape-output').val("");
        $('#width-output').val("");
        $('#height-output').val("");
        $('#radius-output').val("");
        $('#area-output').val("");
        $('#perimeter-output').val("");
    }

    removeShape() {
        $(this.div).remove();
        this.clearOutputs();
        shapeCount--;
    }

    hoverShape(){
        document.getElementById('hover').innerHTML = `X Position: ${this.xPos}<br>
        Y Position: ${this.yPos}`;
    }

    hoverOffShape(){
        document.getElementById('hover').innerHTML = "";
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.type = "circle";
        this.width = radius * 2;
        this.height = radius * 2;
        this.xPos = this.randomVal(0, (max - this.width)); // Calculates the size of the object into the random position --
        this.yPos = this.randomVal(0, (max - this.height));

        this.div.addClass('circle');
        this.div.css({
            "left": this.xPos,
            "top": this.yPos,
            "background-color": "purple",
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
        this.width = width;
        this.height = width;
        this.xPos = this.randomVal(0, (max - this.width)); // Calculates the size of the object into the random position --
        this.yPos = this.randomVal(0, (max - this.height));

        this.div.addClass('triangle');
        this.div.css({
            "left": this.xPos,
            "top": this.yPos,
            "background-color": "transparent",
            "border-width": width + "px 0 0 " + width + "px",
            "border-color": "transparent transparent transparent yellow"
        });
        $('#canvas').append(this.div);
    }
}

class Square extends Shape {
    constructor(width, height = width) { // Defaults to a square for only one input --
        super();
        this.type = "square"; // Rectangles get their name changed in the describe() method --
        this.width = width;
        this.height = height;
        this.xPos = this.randomVal(0, (max - this.width)); // Calculates the size of the object into the random position --
        this.yPos = this.randomVal(0, (max - this.height));
        let bgColor;
        if (this.width == this.height) { // Catch for either Square or Rectangle --
            bgColor = "red";
        } else {
            bgColor = "green";
        }

        this.div.css({
            "left": this.xPos,
            "top": this.yPos,
            "background-color": bgColor,
            "height": height,
            "width": width
        });
        $('#canvas').append(this.div);
    }
}

$('#add-square').click(function () {
    let width = $('#add-square-input').val();
    if (width > 600) {
        alert("Maximum size for this input is 600.");
    } else {
        shapeList[shapeCount] = new Square(width);
        shapeCount++;
    }
});

$('#add-rectangle').click(function () {
    let width = $('#add-rectangle-width-input').val();
    let height = $('#add-rectangle-height-input').val();
    if (width > 600 || height > 600) {
        alert("Maximum size for this input is 600.");
    } else {
        shapeList[shapeCount] = new Square(width, height);
        shapeCount++;
    }
});

$('#add-circle').click(function () {
    let radius = $('#add-circle-input').val();
    if (radius > 300) {
        alert("Maximum size for this input is 300.");
    } else {
        shapeList[shapeCount] = new Circle(radius);
        shapeCount++;
    }
});

$('#add-triangle').click(function () {
    let width = $('#add-triangle-input').val();
    if (width > 600) {
        alert("Maximum size for this input is 600.");
    } else {
        shapeList[shapeCount] = new Triangle(width);
        shapeCount++;
    }
});