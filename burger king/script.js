// Featured items add if need
const items = [
  { name: "Cheesy Dip", img: "Assets/Cheesy Dip.jpg", role: "Cheese Delight" },
  { name: "Angry Dip", img: "Assets/Angry dip.jpg", role: "Spicy Kick" },
  { name: "Smoky BBQ Dip", img: "Assets/Smoky BBQ Dip.jpg", role: "Smoked BBQ" },
  { name: "Sausage Bowl", img: "Assets/Breakfast Sausage Bowl.jpg", role: "Hearty Breakfast" },
];

// Featured Infocards handler
const track = document.getElementById("infocards-card");

function renderInfocards() {
  track.innerHTML = "";
  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "infocards-card text-center";
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="card-body">
        <h5>${item.name}</h5>
        <h6>${item.role}</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <button>Order Now</button>
      </div>
    `;
    track.appendChild(card);
  });
}

track.addEventListener("wheel", (e) => {
  if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
    e.preventDefault();
    track.scrollBy({ left: e.deltaY, behavior: "smooth" });
  }
}, { passive: false });

renderInfocards();

// items for menu if need more items
const menuItems = [
  { name: "Whopper Jr", img: "Assets/whopper jr.webp", desc: "A classic flame-grilled beef burger, smaller in size big on taste!" },
  { name: "4 cheese whopper", img: "Assets/4cheese.webp", desc: "Loaded flame grilled whopper with american, swiss, mozzarella and cheese sauce!" },
  { name: "Xtra long chicken", img: "Assets/xtralong.webp", desc: "Crispy chicken patty, Extra long!" },
  { name: "Double Whopper deal", img: "Assets/double.webp", desc: "Double whopper for an affordable deal!" },
];

const offerscardsGrid = document.getElementById("offerscards-grid");

menuItems.forEach((item, index) => {
  const col = document.createElement("div");
  col.className = "col-12 col-sm-6 col-md-4 col-lg-3";
  col.innerHTML = `
    <div class="offerscards-card text-center">
      <img src="${item.img}" alt="${item.name}">
      <div class="card-body">
        <h5>${item.name}</h5>
        <h6>Burger</h6>
        <p>Click below to view details.</p>
        <button class="btn btn-orange view-details" data-index="${index}">View</button>
      </div>
    </div>
  `;
  offerscardsGrid.appendChild(col);
});

// Modal view handler
document.querySelectorAll('.view-details').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const index = e.target.dataset.index;
    const item = menuItems[index];
    document.getElementById("burgerName").textContent = item.name;
    document.getElementById("burgerDescription").textContent = item.desc;
    document.getElementById("burgerImage").src = item.img;
    new bootstrap.Modal(document.getElementById("burgerModal")).show();
  });
});
