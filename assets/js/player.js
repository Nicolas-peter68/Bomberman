class Player {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.vy = 0;
        this.width = 50;
        this.height = 50;
        this.weight = 1;
        //this.bombe = 1;
    }
    update() {
        if (this.y > canvas.height - (this.height)) {
            this.y = canvas.height - (this.height);
        }

        if (this.x > canvas.width - (this.width)) {
            this.x = canvas.width - (this.width);
        }

        if (this.y < this.height) {
            this.y = 0 + this.height;
        }

        if (this.x < this.width) {
            this.x = 0 + this.width;
        }
        if (haut) this.haut();
        if (bas) this.bas();
        if (droite) this.droite();
        if (gauche) this.gauche();
        if (bombe) this.bombe();
    }

    draw() {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    /** 
    test() {
        ctx.fillStyle = 'red';
        ctx.fillRect(45, 23, 56, 56);
    }*/
    bombe() {

        /*
        let parent = document.getElementById("map");
        let bombe = document.createElement('div');
        bombe.className = 'bombe'; 
        bombe.style.top = this.x + "px";
        bombe.style.left = this.y + "px";
        parent.appendChild(bombe);

        setTimeout(() => {
            bombe.remove()
        }, 100000);*/
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, 30, 30);
        console.log("bombe()");
    }
    haut() {
        this.y -= 10;
    }
    bas() {
        this.y += 10;
    }
    droite() {
        this.x += 10;
    }
    gauche() {
        this.x -= 10;
    }

}
const joueur = new Player();
