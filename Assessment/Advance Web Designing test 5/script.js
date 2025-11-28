// Function to format single digits with a leading zero
function formatTime(value) {
    return value < 10 ? '0' + value : value;
}

function updateClock() {
    const now = new Date();

    // 3) Arrays for days and months
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // Format the date string: Wednesday, May 19, 2021
    const dateString = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;

    // Get time components
    let hours = now.getHours();
    const minutes = formatTime(now.getMinutes());
    const seconds = formatTime(now.getSeconds());
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const timeString = `${formatTime(hours)}:${minutes}:${seconds} ${ampm}`;

    // 4) innerHTML to update the display
    document.getElementById('date-display').innerHTML = dateString;
    document.getElementById('time-display').innerHTML = timeString;
}

// 1) setTimeinterval() to call updateClock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately on load
updateClock();