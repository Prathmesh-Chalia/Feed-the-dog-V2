class Food {

    constructor(x, y) {
    };

    updateVal = (x) => {


        x = x + 1



        database.ref("/").update({
            Food: x
        });

    }

    addFood() {

        let btn = createButton("Add more milk");
        btn.position(700, 125);
        btn.mousePressed(() => {

            this.updateVal(foodS);

        });

    }

    display() {

        var x = 80, y = 100;

        imageMode(CENTER)
        image(foodIMG, 540, 350, 70, 70)

        if (foodS != 0) {
            for (var i = 0; i < foodS; i++) {
                if (i % 10 === 0) {
                    x = 80;
                    y = y + 50;
                }

                image(foodIMG, x, y, 50, 50);
                x = x + 30
            }
        }
    }


}