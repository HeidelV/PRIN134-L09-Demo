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

// function checkInstructions(){
//     const instructions = document.querySelectorAll("#recipe-instructions li");
//     console.log(instructions);
//     instructions.forEach(element => {
//         instructions.addEventListener("click", () => (
//             instructions.classList = toggle("is-none")
//         ))
//     })
// }

function checkInstructions() {
    const instructions = document.querySelectorAll("#recipe-instructions li");
    
    instructions.forEach((instruction) => {
        instructions.addEventListener("click", () => {
            setTimeout(() => {
                instructions.style.textDecoration = "is-done";
            }, 3000);
        });
    });
}

function headerAnimate(){
    document.getElementById("headers").classList = 'rotate-center';
    button.classList.add("animationjs");

    setTimeout(() => {
        button.style.backgroundColor = "#A155B9";
        button.classList.remove("animationjs");
    }, 1500);
}
