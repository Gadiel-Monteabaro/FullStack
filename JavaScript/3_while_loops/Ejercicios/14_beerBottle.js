function beer() {
    var i = 100;

    while (i > 0) {

        if (i != 1) {
            console.log(`${i} bottles of beer on the wall, ${i} bottles of beer, Take one down and pass it around, ${i - 1} bottles of beer in the wall.`);

        } else {
            console.log(`${i} bottle of beer on the wall, ${i} bottle of beer, Take one down and pass it around, ${i - 1} bottles of beer in the wall.`);
        }
        i--
    }

    console.log(`Sorry we don't have more beers.`);
}

beer();