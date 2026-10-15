/* =========================================================
   CONFIG – ganti data di bawah dengan informasi toko Anda.
   Semua data kontak di bawah hanyalah CONTOH.
   ========================================================= */
const CONFIG = {
  // Format internasional: tanpa "+", spasi, atau 0 di depan. Contoh: 0812-3456-7890 menjadi 6281234567890
  whatsapp: "6285373679899",
  whatsappDisplay: "+62 853-7367-9899",
  phone: "+62 85 373 679899",
  email: "vandupradana5@gmail.com",
  address: "Jl. Bahapal, Bandar Huluan, Indonesia",
  hours: "Setiap hari, 10.00 – 21.00",
  maps: "https://maps.app.goo.gl/NADwoFYHBq51AGTw9?g_st=ac",
  instagram: "https://instagram.com/akun_anda",
  tiktok: "https://tiktok.com/@akun_anda"
};

/* Daftar menu contoh. Untuk memakai foto asli, isi "image" dengan nama file,
   misalnya image: "img/matcha-latte.webp". Jika kosong, ilustrasi gelas dipakai. */
const PRODUCTS = [
  {id:1,name:"Iced Matcha Latte",cat:"matcha",desc:"Matcha bubuk dengan susu segar, dingin dan creamy.",reg:22000,lg:28000,color:"#8DB35A",image:"assets/img/iced-matcha-latte.png",tags:["best"]},
  {id:2,name:"Matcha Brown Sugar",cat:"matcha",desc:"Matcha latte dengan sirup gula aren yang pekat.",reg:25000,lg:31000,color:"#9CBF6A",image:"assets/img/matcha-brown.png",tags:["best"]},
  {id:3,name:"Matcha Cloud",cat:"matcha",desc:"Matcha dengan topping cream cheese foam yang lembut.",reg:27000,lg:33000,color:"#7FA64D",top:"#FFF7E0",image:"assets/img/matcha-cloud.png",tags:["new"]},
  {id:4,name:"Matcha Espresso",cat:"matcha",desc:"Perpaduan matcha dan satu shot espresso.",reg:26000,lg:32000,color:"#86AA55",top:"#5a3a22",image:"assets/img/matcha-espreso.png",tags:["new"]},
  {id:5,name:"Jasmine Green Tea",cat:"green",desc:"Teh hijau melati yang ringan dan segar.",reg:15000,lg:20000,color:"#D9D98A",image:"assets/img/jasmine-green.png"},
  {id:6,name:"Lemon Green Tea",cat:"green",desc:"Teh hijau dengan perasan lemon, segar di siang hari.",reg:17000,lg:22000,color:"#E6E08A",image:"assets/img/lemon-green.png",tags:["best"]},
  {id:7,name:"Brown Sugar Boba Milk",cat:"brown",desc:"Susu segar, boba kenyal, dan sirup gula aren.",reg:24000,lg:30000,color:"#E9D5B0",top:"#4a2c17",boba:true,image:"assets/img/brown-milk.png",tags:["best"]},
  {id:8,name:"Brown Sugar Latte",cat:"brown",desc:"Kopi susu dengan gula aren yang wangi.",reg:22000,lg:28000,color:"#C79A68",top:"#6B4423",image:"assets/img/brown-latte.png"},
  {id:9,name:"Es Kopi Susu Aren",cat:"coffee",desc:"Kopi susu khas dengan gula aren, simpel dan pas.",reg:20000,lg:26000,color:"#B98A5B",image:"assets/img/kopi-suren.png",tags:["best"]},
  {id:10,name:"Americano",cat:"coffee",desc:"Espresso dengan air dingin, bersih dan tegas.",reg:18000,lg:23000,color:"#5b3a24",image:"assets/img/americano.png"},
  {id:11,name:"Classic Milk Tea",cat:"milk",desc:"Teh hitam pekat dengan susu yang creamy.",reg:19000,lg:25000,color:"#D2A878",image:"assets/img/klasik-milk-tea.png"},
  {id:12,name:"Taro Milk Tea",cat:"milk",desc:"Milk tea ungu dengan rasa talas yang manis lembut.",reg:23000,lg:29000,color:"#C9B1E0",boba:true,image:"assets/img/taro-milk.png",tags:["new"]},
  {id:13,name:"Dark Chocolate",cat:"choco",desc:"Cokelat pekat dengan susu, manis dan tebal.",reg:21000,lg:27000,color:"#7a4a2e",image:"assets/img/dark-choco.png"},
  {id:14,name:"Choco Hazelnut",cat:"choco",desc:"Cokelat dengan sirup hazelnut dan topping krim.",reg:24000,lg:30000,color:"#936041",top:"#FFF7E0",image:"assets/img/choco-hazel.png",tags:["new"]}
];

const CATS = [
  {id:"all",label:"Semua"},{id:"best",label:"Best Seller"},{id:"new",label:"Menu Terbaru"},
  {id:"matcha",label:"Matcha Series"},{id:"green",label:"Green Tea Series"},{id:"brown",label:"Brown Sugar Series"},
  {id:"coffee",label:"Coffee Series"},{id:"milk",label:"Milk Tea Series"},{id:"choco",label:"Chocolate Series"}
];

