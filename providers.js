const PROVIDERS = [
  {
    name: "Continente",
    url: "continente.pt",
    selectors: {
      productName: ".product-name",
      ratingResult: ".product-name",
    },
  },
  {
    name: "Auchan",
    url: "auchan.pt",
    selectors: {
      productName: ".product-name",
      ratingResult: ".product-name",
    },
  },
  {
    name: "EL Corte Ingles",
    url: "elcorteingles.pt",
    selectors: {
      productName: ".breadcrumbs-item span",
      ratingResult: ".pdp-title a span",
    },
  },
  {
    name: "Minipreço",
    url: "minipreco.pt",
    selectors: {
      productName: ".product-name h1",
      ratingResult: ".product-name h1",
    },
  },
];

const currentProvider = PROVIDERS.find((provider) =>
  location.href.includes(provider.url)
);

if (currentProvider) {
  chrome.runtime.sendMessage(
    {
      name: getName(currentProvider.selectors.productName),
      provider: currentProvider,
    },
    function (response) {
      injectRating(
        currentProvider.selectors.ratingResult,
        getInfo(response.html)
      );
    }
  );
}
