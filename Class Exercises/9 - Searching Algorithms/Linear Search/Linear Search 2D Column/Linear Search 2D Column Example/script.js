document.addEventListener("DOMContentLoaded", function () {
    const arrayDisplay = document.getElementById("array-display");
    const generateButton = document.getElementById("generate-btn");
    const searchButton = document.getElementById("search-btn");
    const searchInput = document.getElementById("search-input");
    const searchResult = document.getElementById("search-result");

    let currentAppointments = [];

    const appointmentPool = [
        ["09:00", "Ava", "Dentist", "Room 2"],
        ["09:30", "Ben", "Checkup", "Room 4"],
        ["10:00", "Chloe", "Vaccination", "Room 1"],
        ["10:30", "Dylan", "Consultation", "Room 3"],
        ["11:00", "Ella", "Follow-up", "Room 5"],
        ["11:30", "Finn", "X-Ray", "Room 6"],
        ["12:00", "Grace", "Blood Test", "Room 7"]
    ];

    function generateAppointments() {
        const copy = appointmentPool.map(row => row.slice());
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = copy[i];
            copy[i] = copy[j];
            copy[j] = temp;
        }
        return copy.slice(0, 5);
    }

    function displayAppointments(appointments) {
        arrayDisplay.textContent = JSON.stringify(appointments);
    }

    function studentSearch(appointments, targetTime) {
        let matchRow = null;
        let rowIndex = 0;

        while (rowIndex < appointments.length && matchRow === null) {
            if (appointments[rowIndex][0] === targetTime) {
                matchRow = appointments[rowIndex];
            } else {
                rowIndex++;
            }
        }

        return matchRow;
    }

    generateButton.addEventListener("click", function () {
        currentAppointments = generateAppointments();
        displayAppointments(currentAppointments);
        searchResult.textContent = "Result will appear here";
        searchInput.value = "";
    });

    searchButton.addEventListener("click", function () {
        const targetTime = searchInput.value.trim();
        if (targetTime === "") {
            searchResult.textContent = "Please enter a valid time.";
            return;
        }

        const appointment = studentSearch(currentAppointments, targetTime);

        if (appointment !== null) {
            searchResult.textContent = `Found: ${appointment[0]} - ${appointment[1]}, ${appointment[2]}, ${appointment[3]}`;
        } else {
            searchResult.textContent = "Appointment not found";
        }
    });

    currentAppointments = generateAppointments();
    displayAppointments(currentAppointments);
});
