function updateDate() {
    const currentDate = new Date();
    const dateElement = document.getElementById("dateDisplay");
    dateElement.textContent = currentDate.toLocaleString(); // Display the date and time in a user-friendly format
}


setInterval(updateDate, 1000)