
function helloWorld() {
    alert("Hello World!");
}
function Willkommen() {
    alert("Schön, dass du da bist :)")
}

function Collapse() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            var currentDisplay = window.getComputedStyle(content).display;
            if (currentDisplay === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
}

function loadLeagueTable() {
    // Load and parse the JSON
    fetch('./DB/liga.json')
        .then(response => response.json())
        .then(data => {
            // Display header info
            const headerDiv = document.getElementById('header');
            headerDiv.innerHTML = `
                <p><strong>Saison:</strong> ${data.season}</p>
                <p><strong>Ort:</strong> ${data.location}</p>
            `;

            // Create tables for each team
            const container = document.getElementById('tableContainer');

            data.teams.forEach(team => {
                const teamTitle = document.createElement('h3');
                teamTitle.textContent = team.team_name;
                container.appendChild(teamTitle);

                const table = document.createElement('table');
                table.className = 'league-table';

                // Create header row
                const headerRow = table.insertRow();
                headerRow.className = 'table-header';
                headerRow.innerHTML = `
                    <th>Spieler-ID</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Tore</th>
                    <th>Gewinnrate</th>
                `;

                // Add player rows
                team.players.forEach(player => {
                    const row = table.insertRow();
                    row.innerHTML = `
                        <td>${player.player_id}</td>
                        <td>${player.name}</td>
                        <td>${player.position}</td>
                        <td>${player.goals_scored}</td>
                        <td>${(player.win_rate * 100).toFixed(1)}%</td>
                    `;
                });

                container.appendChild(table);
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
    Collapse();
    loadLeagueTable();
});