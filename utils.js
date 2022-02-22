const RATING_SELECTOR = ".average__number";
const LINK_SELECTOR = ".wine-card__content a";

function getName(selector) {
  return document.querySelector(selector).textContent.trim();
}

function getInfo(html) {
  const parser = new DOMParser();
  const htmlDocument = parser.parseFromString(html, "text/html");

  return {
    rating: htmlDocument.documentElement
      .querySelector(RATING_SELECTOR)
      .textContent.trim(),
    link: `https://www.vivino.com${
      htmlDocument.documentElement.querySelector(LINK_SELECTOR).pathname
    }`,
  };
}

function injectRating(selector, info) {
  document.querySelector(selector).style.overflow = "initial";
  document.querySelector(
    selector
  ).innerHTML += `<a href="${info.link}" target="_blank"><span style="font-weight: bold; text-transform: uppercase; background: #194350; color: #E1E5EA; font-size: 22px; padding: 4px 16px; border-radius: 999px; margin-left: 8px;">${info.rating}</span></a>`;
}
