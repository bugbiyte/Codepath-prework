const factContainer = document.getElementById('fact-container');
const favNumber = 7;
const button = document.getElementById('load-facts');

button.addEventListener('click', () => {
  // Clear previous facts
  factContainer.innerHTML = '';

  getSingleFact();
  getMultipleFacts();
  getFourFacts();
});

// 1️⃣ One fact about your favorite number
async function getSingleFact() {
  try {
    const response = await fetch(`http://numbersapi.com/${favNumber}?json`);
    const data = await response.json();
    addFactToPage(data.text);
  } catch (error) {
    console.error("Error fetching single fact:", error);
  }
}

// 2️⃣ Facts about multiple numbers
async function getMultipleFacts() {
  const multipleNumbers = [3, 9, 13];
  try {
    const response = await fetch(`http://numbersapi.com/${multipleNumbers.join(',')}?json`);
    const data = await response.json();
    for (let num in data) {
      addFactToPage(data[num]);
    }
  } catch (error) {
    console.error("Error fetching multiple number facts:", error);
  }
}

// 3️⃣ Get 4 facts about your favorite number
async function getFourFacts() {
  try {
    const promises = Array.from({ length: 4 }, () =>
      fetch(`http://numbersapi.com/${favNumber}?json`).then(res => res.json())
    );
    const facts = await Promise.all(promises);
    facts.forEach(fact => addFactToPage(fact.text));
  } catch (error) {
    console.error("Error fetching four facts:", error);
  }
}

// ➕ Helper function to add text to the page
function addFactToPage(text) {
  const p = document.createElement('p');
  p.textContent = text;
  factContainer.appendChild(p);
}
