// Scripts para la view 8

// Este script aplica la animacion por css cuando se hace click en una flecha cuyo href sea #ocho

let alienshipAnimation = "alienshipAnimation"
let spaceshipAnimation = "spaceshipAnimation"
let deathTextView8Animation = "deathTextView8Animation"

let toEigth = Array.from(document.getElementsByTagName("a")).filter((aTag) => {
    return aTag.getAttribute("href") == "#ocho";
});

toEigth.forEach((aTag) => {
    aTag.addEventListener("click", () => {
        let spaceship8 = document.getElementById("spaceship8");
        let alienship8 = document.getElementById("alienship8");
        let deathTextView8 = document.getElementById("deathTextView8");

        let alienship8classes = alienship8.getAttribute("class");
        alienship8.setAttribute("class", alienship8classes + " " + alienshipAnimation);

        let spaceship8classes = spaceship8.getAttribute("class");
        spaceship8.setAttribute("class", spaceship8classes + " " + spaceshipAnimation);

        let deathTextView8classes = deathTextView8.getAttribute("class");
        deathTextView8.setAttribute("class", deathTextView8classes + " " + deathTextView8Animation);
    })
});

let revive8 = document.getElementsByClassName("revivir8")[0];

revive8.addEventListener("click", () => {
    let spaceship8 = document.getElementById("spaceship8");
    let alienship8 = document.getElementById("alienship8");
    let deathTextView8 = document.getElementById("deathTextView8");

    let alienship8classes = alienship8.getAttribute("class");
    let spaceship8classes = spaceship8.getAttribute("class");
    let deathTextView8classes = deathTextView8.getAttribute("class");

    alienship8.setAttribute("class", alienship8classes.replace(alienshipAnimation, ""));
    spaceship8.setAttribute("class", spaceship8classes.replace(spaceshipAnimation, ""));
    deathTextView8.setAttribute("class", deathTextView8classes.replace(deathTextView8Animation, ""));
});