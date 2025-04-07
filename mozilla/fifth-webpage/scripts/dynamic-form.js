fetch("data/form-data.json")
  .then((response) => response.json())
  .then((data) => {
    const form = document.getElementById("dynamic-form");

    // Planets fieldset
    const planetFieldset = document.createElement("fieldset");
    planetFieldset.innerHTML = "<legend>Choose a planet to visit:</legend>";
    data.planets.forEach((planet) => {
      const input = document.createElement("input");
      input.type = "radio";
      input.id = planet.id;
      input.name = "planet";
      input.value = planet.id;

      const label = document.createElement("label");
      label.htmlFor = planet.id;
      label.textContent = planet.label;

      planetFieldset.appendChild(input);
      planetFieldset.appendChild(label);
    });
    form.appendChild(planetFieldset);

    // Hotel rooms fieldset
    const hotelFieldset = document.createElement("fieldset");
    hotelFieldset.innerHTML =
      "<legend>Choose hotel room type (required):</legend>";
    data.hotelRooms.forEach((room) => {
      const input = document.createElement("input");
      input.type = "radio";
      input.id = room.id;
      input.name = "hotel";
      input.value = room.id;
      input.disabled = room.disabled;
      input.checked = room.checked;

      const label = document.createElement("label");
      label.htmlFor = room.id;
      label.textContent = room.label;

      hotelFieldset.appendChild(input);
      hotelFieldset.appendChild(label);
    });
    form.appendChild(hotelFieldset);

    // Classes fieldset
    const classFieldset = document.createElement("fieldset");
    classFieldset.innerHTML = "<legend>Choose classes to attend:</legend>";
    data.classes.forEach((cls) => {
      const input = document.createElement("input");
      input.type = "checkbox";
      input.id = cls.id;
      input.name = cls.id;

      const label = document.createElement("label");
      label.htmlFor = cls.id;
      label.textContent = cls.label;

      classFieldset.appendChild(input);
      classFieldset.appendChild(label);
    });
    form.appendChild(classFieldset);

    // Transport dropdown
    const transportLabel = document.createElement("label");
    transportLabel.htmlFor = "transport";
    transportLabel.textContent = "How are you getting here:";

    const transportSelect = document.createElement("select");
    transportSelect.name = "transport";
    transportSelect.id = "transport";

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "--Please choose an option--";
    transportSelect.appendChild(defaultOption);

    data.transportOptions.forEach((option) => {
      const opt = document.createElement("option");
      opt.value = option.value;
      opt.textContent = option.label;
      transportSelect.appendChild(opt);
    });

    form.appendChild(transportLabel);
    form.appendChild(transportSelect);

    // Comments textarea
    const commentsLabel = document.createElement("label");
    commentsLabel.htmlFor = "comments";
    commentsLabel.textContent = "Any other comments:";

    const commentsTextarea = document.createElement("textarea");
    commentsTextarea.id = "comments";
    commentsTextarea.name = "comments";
    commentsTextarea.rows = 5;
    commentsTextarea.cols = 33;

    form.appendChild(commentsLabel);
    form.appendChild(commentsTextarea);

    // Submit button
    const submitButton = document.createElement("button");
    submitButton.textContent = "Continue to payment";
    form.appendChild(submitButton);
  });
