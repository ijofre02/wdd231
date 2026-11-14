const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

const getProphetData = async () => { 
  try {
    const response = await fetch(
      url
    );

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();

    console.table(data.prophets);
  } catch (error) {
    console.error("Error fetching data", error);
  }
};

getProphetData();

/* ======== CARDS CONSTRUCTION ======== */

const displayProphets = (prophets) => { 
  cards.innerHTML = ""; /* Again, clean the container function */ 
  prophets.forEach(prophet => {
    //card build code goes here
    const card = document.createElement("section");
    const fullName = document.createElement("h2");
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    const portrait = document.createElement("img");

    portrait.src = prophet.

  });
};