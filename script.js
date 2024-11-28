// Function to show the Thanksgiving message when button is clicked
document.getElementById('thanksButton').addEventListener('click', function() {
    const message = document.getElementById('thankYouMessage');
    message.textContent = "Thank you for visiting and celebrating Thanksgiving with us!";
    message.style.color = "#ff7f00";
    message.style.fontWeight = "bold";
});
