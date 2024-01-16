function calculatePlayerStanding(superBowlMVPs, nflMVPs, proBowls) {
    const totalMetrics = superBowlMVPs + nflMVPs + proBowls;

    if (totalMetrics >= 10) {
        return "Top 1-5 Football Player <br>player summary:<br>the superBowlMVPs: " + superBowlMVPs + "<br>the nflMVPs: " + nflMVPs + " <br>the proBowls: " + proBowls;
    } else if (totalMetrics >= 5) {
        return "Top 6-10 Football Player <br>player summary:<br>the superBowlMVPs: " + superBowlMVPs + "<br>the nflMVPs: " + nflMVPs + " <br>the proBowls: " + proBowls;
    } else {
        return "Not in top 10 list <br>player summary:<br>the superBowlMVPs: " + superBowlMVPs + "<br>the nflMVPs: " + nflMVPs + " <br>the proBowls: " + proBowls;
    }
}

function calculateAndDisplayStanding() {
    const superBowlMVPsInput = document.getElementById("superBowlMVPs");
    const nflMVPsInput = document.getElementById("nflMVPs");
    const proBowlsInput = document.getElementById("proBowls");
    const resultContainer = document.getElementById("result-container");

    // Parse input values, ensuring they are non-negative
    const superBowlMVPs = Math.max(0, parseInt(superBowlMVPsInput.value, 10) || 0);
    const nflMVPs = Math.max(0, parseInt(nflMVPsInput.value, 10) || 0);
    const proBowls = Math.max(0, parseInt(proBowlsInput.value, 10) || 0);

    if (superBowlMVPsInput.value < 0 || nflMVPsInput.value < 0 || proBowlsInput.value < 0) {
        resultContainer.innerHTML = "<p style='color: red;'>Error: Values cannot be negative</p>";
        return;
    }

    const playerStanding = calculatePlayerStanding(superBowlMVPs, nflMVPs, proBowls);
    resultContainer.innerHTML = `<p>Player Standing: ${playerStanding}</p>`;
}
