(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();



  function updateTimeAndDate() {
    const currentTimeElement = document.querySelector('[data-testid="currentTime"]');
    const currentDateElement = document.querySelector('[data-testid="currentDate"]');

    const updateClock = () => {
      const now = new Date();
      const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
      const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

      currentTimeElement.textContent = now.toLocaleTimeString(undefined, timeOptions);
      currentDateElement.textContent = now.toLocaleDateString(undefined, dateOptions);
    };

    // Update the time and date immediately
    updateClock();

    // Update the time and date every second (1000 milliseconds)
    setInterval(updateClock, 1000);
  }

  // Call the function to start updating
  updateTimeAndDate();
