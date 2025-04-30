// add a read class to paragraphs that are direct descendants of the article element by iterating over a NodeList DOM collection

const paragraphs = document.querySelectorAll("article > p");

for (const p of paragraphs) {
  p.classList.add("read");
}
