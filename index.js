const easterEgg = document.getElementById("easter-egg");
const inputView = document.getElementById("input-view");
const resultView = document.getElementById("result-view");
const inputName = document.getElementById("input-name");
const nameButton = document.getElementById("name-button");

easterEgg.style.display = 'none';
resultView.style.display = 'none';


nameButton.addEventListener('click', function() {
    let userName = inputName.value;
    localStorage.name = userName;
    console.log(userName);

    if(userName !== "") {
        inputView.style.display = 'none';
        resultView.style.display = 'block';
        let welcomeHeading = document.getElementById("welcome-heading");
        welcomeHeading.textContent += " " + userName;
    } else {
        alert("Please enter your name. It does not matter if it is a bad name. A name is a name, and it is required. If you do not want to give your name to play this, do the opposite of what is asked in the input box.")
    }
})














document.getElementById("easter").addEventListener('click', function() {
    inputView.style.display = "none";
    easterEgg.style.display = 'block';
    document.body.style.backgroundColor = " hsl(0, 73%, 72%)";
})

