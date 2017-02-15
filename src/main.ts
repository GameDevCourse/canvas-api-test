window.onload = () => {
    //alert("1111111");
    var canvas = document.getElementById("context") as HTMLCanvasElement;
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


interface DrawAble {
    draw(canvas: CanvasRenderingContext2D);
}

class DisplayObjectContainer implements DrawAble {
    list: DrawAble[] = [];

    addchild(child: DrawAble) {
        this.list.push(child);
    }
    draw(canvas: CanvasRenderingContext2D) {
        for (var child of this.list) {
            child.draw(canvas);
        }
    }
}

class DisplayObject implements DrawAble {

    x: number = 0;
    y: number = 0;
    draw(canvas: CanvasRenderingContext2D) { }
}

class TextField extends DisplayObject {
    text: string = "";

    draw(canvas: CanvasRenderingContext2D) {
        canvas.fillText(this.text, this.x, this.y + 10);
    }
}

class Bitmap extends DisplayObject {
    image: HTMLImageElement = null;

    draw(canvas: CanvasRenderingContext2D) {
        this.image.onload = () => {
            canvas.drawImage(this.image, this.x, this.y);
        }
    }
}