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
console.log(getMean());
addFreelancer();
render();

function render() {
  const table = document.querySelector("#table");
  const tableElements = freelancers.map((freelancer) => {
    const element = document.createElement("tr");
    element.textContent =
      freelancer.name + " " + freelancer.occupation + " $" + freelancer.price;
    return element;
  });
  table.replaceChildren(...tableElements);
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
  const sumTotal = freelancers.reduce(
    (acc, price) => acc + freelancers.price,
    0
  );
  //   const mean = sumTotal / freelancers.length;
  return sumTotal;
}