const PROMOS = [
  {title:"Beli 2 Gratis Es Boba",text:"Beli 2 minuman Large, tambah topping boba gratis.",msg:"Promo Beli 2 Gratis Es Boba"},
  {title:"Diskon 10% Pelanggan Baru",text:"Sebutkan promo ini saat memesan pertama kali.",msg:"Promo Diskon 10% Pelanggan Baru"},
  {title:"Paket Berdua",text:"Dua minuman pilihan dengan harga paket spesial.",msg:"Promo Paket Berdua"}
];

const SUGAR = ["Normal","Less sugar","No sugar"];
const ICE = ["Normal ice","Less ice","No ice"];
const rp = n => "Rp" + n.toLocaleString("id-ID");
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ---------- Link WhatsApp ---------- */
function waLink(text) {
  const num = String(CONFIG.whatsapp).replace(/\D/g, "").replace(/^0+/, "");
  return `https://wa.me/${num}` + (text ? `?text=${encodeURIComponent(text)}` : "");
}

/* ---------- Ilustrasi gelas (SVG ringan) ---------- */
function cupSVG(p) {
  const top = p.top ? `<path d="M26 44h48l-1 10c-8 5-38 5-46 0z" fill="${p.top}"/>` : "";
  const boba = p.boba ? [[38,104],[48,108],[58,104],[44,98],[54,99],[50,112]].map(c => `<circle cx="${c[0]}" cy="${c[1]}" r="4" fill="#2b1a10"/>`).join("") : "";
  return `<svg viewBox="0 0 100 140" aria-hidden="true"><rect x="62" y="2" width="5" height="40" rx="2.500" fill="#2E4A22" transform="rotate(10 64 20)"/>
  <path d="M22 34h56l-6 96a6 6 0 0 1-6 5H34a6 6 0 0 1-6-5z" fill="${p.color}"/>${top}${boba}
  <path d="M30 60l3 66" stroke="#fff" stroke-opacity=".35" stroke-width="4" stroke-linecap="round"/>
  <rect x="18" y="26" width="64" height="10" rx="5" fill="#FBF7EA" stroke="#2E4A22" stroke-opacity=".25"/></svg>`;
}

/* ---------- Kartu produk ---------- */
function seg(name, list, active = 0) {
  return `<div class="seg" data-opt="${name}">` + list.map((v, i) => `<button type="button" aria-pressed="${i === active}" data-v="${v}">${v}</button>`).join("") + `</div>`;
}
function cardHTML(p) {
  const badge = p.tags?.includes("best") ? "Best Seller" : p.tags?.includes("new") ? "Baru" : "";
  const art = p.image ? `<img src="${p.image}" alt="${p.name}" loading="lazy" width="400" height="300">` : cupSVG(p);
  return `<article class="card reveal" data-id="${p.id}">
    <div class="card-art" style="background:linear-gradient(160deg,${p.color}33,#F2ECD8)">${badge ? `<span class="badge">${badge}</span>` : ""}${art}</div>
    <div class="card-body">
      <h3>${p.name}</h3><p class="desc">${p.desc}</p>
      <div class="opts">
        <div class="opt"><span>Ukuran</span><div class="seg" data-opt="size"><button type="button" aria-pressed="true" data-v="Regular">Regular ${rp(p.reg)}</button><button type="button" aria-pressed="false" data-v="Large">Large ${rp(p.lg)}</button></div></div>
        <div class="opt"><span>Gula</span>${seg("sugar", SUGAR)}</div>
        <div class="opt"><span>Es</span>${seg("ice", ICE)}</div>
      </div>
      <textarea rows="2" placeholder="Catatan tambahan (opsional)" aria-label="Catatan untuk ${p.name}"></textarea>
      <div class="buy-row">
        <div class="qty"><button type="button" data-act="minus" aria-label="Kurangi jumlah">−</button><output>1</output><button type="button" data-act="plus" aria-label="Tambah jumlah">+</button></div>
        <div class="total"><small>Total</small><span data-total>${rp(p.reg)}</span></div>
      </div>
      <button type="button" class="btn btn-primary" data-act="buy">Beli Sekarang</button>
    </div></article>`;
}
function readCard(card) {
  const p = PRODUCTS.find(x => x.id === +card.dataset.id);
  const val = k => $(`[data-opt="${k}"] [aria-pressed="true"]`, card).dataset.v;
  const size = val("size"), qty = +$("output", card).textContent;
  const unit = size === "Large" ? p.lg : p.reg;
  return {p, size, qty, unit, sugar: val("sugar"), ice: val("ice"), note: $("textarea", card).value.trim(), total: unit * qty};
}
function updateTotal(card) { $("[data-total]", card).textContent = rp(readCard(card).total); }
function orderMessage(o) {
  return `Halo Matchigato! Saya ingin memesan:\n\nNama produk: ${o.p.name}\nUkuran: ${o.size}\nJumlah: ${o.qty}\nGula: ${o.sugar}\nEs: ${o.ice}\nHarga satuan: ${rp(o.unit)}\nTotal: ${rp(o.total)}\n\nCatatan: ${o.note || "-"}\n\nMohon konfirmasi pesanan saya. Terima kasih!`;
}

