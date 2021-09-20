const basicPlanPrice = document.querySelector("[data-basic]");
const proPlanPrice = document.querySelector("[data-pro]");
const masterPlanPrice = document.querySelector("[data-master]");
const botao = document.querySelector("input[name=botao]");

const prices = [
  {
    name: "basic",
    annually: "$199,99",
    monthly: "$19.99",
  },
  {
    name: "pro",
    annually: "$249.99",
    monthly: "$24.99",
  },
  {
    name: "master",
    annually: "$399.99",
    monthly: "$39.99",
  },
];

botao.addEventListener("change", function () {
  updatePrices();
});

function updatePrices() {
  if (basicPlanPrice.id == "annually") {
    basicPlanPrice.id = "mon";
    basicPlanPrice.innerHTML = prices[0].monthly;

    proPlanPrice.id = "mon";
    proPlanPrice.innerHTML = prices[1].monthly;

    masterPlanPrice.id = "mon";
    masterPlanPrice.innerHTML = prices[2].monthly;
    return;
  }
  basicPlanPrice.id = "annually";
  basicPlanPrice.innerHTML = prices[0].annually;

  proPlanPrice.id = "annually";
  proPlanPrice.innerHTML = prices[1].annually;

  masterPlanPrice.id = "annually";
  masterPlanPrice.innerHTML = prices[2].annually;
}

updatePrices();
