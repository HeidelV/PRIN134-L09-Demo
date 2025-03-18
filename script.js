function highlightIngredient() {
    const ingredients = document.querySelectorAll("#recipe-ingredients li");
    ingredients.forEach((ingredient, index) => {
        if (index % 2 === 0) {
            ingredient.classList.toggle("highlight");
        } else {
            ingredient.classList.remove("highlight");
        }
    });
}

function checkInstructions() {
    const instructions = document.querySelectorAll("#recipe-instructions li");

    instructions.forEach((instruction, index) => {
        setTimeout(() => {
            instruction.classList.add("is-done");
        }, index * 3000); 
    });
}

function reset() {
    const instructions = document.querySelectorAll("#recipe-instructions li");
  
    instructions.forEach(instruction => instruction.classList.remove("is-done"));
}

function ingredientsAnimate() {
    const header = document.querySelector("#ingredients-header"); 
    header.classList.add("animate__animated", "animate__bounce"); 


    header.addEventListener("animationend", () => {
        header.classList.remove("animate__bounce");
    }, { once: true }); 
}

function instructionsAnimate() {
    const header2 = document.querySelector("#instructions-header"); 
    header2.classList.add("animate__animated", "animate__bounce"); 


    header2.addEventListener("animationend", () => {
        header2.classList.remove("animate__bounce");
    }, { once: true }); 
}

function imageAnimate() {
    const image = document.getElementById("cake");
    image.classList.add("animate__animated", "animate__pulse"); 

    image.addEventListener("animationend", () => {
        image.classList.remove("animate__pulse");
    }, { once: true });
}


