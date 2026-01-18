
    function updateCountdown() {
        const eventDate = new Date("Feb 20, 2025 23:59:59").getTime();
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.getElementById("countdown").innerHTML = 
                `⏳ Time Left: ${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            document.getElementById("countdown").innerHTML = "🚀 Registration Closed!";
        }
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

