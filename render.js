function renderMahsulotlar(wrapperSelector) {
  const wrapper = document.querySelector(wrapperSelector);
  if (!wrapper) return;

  mahsulotlar.forEach(mahsulot => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="card_text">
        <img src="${mahsulot.rasm}" alt="${mahsulot.nomi}">
        <h4 class="product_name">${mahsulot.nomi}</h4>
        <p class="price">${mahsulot.narxi}</p>
      </div>
    `;

    wrapper.appendChild(card);
  });
}

renderMahsulotlar(".card_wrapper");