/* ---------- Katalog, filter, pencarian ---------- */
let activeCat = "all";
function matches(p) {
  const q = $("#search").value.trim().toLowerCase();
  const inCat = activeCat === "all" || p.cat === activeCat || p.tags?.includes(activeCat);
  return inCat && (!q || (p.name + " " + p.desc).toLowerCase().includes(q));
}
function renderMenu() {
  const list = PRODUCTS.filter(matches);
  $("#grid").innerHTML = list.map(cardHTML).join("");
  $("#empty").hidden = list.length > 0;
  $("#count").textContent = `${list.length} minuman ditampilkan`;
  observeReveal();
}
function renderChips() {
  $("#chips").innerHTML = CATS.map(c => `<button type="button" data-cat="${c.id}" aria-pressed="${c.id === activeCat}">${c.label}</button>`).join("");
}
function setCat(id) { activeCat = id; renderChips(); renderMenu(); }

/* ---------- Event kartu (delegasi) ---------- */
document.addEventListener("click", e => {
  const b = e.target.closest("button");
  if (!b) return;
  const card = b.closest(".card");
  if (card) {
    const seg = b.closest(".seg");
    if (seg) { $$("button", seg).forEach(x => x.setAttribute("aria-pressed", x === b)); updateTotal(card); return; }
    const out = $("output", card), act = b.dataset.act;
    if (act === "plus") { out.textContent = Math.min(99, +out.textContent + 1); updateTotal(card); }
    if (act === "minus") { out.textContent = Math.max(1, +out.textContent - 1); updateTotal(card); }
    if (act === "buy") {
      const win = window.open(waLink(orderMessage(readCard(card))), "_blank", "noopener");
      if (!win) location.href = waLink(orderMessage(readCard(card)));
      toast("Membuka WhatsApp…");
    }
  }
  if (b.dataset.cat) setCat(b.dataset.cat);
  if (b.dataset.reco) { setCat(b.dataset.reco); $("#menu").scrollIntoView(); }
  if (b.dataset.promo) window.open(waLink(`Halo Matchigato! Saya tertarik dengan ${b.dataset.promo}. Mohon info cara memesannya. Terima kasih!`), "_blank", "noopener");
});
$("#search").addEventListener("input", renderMenu);
$("#reset").addEventListener("click", () => { $("#search").value = ""; setCat("all"); });

/* ---------- Navbar mobile ---------- */
const burger = $("#burger"), links = $("#links");
burger.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Tutup menu navigasi" : "Buka menu navigasi");
});
links.addEventListener("click", e => { if (e.target.closest("a")) { links.classList.remove("open"); burger.setAttribute("aria-expanded", false); } });

/* ---------- Scroll reveal ---------- */
let io;
function observeReveal() {
  if (!("IntersectionObserver" in window)) { $$(".reveal").forEach(el => el.classList.add("in")); return; }
  io = io || new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), {threshold: .12});
  $$(".reveal:not(.in)").forEach(el => io.observe(el));
}

/* ---------- Toast ---------- */
let tt;
function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(tt); tt = setTimeout(() => t.classList.remove("show"), 2200); }

/* ---------- Inisialisasi ---------- */
function init() { 
$("#heroArt").innerHTML = `
  <img
    class="cup"
    src="assets/img/icon.png"
    alt="Iced Matcha Latte"
  >
`;

  $("#bestGrid").innerHTML = PRODUCTS.filter(p => p.tags?.includes("best")).slice(0, 3).map(cardHTML).join("");
  $("#promos").innerHTML = PROMOS.map(p => `<div class="promo reveal"><h3>${p.title}</h3><p>${p.text}</p><button type="button" class="btn" data-promo="${p.msg}">Pesan Promo Ini</button></div>`).join("");
  renderChips(); renderMenu();
  // Isi data kontak dari CONFIG
  $$("[data-wa]").forEach(a => a.href = waLink("Halo Match! Saya ingin bertanya."));
  $$("[data-wa-text]").forEach(a => { a.href = waLink(); a.textContent = CONFIG.whatsappDisplay; a.target = "_blank"; a.rel = "noopener"; });
  $$("[data-tel]").forEach(a => { a.href = "tel:" + CONFIG.phone.replace(/[^\d+]/g, ""); a.textContent = CONFIG.phone; });
  $$("[data-mail]").forEach(a => { a.href = "mailto:" + CONFIG.email; a.textContent = CONFIG.email; });
  $$("[data-address]").forEach(el => el.textContent = CONFIG.address);
  $$("[data-hours]").forEach(el => el.textContent = CONFIG.hours);
  $$("[data-map]").forEach(a => a.href = CONFIG.maps);
  $("#year").textContent = new Date().getFullYear();
  $$(".section .head, .quotes figure, .about-body").forEach(el => el.classList.add("reveal"));
  observeReveal();
}
init();
