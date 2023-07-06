import './style.css'
// Disable the submit button unless any score is selected
document.querySelector(".s-btn").disabled = true;

// Retrieve an HTML collection of elements with the name attribute equal to 'userScore'. This method returns a NodeList of all the matching elements on the current document. The resulting NodeList is then assigned to the finalScore constant.
const finalScore = document.getElementsByName('userScore');
console.log(finalScore);

// function to enable the submit button when a score is selected
const enableBtn = () => {
    document.querySelector(".s-btn").disabled = false;
}

//Add event lister to all user score inputs
document.getElementById("1").addEventListener("click", enableBtn);
document.getElementById("2").addEventListener("click", enableBtn);
document.getElementById("3").addEventListener("click", enableBtn);
document.getElementById("4").addEventListener("click", enableBtn);
document.getElementById("5").addEventListener("click", enableBtn);

//
const showRating = () => {   
    //A for loop that iterates through each element in the "finalScore" collection
    for (var i = 0; i < finalScore.length; i++) {

        const x = document.getElementById("result");

        /*If the element is checked display the value of finalScore[i]*/
        (finalScore[i].checked) ? (x.innerHTML = `You selected ` + finalScore[i].value + ` out of 5`) : (``);
    }
    // Hide the rating form
    document.getElementById("rating-form").style.display = "none";
    // Show the final page
    document.getElementById("final-page").style.display = "block";
}
// Add event lister to the submit button 
document.querySelector(".s-btn").addEventListener("click", showRating);


