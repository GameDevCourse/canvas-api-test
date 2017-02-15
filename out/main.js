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
    textfield.y = 0;
    textfield.text = "Hello,world";
    var bitmap1 = new Bitmap();
    bitmap1.x = 0;
    bitmap1.y = 0;
    var img = document.createElement("img");
    img.src = "weapan001.png";
    bitmap1.image = img;
    container.addchild(bitmap1);
    container.addchild(textfield);
    container.draw(context2d);
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
    }
    DisplayObject.prototype.draw = function (canvas) { };
    return DisplayObject;
}());
var TextField = (function (_super) {
    __extends(TextField, _super);
    function TextField() {
        _super.apply(this, arguments);
        this.text = "";
    }
    TextField.prototype.draw = function (canvas) {
        canvas.fillText(this.text, this.x, this.y + 10);
    };
    return TextField;
}(DisplayObject));
var Bitmap = (function (_super) {
    __extends(Bitmap, _super);
    function Bitmap() {
        _super.apply(this, arguments);
        this.image = null;
    }
    Bitmap.prototype.draw = function (canvas) {
        var _this = this;
        this.image.onload = function () {
            canvas.drawImage(_this.image, _this.x, _this.y);
        };
    };
    return Bitmap;
}(DisplayObject));
//# sourceMappingURL=main.js.map