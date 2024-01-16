function calculatePlayerStanding(championships, mvpAwards, scoringTitles) {
    const totalMetrics = championships + mvpAwards + scoringTitles;

    if (totalMetrics >= 5) {
        return "Top 1-5 Player <br>player summary:<br>the championships: " + championships + "<br>the mvpAwards: " + mvpAwards + " <br>the scoringTitles: " + scoringTitles;
    } else if (totalMetrics >= 2) {
        return "Top 6-10 Player <br>player summary:<br>the championships: " + championships + "<br>the mvpAwards: " + mvpAwards + " <br>the scoringTitles: " + scoringTitles;
    } else {
        return "Doesn't make the list <br>player summary:<br>the championships: " + championships + "<br>the mvpAwards: " + mvpAwards + " <br>the scoringTitles: " + scoringTitles;
    }
}

function calculateAndDisplayStanding() {
    const championshipsInput = document.getElementById("championships");
    const mvpAwardsInput = document.getElementById("mvpAwards");
    const scoringTitlesInput = document.getElementById("scoringTitles");
    const resultContainer = document.getElementById("result-container");

    // Parse input values, ensuring they are non-negative
    const championships = Math.max(0, parseInt(championshipsInput.value, 10) || 0);
    const mvpAwards = Math.max(0, parseInt(mvpAwardsInput.value, 10) || 0);
    const scoringTitles = Math.max(0, parseInt(scoringTitlesInput.value, 10) || 0);

    if (championshipsInput.value < 0 || mvpAwardsInput.value < 0 || scoringTitlesInput.value < 0) {
        resultContainer.innerHTML = "<p style='color: red;'>Error: Values cannot be negative</p>";
        return;
    }

    const playerStanding = calculatePlayerStanding(championships, mvpAwards, scoringTitles);
    resultContainer.innerHTML = `<p>Standing: ${playerStanding}</p>`;
}
