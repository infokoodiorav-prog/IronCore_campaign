const translations = {
  en: {
    ironcore: "IRONCORE - Campaign",
    "shop-sale": "Shop Sale",
    "limited-summer-edition": "Limited Summer Collection",
    "up-to-45-off": "UP TO 45% off",
    "premium-training-gear":
      "High-performance training gear for athletes who push their limits — breathable, durable, and built for maximum performance.",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    "view-all-products": "View all products",
    "verified-reviews": "verified reviews",
    "athletes-in-training": "satisfied customers",
    engineered: "Built",
    "engineered-for-performance": "for maximum performance",
    "limited-drop": "⚡ Limited quantity — no restocks",
    "performance-wear":
      "Training gear built for movement and intense training.",
    "sweat-resistant-tee": "IronCore breathable training tee",
    "save-30": "Save 30%",
    "lightweight-fabric":
      "Lightweight, breathable fabric designed for all-day comfort.",
    "buy-now": "Buy now",
    "performance-training-pants": "IronCore performance training pants",
    "save-41": "Save 41%",
    "lightweight-design":
      "Lightweight, breathable material for maximum comfort and mobility.",
    "training-shoes": "IronCore training shoes",
    "save-45": "Save 45%",
    "flexible-grip":
      "Durable outsole designed for grip, stability, and intense training.",
    "grip-gloves": "IronCore training gloves",
    "save-27": "Save 27%",
    "enhanced-grip": "Improved grip and secure support on every punch.",
    "utility-gym-bag": "IronCore boxing bag",
    "save-36": "Save 36%",
    "durable-bag": "Durable bag built for everyday training essentials.",
    "built-for-athletes":
      "Built for athletes who demand peak performance in every session.",
    "tested-under-pressure":
      "From daily gym sessions to professional training environments — IronCore gear is tested where it matters most - under pressure.",
    "testimonial-1": "“Great and affordable training gear.”",
    "testimonial-2":
      "“High quality products and very comfortable for long training sessions.”",
    "testimonial-3": "“More durable than most gear I’ve used before.”",
    "testimonial-4": "“Simple, comfortable — exactly what I was looking for.”",
    "testimonial-5": "“Great quality, fast delivery and fair price.”",
    "limited-time-offer": "This collection",
    "won't-stay-long": "won’t be here for long",
    "sale-ends-soon": "Limited quantity collection. No restocks once sold out.",
    "claim-discount": "Claim discount",
    "don't-wait": "Don’t wait for",
    "next-time": "“next time”",
    "act-first":
      "Those who act first never miss out. Limited quantities available.",
    support: "Support",
    "shipping-returns": "Shipping & Returns",
    "size-guide": "Size Guide",
    contact: "Contact",
  },
  et: {
    ironcore: "IRONCORE - Kampaania",
    "shop-sale": "Sooduspakkumised",
    "limited-summer-edition": "Piiratud suvekollektsioon",
    "up-to-45-off": "KUNI 45% alla",
    "premium-training-gear":
      "Kõrgekvaliteediline treeningvarustus sportlastele, kes ületavad piire — hingav, vastupidav ja loodud maksimaalseks soorituseks.",
    days: "Päeva",
    hours: "Tundi",
    minutes: "Minutit",
    seconds: "Sekundit",
    "view-all-products": "Vaata kõiki tooteid",
    "verified-reviews": "kinnitatud arvustust",
    "athletes-in-training": "rahulolevat klienti",
    engineered: "Loodud",
    "engineered-for-performance": "maksimaalseks soorituseks",
    "limited-drop": "⚡ Piiratud kogus — lisavarusid ei tule",
    "performance-wear":
      "Treeningriided, mis peavad vastu liikumisele ja intensiivsele treeningule.",
    "sweat-resistant-tee": "IronCore hingav treeningsärk",
    "save-30": "Säästa 30%",
    "lightweight-fabric":
      "Kerge ja hingav materjal, mis tagab mugavuse terveks päevaks.",
    "buy-now": "Osta kohe",
    "performance-training-pants": "IronCore vastupidavad treeningpüksid",
    "save-41": "Säästa 41%",
    "lightweight-design": "Kerge ja hingav materjal maksimaalseks mugavuseks.",
    "training-shoes": "IronCore treeningjalatsid",
    "save-45": "Säästa 45%",
    "flexible-grip": "Haarduv ja stabiilne tald intensiivseks treeninguks.",
    "grip-gloves": "IronCore treeningkindad",
    "save-27": "Säästa 27%",
    "enhanced-grip": "Parandatud haarduvus ja kindel tugi igal löögil.",
    "utility-gym-bag": "IronCore poksikott",
    "save-36": "Säästa 36%",
    "durable-bag": "Vastupidav poksikott igapäevaseks treeninguks.",
    "built-for-athletes":
      "Loodud sportlastele, kes tavahad igas treeningus maksimaalset sooritust.",
    "tested-under-pressure":
      "Alates igapäevastest jõusaalitreeningutest kuni professionaalsete treeningkeskkondadeni — IronCore’i varustus on testitud seal, kus see loeb kõige rohkem - surve all.",
    "testimonial-1": "“Hea ja taskukohane treeningvarustus.”",
    "testimonial-2":
      "“Kvaliteetsed tooted ja väga mugavad pikkadel treeningutel.”",
    "testimonial-3":
      "“Vastupidavam kui enamik varustust, mida varem kasutanud olen.”",
    "testimonial-4": "“Lihtne, mugav - täpselt see mida otsisin.”",
    "testimonial-5": "“Hea kvaliteet, kiire tarne ja mõistlik hind.”",
    "limited-time-offer": "See kollektsioon",
    "won't-stay-long": "ei jää kauaks",
    "sale-ends-soon":
      "Piiratud koguses kollektsioon. Läbimüügi korral lisavarusid ei tule.",
    "claim-discount": "Kasuta allahindlust",
    "don't-wait": "Ära oota",
    "next-time": "“Järgmist korda”",
    "act-first": "Tegutse enne teisi. Piiratud kogus ei püsi kaua saadaval.",
    support: "Tugi",
    "shipping-returns": "Tarne ja tagastused",
    "size-guide": "Suuruste juhend",
    contact: "Kontakt",
  },
};

let currentLang = "et";

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (el.classList.contains("total")) return;

    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.placeholder = translations[lang][key];
  });
}

const heroVideo = document.querySelector(".hero-video");
const content = document.querySelector(".hero-cont");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  heroVideo.style.transform = `translateY(${scrollY * 0.3}px) scale(1.1)`;
  content.style.transform = `translateY(${scrollY * -0.1}px)`;
});

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

let endTime = localStorage.getItem("saleEnd");

if (!endTime) {
  endTime = Date.now() + 7 * 24 * 60 * 60 * 1000;
  localStorage.setItem("saleEnd", endTime);
}

function updateCountdown() {
  const now = Date.now();
  const distance = endTime - now;

  if (distance <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);
