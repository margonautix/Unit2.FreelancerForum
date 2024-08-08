const names = [
  "Johnny",
  "Simon",
  "Markus",
  "Connor",
  "Kara",
  "North",
  "Josh",
  "Hank",
  "Rose",
  "Tina",
  "Gavin",
];
const prices = [30, 40, 50, 60, 70, 80, 90, 100];
const occupations = [
  "Teacher",
  "Writer",
  "Programmer",
  "Detective",
  "Artist",
  "Babysitter",
  "Photographer",
];
const maxFreelancers = 20;
const freelancers = [
  { name: "Alice", price: 30, occupation: "Writer" },
  { name: "Bob", price: 50, occupation: "Teacher" },
  { name: "Carol", price: 70, occupation: "Programmer" },
];

const addFreelancerIntervalId = setInterval(addFreelancer, 1000);

document.addEventListener("DOMContentLoaded", () => {
  render();
}); // added due to error, console could not find table
// update: this is because my <script> was in the <head> and not at the bottom of the <body>. well then!

function render() {
  const table = document.querySelector("#table");
  const tableElements = freelancers.map((freelancer) => {
    const element = document.createElement("tr");

    const nameElement = document.createElement("td");
    nameElement.textContent = freelancer.name;
    element.appendChild(nameElement);

    const occElement = document.createElement("td");
    occElement.textContent = freelancer.occupation;
    element.appendChild(occElement);

    const priceElement = document.createElement("td");
    priceElement.textContent = freelancer.price;
    element.appendChild(priceElement);

    return element;
  });
  table.replaceChildren(...tableElements);
  const headerElement = document.createElement("tr");
  const nameHeader = document.createElement("th");
  nameHeader.textContent = "Name";
  headerElement.appendChild(nameHeader);

  const occHeader = document.createElement("th");
  occHeader.textContent = "Occupation";
  headerElement.appendChild(occHeader);

  const priceHeader = document.createElement("th");
  priceHeader.textContent = "Price";
  headerElement.appendChild(priceHeader);
  table.prepend(headerElement);
  console.log(getMean());
}

function addFreelancer() {
  const name = names[Math.floor(Math.random() * names.length)];
  if (freelancers.length >= maxFreelancers) {
    clearInterval(addFreelancerIntervalId);
  }
  const price = prices[Math.floor(Math.random() * prices.length)];
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  freelancers.push({ name, occupation, price });
  render();
}

function getMean() {
  const average = document.querySelector("#average");
  const sumTotal = freelancers.reduce(
    (acc, freelancer) => acc + freelancer.price,
    0
  );
  const mean = Math.floor(sumTotal / freelancers.length);
  average.innerHTML = `The average starting price is $${mean}.`;
}
