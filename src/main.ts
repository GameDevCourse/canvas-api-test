
window.onload = () => {
    //alert("1111111");
    var canvas = document.getElementById("context") as HTMLCanvasElement;
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
    textfield.color = "#FF0000"
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
    setInterval(() => {
        context2d.clearRect(0, 0, canvas.width, canvas.height);
        textfield.y++;
        bitmap1.x++;
        container.draw(context2d);
    }, 100)
};

interface DrawAble {
    draw(canvas: CanvasRenderingContext2D);
}

class DisplayObjectContainer implements DrawAble {
    list: DrawAble[] = [];

    addchild(child: DrawAble) {
        this.list.push(child);
    }
    removechild(child: DrawAble) {
        for(var ele of this.list){
            if(ele==child){
                var index = this.list.indexOf(child);
                this.list.splice(index);
            }
        }
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
    sclarX: number = 1;
    sclarY: number = 1;
    alpha: number = 1;
    draw(canvas: CanvasRenderingContext2D) { }
}

class TextField extends DisplayObject {
    text: string = "";
    color: string = "";
    fontsize: number = 10;
    fontname: string = "";
    draw(canvas: CanvasRenderingContext2D) {
        canvas.fillStyle = this.color;
        canvas.globalAlpha = this.alpha;
        canvas.font = this.fontsize.toString() + "px " + this.fontname.toString();
        // canvas.fillText(this.text, this.x, this.y + this.fontsize * this.sclarY, canvas.measureText(this.text).width * this.sclarX);
        canvas.fillText(this.text, this.x, this.y + this.fontsize);
    }
}

class Bitmap extends DisplayObject {
    private img: HTMLImageElement = null;
    private dirtyflag: boolean = true;
    public set image(image: HTMLImageElement) { this.img = image; this.dirtyflag = true; }
    draw(canvas: CanvasRenderingContext2D) {
        canvas.globalAlpha = this.alpha;
        if (!this.dirtyflag) {
            canvas.drawImage(this.img, this.x, this.y, this.img.width * this.sclarX, this.img.height * this.sclarY);
        }
        this.img.onload = () => {
            //canvas.scale
            // canvas.drawImage(this.img, this.x, this.y, this.img.width, this.img.height,
            //     this.sclarX, this.sclarY, this.img.width * this.sclarX, this.img.height * this.sclarY);
            canvas.drawImage(this.img, this.x, this.y, this.img.width * this.sclarX, this.img.height * this.sclarY);
            this.dirtyflag = false;
        }
    }
}