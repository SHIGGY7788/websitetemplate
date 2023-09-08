function updateDate() {
    const currentDate = new Date();
    const dateElement = document.getElementById("dateDisplay");
    dateElement.textContent = currentDate.toLocaleString();
}
setInterval(updateDate, 1000)