function calculatePlayerStanding(grandSlamTitles, olympicGoldMedals, atpTourFinalsWins) {
    const totalMetrics = grandSlamTitles + olympicGoldMedals + atpTourFinalsWins;

    if (totalMetrics >= 30) {
        return "Top 1-5 Tennis Player <br>the grandSlamTitles: " + grandSlamTitles + "<br>the olympicGoldMedals: " + olympicGoldMedals + " <br>the atpTourFinalsWins: " + atpTourFinalsWins;
    } else if (totalMetrics >= 20) {
        return "Top 6-10 Tennis Player <br>the grandSlamTitles: " + grandSlamTitles + "<br>the olympicGoldMedals: " + olympicGoldMedals + " <br>the atpTourFinalsWins: " + atpTourFinalsWins;
    } else {
        return "Not in top 10 list <br>the grandSlamTitles: " + grandSlamTitles + "<br>the olympicGoldMedals: " + olympicGoldMedals + " <br>the atpTourFinalsWins: " + atpTourFinalsWins;
    }
}

function calculateAndDisplayStanding() {
    const grandSlamTitlesInput = document.getElementById("grandSlamTitles");
    const olympicGoldMedalsInput = document.getElementById("olympicGoldMedals");
    const atpTourFinalsWinsInput = document.getElementById("atpTourFinalsWins");
    const resultContainer = document.getElementById("result-container");

    // Parse input values, ensuring they are non-negative
    const grandSlamTitles = Math.max(0, parseInt(grandSlamTitlesInput.value, 10) || 0);
    const olympicGoldMedals = Math.max(0, parseInt(olympicGoldMedalsInput.value, 10) || 0);
    const atpTourFinalsWins = Math.max(0, parseInt(atpTourFinalsWinsInput.value, 10) || 0);

    if (grandSlamTitlesInput.value < 0 || olympicGoldMedalsInput.value < 0 || atpTourFinalsWinsInput.value < 0) {
        resultContainer.innerHTML = "<p style='color: red;'>Error: Values cannot be negative</p>";
        return;
    }

    const playerStanding = calculatePlayerStanding(grandSlamTitles, olympicGoldMedals, atpTourFinalsWins);
    resultContainer.innerHTML = `<p>Standing: ${playerStanding}</p>`;
}
