function updateClock(){
    let now = new Date();
    let hours =now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds(); 
    let day = now.getDate(); 
    let month = now.getMonth(); 
    let year = now.getUTCFullYear();

    hours = hours <10 ? "0" + hours : hours;
    minutes = minutes <10 ? "0" + minutes : minutes;
    seconds = seconds <10 ? "0" + seconds : seconds;


    const hourElement = document.getElementById("hours"); 
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
    const dateElement = document.getElementById("date");

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Get the day of the week as a number (0-6), then use it to find the name
    const dayName = daysOfWeek[now.getDay()];

    hourElement.textContent = hours; 
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
    dateElement.textContent= `${dayName}, ${day}/${month}/${year}`
}

setInterval(updateClock, 1000);