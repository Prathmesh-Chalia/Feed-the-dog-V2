class Dog {

    constructor(x, y) {

        this.sprite = createSprite(x, y)


        this.sprite.addImage(dogIMG)
        this.sprite.scale = 0.25
    }

    updateVal = (x) => {

        if (x <= 0) {
            x = 0
        } else {
            x = x - 1
        }


        database.ref("/").update({
            Food: x,
            Time: new Date().getTime()
        });

    }

    feed() {

        let btn = createButton("Feed the dog");
        btn.position(700, 95);
        btn.mousePressed(() => {

            this.updateVal(foodS);


            this.sprite.addImage(happyIMG);

            ft = "true"

            setTimeout(() => {
                this.sprite.addImage(dogIMG)
            }, 5000)

        });

    }



}