function updateDateTime() {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
     hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    const formattedDateTime = currentDate.toLocaleDateString('en-US', options);

    document.getElementById('currentDateTime').innerText = `Current Date and Time: ${formattedDateTime}`;
}

    setInterval(updateDateTime, 1000);
    updateDateTime();