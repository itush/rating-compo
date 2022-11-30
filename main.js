import './style.css'

document.querySelector(".s-btn").disabled = true;
const finalScore = document.getElementsByName('userScore');

const enableBtn = () => {
    document.querySelector(".s-btn").disabled = false;
}

document.getElementById("1").addEventListener("click", enableBtn);
document.getElementById("2").addEventListener("click", enableBtn);
document.getElementById("3").addEventListener("click", enableBtn);
document.getElementById("4").addEventListener("click", enableBtn);
document.getElementById("5").addEventListener("click", enableBtn);

const showRating = () => {   

    for (var i = 0; i < finalScore.length; i++) {

        const x = document.getElementById("result");

        (finalScore[i].checked) ? (x.innerHTML = `You selected ` + finalScore[i].value + ` out of 5`) : (``);
    }

    document.getElementById("rating-form").style.display = "none";
    document.getElementById("final-page").style.display = "block";
}

document.querySelector(".s-btn").addEventListener("click", showRating);


