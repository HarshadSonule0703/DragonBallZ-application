

const baseUrl = "https://dragonball-api.com/api/characters?limit=100";
let allCharacters = []; // Global variable to store character data
let currentIndex = 0;

const image = document.querySelector(".img-container img");
const nameEl = document.getElementById("name");
const raceEl = document.getElementById("race");
const genderEl = document.getElementById("gender");
const kiEl = document.getElementById("ki");

const getData = async () => {
    try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        allCharacters = data.items;
        console.log(data.items);

        // Display the first character by default
        updateCharacter(currentIndex);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

function updateCharacter(index) {
    const character = allCharacters[index];
    image.src = character.image;
    nameEl.innerText = character.name;
    raceEl.innerText = character.race || "Unknown";
    genderEl.innerText = character.gender || "Unknown";
    kiEl.innerText = character.ki || "N/A";
}

// Navigation buttons
document.getElementById("prev").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCharacter(currentIndex);
    }
});

document.getElementById("next").addEventListener("click", () => {
    if (currentIndex < allCharacters.length - 1) {
        currentIndex++;
        updateCharacter(currentIndex);
    }
});

getData(); // Initial call to load data
console.log(allCharacters)
