function calculateAthleteStanding(olympicGoldMedals, worldChampionshipGolds, majorMarathonWins) {
    const totalMetrics = olympicGoldMedals + worldChampionshipGolds + majorMarathonWins;

    if (totalMetrics >= 10) {
        return "Top 1-5 Athlete <br>the olympicGoldMedals: " + olympicGoldMedals + "<br>the worldChampionshipGolds: " + worldChampionshipGolds + " <br>the majorMarathonWins: " + majorMarathonWins;
    } else if (totalMetrics >= 5) {
        return "Top 6-10 Athlete <br>the olympicGoldMedals: " + olympicGoldMedals + "<br>the worldChampionshipGolds: " + worldChampionshipGolds + " <br>the majorMarathonWins: " + majorMarathonWins;
    } else {
        return "Not in top 10 list <br>the olympicGoldMedals: " + olympicGoldMedals + "<br>the worldChampionshipGolds: " + worldChampionshipGolds + " <br>the majorMarathonWins: " + majorMarathonWins;
    }
}

function calculateAndDisplayStanding() {
    const olympicGoldMedalsInput = document.getElementById("olympicGoldMedals");
    const worldChampionshipGoldsInput = document.getElementById("worldChampionshipGolds");
    const majorMarathonWinsInput = document.getElementById("majorMarathonWins");
    const resultContainer = document.getElementById("result-container");

    // Parse input values, ensuring they are non-negative
    const olympicGoldMedals = Math.max(0, parseInt(olympicGoldMedalsInput.value, 10) || 0);
    const worldChampionshipGolds = Math.max(0, parseInt(worldChampionshipGoldsInput.value, 10) || 0);
    const majorMarathonWins = Math.max(0, parseInt(majorMarathonWinsInput.value, 10) || 0);

    if (olympicGoldMedalsInput.value < 0 || worldChampionshipGoldsInput.value < 0 || majorMarathonWinsInput.value < 0) {
        resultContainer.innerHTML = "<p style='color: red;'>Error: Values cannot be negative</p>";
        return;
    }

    const athleteStanding = calculateAthleteStanding(olympicGoldMedals, worldChampionshipGolds, majorMarathonWins);
    resultContainer.innerHTML = `<p>Athlete Standing: ${athleteStanding}</p>`;
}
