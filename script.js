document.addEventListener("DOMContentLoaded", function() {
    // Countdown Funktion
    function updateCountdown(targetDate, elementId) {
        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;

        if (timeDifference > 0) {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            document.getElementById(elementId).innerHTML = `${days} Tage ${hours} Stunden ${minutes} Minuten ${seconds} Sekunden`;
        } else {
            document.getElementById(elementId).innerHTML = 'Countdown abgelaufen!';
        }
    }

    setInterval(() => updateCountdown(new Date('2024-07-25T00:00:00'), 'countdown1'), 1000);
    setInterval(() => updateCountdown(new Date('2024-07-09T12:00:00'), 'countdown2'), 1000);

    updateCountdown(new Date('2024-07-25T12:00:00'), 'countdown1');
    updateCountdown(new Date('2024-07-09T12:00:00'), 'countdown2');

    document.getElementById('abstimmungButton').addEventListener('click', function() {
        window.location.href = "abstimmung.html";
    })
});
document.getElementById('confirmButton').addEventListener('click', function() {
    var classSelect = document.getElementById("classSelect");
    var selectedClass = classSelect.options[classSelect.selectedIndex].value;
    var iframeSrc;

    switch (selectedClass) {
        case "8":
            iframeSrc = "https://docs.google.com/forms/d/e/1FAIpQLSctAo45dTkBPS1e6mKlQmqpyXWBe9VvmlBSTib0OLMCIVg7LQ/viewform?usp=sf_link";
            break;
        case "9":
            iframeSrc = "https://docs.google.com/forms/d/e/1FAIpQLScE-wBOsODKYam88LD4vTVjtFcMN_YfuTuQOeu-P8y2fTv0cg/viewform?usp=sf_link";
            break;
        case "10":
            iframeSrc = "https://docs.google.com/forms/d/e/1FAIpQLSemBqSJis5mV54ZU0r2XHAwj_Ma_bcJfGT01rwZmmt2aWY7vQ/viewform?usp=sf_link";
            break;
        case "11":
            iframeSrc = "https://docs.google.com/forms/d/e/1FAIpQLSdgrA8mKZV8OkhsHOQ7NXGQ8s8RsKXywjjjNGocZuqbJ_dHCg/viewform?usp=sf_link";
            break;
        case "12":
            iframeSrc = "https://docs.google.com/forms/d/e/1FAIpQLSdus9hpw_25i6IzCgNcrV8OlxdtAh0qA6sIx8nMtvdvpi7YMg/viewform?usp=sf_link";
            break;
        case "13":
            iframeSrc = "https://docs.google.com/forms/d/e/1FAIpQLSeHinDogKdH0oPGLVNH3QZNw1qtFM0CQO-a0VWECWyQ5ptYJA/viewform?usp=sf_link";
            break;
        default:
            iframeSrc = "";
    }

    // Setze die src-Eigenschaft des iframe auf die entsprechende URL
    document.getElementById("formFrame").src = iframeSrc;

    alert("Sie haben die Klasse " + selectedClass + " ausgewählt.");
});