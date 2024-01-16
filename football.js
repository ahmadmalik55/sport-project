function calculatePlayerStanding(goals, assists, appearances) {
    const totalStats = goals + assists + appearances;

    if (totalStats >= 1000) {
        return "Top 1-5 <br>player summary: <br>the goals: " + goals + "<br>the assists: " + assists + " <br>the appearances: " + appearances;
    } else if (totalStats >= 750) {
        return "Top 6-10 <br>player summary: <br>the goals: " + goals + "<br>the assists: " + assists + " <br>the appearances: " + appearances;
    } else {
        var x = 750 - totalStats;
        return "he is not from the top 10 and the player still need: " + x + " gools <br>player summary:<br>the goals: " + goals + "<br>the assists: " + assists + " <br>the appearances: " + appearances;
        }
}

function calculateAndDisplayStanding() {
    const goalsInput = document.getElementById("goals");
    const assistsInput = document.getElementById("assists");
    const appearancesInput = document.getElementById("appearances");
    const resultContainer = document.getElementById("result-container");

    const goals = parseInt(goalsInput.value, 10) || 0;
    const assists = parseInt(assistsInput.value, 10) || 0;
    const appearances = parseInt(appearancesInput.value, 10) || 0;

    if (goals < 0 || assists < 0 || appearances < 0) {
        resultContainer.innerHTML = "<p style='color: red;'>Error: Values cannot be negative</p>";
        return;
    }

    const playerStanding = calculatePlayerStanding(goals, assists, appearances);
    resultContainer.innerHTML = `<p>Standing: ${playerStanding}</p>`;
}
