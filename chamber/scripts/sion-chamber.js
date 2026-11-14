const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar')

navbutton.addEventListener('click', () => {
  navbutton.classList.toggle('show');
  navlinks.classList.toggle('show');
});

/* ===== FOOTER ======== */
const year = document.querySelector('#currentYear');
year.textContent = new Date().getFullYear();

document.getElementById('lastModified').innerHTML = document.lastModified;

/* ========= CARDS CONSTRUCTION ========= */
const url = 'data/members.json';
const cards = document.querySelector('#cards');

const getCommerceData = async () => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();

    console.table(data.commerces);

    displayCommerces(data.commerces);

  } catch (error) {
    console.error("Error fetching data", error);
  }
};

getCommerceData();

/* ======== DISPLAY COMMERCES ======== */

const displayCommerces = (commerces) => {
  cards.innerHTML = ""; // Clean the container before displaying the new cards

  commerces.forEach(commerce => {

    // Create elements
    const card = document.createElement("section");
    const name = document.createElement("h2");
    const tagline = document.createElement("p");
    const image = document.createElement("img");
    const address = document.createElement("p");
    const phone = document.createElement("p");
    const website = document.createElement("a");
    const membership = document.createElement("p");

    // Add content
    name.textContent = commerce.name;
    tagline.textContent = commerce.tagline;
    address.textContent = commerce.address;
    phone.textContent = commerce.phone;
    website.textContent = commerce.website;
    membership.textContent = `Membership Level: ${commerce.membershipLevel}`;

    // Configure image
    image.src = `images/${commerce.image}`;
    image.alt = commerce.name;
    image.loading = "lazy";
    image.width = 300;

    // Configure website link
    website.href = commerce.website;
    website.target = "_blank";
    website.rel = "noopener noreferrer";

    // Add class to the card
    card.classList.add("member-card");

    // Append elements to the card
    card.append(
      name,
      tagline,
      image,
      address,
      phone,
      website,
      membership
    );

    // Append card to the container
    cards.appendChild(card);
  });
};

/* ========= GRID / LIST VIEW ========= */

const gridButton = document.querySelector('#grid-btn');
const listButton = document.querySelector('#list-btn');

gridButton.addEventListener('click', () => {
  cards.classList.remove('list-view');

  gridButton.setAttribute('aria-pressed', 'true');
  listButton.setAttribute('aria-pressed', 'false');
});

listButton.addEventListener('click', () => {
  cards.classList.add('list-view');

  gridButton.setAttribute('aria-pressed', 'false');
  listButton.setAttribute('aria-pressed', 'true');
});