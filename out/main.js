var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
window.onload = function () {
    //alert("1111111");
    var canvas = document.getElementById("context");
    var context2d = canvas.getContext("2d");
    // context2d.fillStyle = "#FF0000";
    // context2d.fillRect(0, 0, 150, 75);
    var container = new DisplayObjectContainer();
    var textfield = new TextField();
    textfield.x = 0;
    textfield.sclarX = 5;
    //textfield.sclarY = 5;
    textfield.alpha = 0.5;
    textfield.y = 0;
    textfield.color = "#FF0000";
    //textfield.font = "40px Arial";
    textfield.fontsize = 40;
    textfield.fontname = "Arial";
    textfield.text = "Hello,world";
    var bitmap1 = new Bitmap();
    bitmap1.x = 0;
    bitmap1.y = 0;
    bitmap1.alpha = 0.8;
    bitmap1.sclarX = 2;
    bitmap1.sclarY = 2;
    var image = document.createElement("img");
    image.src = "weapan001.png";
    bitmap1.image = image;
    container.addchild(bitmap1);
    container.addchild(textfield);
    container.draw(context2d);
    setInterval(function () {
        context2d.clearRect(0, 0, canvas.width, canvas.height);
        textfield.y++;
        bitmap1.x++;
        container.draw(context2d);
    }, 100);
};
var DisplayObjectContainer = (function () {
    function DisplayObjectContainer() {
        this.list = [];
    }
    DisplayObjectContainer.prototype.addchild = function (child) {
        this.list.push(child);
    };
    DisplayObjectContainer.prototype.draw = function (canvas) {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var child = _a[_i];
            child.draw(canvas);
        }
    };
    return DisplayObjectContainer;
}());
var DisplayObject = (function () {
    function DisplayObject() {
        this.x = 0;
        this.y = 0;
        this.sclarX = 1;
        this.sclarY = 1;
        this.alpha = 1;
    }
    DisplayObject.prototype.draw = function (canvas) { };
    return DisplayObject;
}());
var TextField = (function (_super) {
    __extends(TextField, _super);
    function TextField() {
        _super.apply(this, arguments);
        this.text = "";
        this.color = "";
        this.fontsize = 10;
        this.fontname = "";
    }
    TextField.prototype.draw = function (canvas) {
        canvas.fillStyle = this.color;
        canvas.globalAlpha = this.alpha;
        canvas.font = this.fontsize.toString() + "px " + this.fontname.toString();
        // canvas.fillText(this.text, this.x, this.y + this.fontsize * this.sclarY, canvas.measureText(this.text).width * this.sclarX);
        canvas.fillText(this.text, this.x, this.y + this.fontsize);
    };
    return TextField;
}(DisplayObject));
var Bitmap = (function (_super) {
    __extends(Bitmap, _super);
    function Bitmap() {
        _super.apply(this, arguments);
        this.img = null;
        this.dirtyflag = true;
    }
    Object.defineProperty(Bitmap.prototype, "image", {
        set: function (image) { this.img = image; this.dirtyflag = true; },
        enumerable: true,
        configurable: true
    });
    Bitmap.prototype.draw = function (canvas) {
        var _this = this;
        canvas.globalAlpha = this.alpha;
        if (!this.dirtyflag) {
            canvas.drawImage(this.img, this.x, this.y, this.img.width * this.sclarX, this.img.height * this.sclarY);
        }
        this.img.onload = function () {
            canvas.scale;
            // canvas.drawImage(this.img, this.x, this.y, this.img.width, this.img.height,
            //     this.sclarX, this.sclarY, this.img.width * this.sclarX, this.img.height * this.sclarY);
            canvas.drawImage(_this.img, _this.x, _this.y, _this.img.width * _this.sclarX, _this.img.height * _this.sclarY);
            _this.dirtyflag = false;
        };
    };
    return Bitmap;
}(DisplayObject));
//# sourceMappingURL=main.js.map