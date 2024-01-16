function calculatePlayerStanding(majorChampionships, worldNo1Weeks, pgaTourWins) {
    const totalMetrics = majorChampionships + worldNo1Weeks + pgaTourWins;

    if (totalMetrics >= 40) {
        return "Top 1-5 Golfer <br>player summary:<br>the majorChampionships: " + majorChampionships + "<br>the worldNo1Weeks: " + worldNo1Weeks + " <br>the pgaTourWins: " + pgaTourWins;
    } else if (totalMetrics >= 20) {
        return "Top 6-10 Golfer <br>player summary:<br>the majorChampionships: " + majorChampionships + "<br>the worldNo1Weeks: " + worldNo1Weeks + " <br>the pgaTourWins: " + pgaTourWins;
    } else {
        return "Notable Golfer <br>player summary:<br>the majorChampionships: " + majorChampionships + "<br>the worldNo1Weeks: " + worldNo1Weeks + " <br>the pgaTourWins: " + pgaTourWins;
    }
}

function calculateAndDisplayStanding() {
    const majorChampionshipsInput = document.getElementById("majorChampionships");
    const worldNo1WeeksInput = document.getElementById("worldNo1Weeks");
    const pgaTourWinsInput = document.getElementById("pgaTourWins");
    const resultContainer = document.getElementById("result-container");

    // Parse input values, ensuring they are non-negative
    const majorChampionships = Math.max(0, parseInt(majorChampionshipsInput.value, 10) || 0);
    const worldNo1Weeks = Math.max(0, parseInt(worldNo1WeeksInput.value, 10) || 0);
    const pgaTourWins = Math.max(0, parseInt(pgaTourWinsInput.value, 10) || 0);

    if (majorChampionshipsInput.value < 0 || worldNo1WeeksInput.value < 0 || pgaTourWinsInput.value < 0) {
        resultContainer.innerHTML = "<p style='color: red;'>Error: Values cannot be negative</p>";
        return;
    }

    const playerStanding = calculatePlayerStanding(majorChampionships, worldNo1Weeks, pgaTourWins);
    resultContainer.innerHTML = `<p>Player Standing: ${playerStanding}</p>`;
}
