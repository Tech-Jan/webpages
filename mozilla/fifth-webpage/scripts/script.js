fetch("data/planets-data.json") // Path remains correct for the data folder
  .then((response) => response.json())
  .then((data) => {
    const tbody = document.getElementById("planet-data");
    const renderSection = (section, title) => {
      tbody.innerHTML += `<tr><td colspan="10"><strong>${title}</strong></td></tr>`;
      section.forEach((planet) => {
        tbody.innerHTML += `
          <tr>
            <td>${planet.name}</td>
            <td>${planet.mass}</td>
            <td>${planet.diameter}</td>
            <td>${planet.density}</td>
            <td>${planet.gravity}</td>
            <td>${planet.dayLength}</td>
            <td>${planet.distance}</td>
            <td>${planet.temperature}</td>
            <td>${planet.moons}</td>
            <td>${planet.notes}</td>
          </tr>
        `;
      });
    };
    renderSection(data.terrestrial, "Terrestrial planets");
    renderSection(data.jovian.gasGiants, "Gas giants");
    renderSection(data.jovian.iceGiants, "Ice giants");
    renderSection(data.dwarfPlanets, "Dwarf planets*");
  });
