//code to display next step once user inputs the correct answer to the form
document.getElementById("submitbtn").addEventListener('click', () => {
    if (document.getElementById("formtext").value == "wittikka") {
        alert("Congratulations Hunter. Open a Discord Ticket and post code 73476 to claim your bounty.");
    } else {
        alert("Incorrect. Try again.")
    }
})

//code to display answer on bold hover
document.getElementById("bold").onclick = function() {
    document.getElementById("the-answer").style.color = "red"
}