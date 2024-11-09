const coinPrefixes = ["Fluffy", "Quantum", "Banana", "Shiba", "Space", "Turbo", "Dank", "Epic", "Mega", "Giga"];
const coinSuffixes = ["Inu", "Coin", "Token", "Doge", "Elon", "Rocket", "Moon", "Wow", "Zilla", "Baby"];
const purposes = ["Just for Fun", "To Moon", "To Change the World", "Absolutely Nothing", "For Memes", "Infinite Riches"];
const backingOptions = ["Nothing", "Dogecoin", "Memes", "Hype", "Influencers", "Your Imagination"];

let coinValue = 0;
let investment = 0;

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateMemeCoin() {
  const coinName = `${getRandomElement(coinPrefixes)} ${getRandomElement(coinSuffixes)}`;
  const supply = `Supply: ${Math.random() > 0.5 ? 'Infinite' : Math.floor(Math.random() * 1e12)} Coins`;
  const purpose = `Purpose: ${getRandomElement(purposes)}`;
  const backedBy = `Backed by: ${getRandomElement(backingOptions)}`;
  coinValue = (Math.random() * 100).toFixed(2);
  
  document.getElementById("coin-name").innerText = coinName;
  document.getElementById("coin-supply").innerText = supply;
  document.getElementById("coin-purpose").innerText = purpose;
  document.getElementById("coin-backed").innerText = backedBy;
  document.getElementById("coin-value").innerText = `Current Value: $${coinValue}`;
  document.getElementById("investment").innerText = "";
  
  investment = 0;
  document.getElementById("invest-btn").disabled = false;
  document.getElementById("track-btn").disabled = true;
}

function investInCoin() {
  investment += 10;
  document.getElementById("investment").innerText = `You invested $${investment} in ${document.getElementById("coin-name").innerText}`;
  document.getElementById("track-btn").disabled = false;
}

function trackInvestment() {
 
  const fluctuation = (Math.random() - 0.5) * 10;
  coinValue = (parseFloat(coinValue) + fluctuation).toFixed(2);
  const currentWorth = (investment * (coinValue / 100)).toFixed(2);
  
  document.getElementById("coin-value").innerText = `Current Value: $${coinValue}`;
  document.getElementById("investment").innerText = `Your investment is now worth $${currentWorth}`;
}