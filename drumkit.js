let numberofboxes = document.querySelectorAll(".box").length;

// event for clicks
for (let i = 0; i < numberofboxes; i++) {
    document.querySelectorAll(".box")[i].addEventListener("click", function() {

        let boxinnerHTML = this.innerHTML;

        makeSound(boxinnerHTML);
        animation(boxinnerHTML);

    });
}

// event for key press 
document.addEventListener("keypress", function(event) {

    makeSound(event.key);
    animation(event.key);

});

//making sounds

function makeSound(key) {
    switch (key) {
        case "a":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "s":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "d":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "f":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "g":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "h":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "j":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    }
}

// make animation 

function animation(key) {

    let boxes = document.getElementsByClassName("box");
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].innerHTML == key) {
            boxes[i].classList.add("pressed");
            setTimeout(() => {
                boxes[i].classList.remove("pressed")
            }, 200);
        }
    }
}