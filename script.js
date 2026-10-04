// ---------------------------------------------------------------------------
// EDIT THESE — your WhatsApp number (with country code, no + or spaces) and message
// ---------------------------------------------------------------------------
const WHATSAPP_NUMBER = "923134791171"; // e.g. 92 for Pakistan + number, no leading 0
const WHATSAPP_MESSAGE = {
  en: "Assalamualaikum! I'd love to confirm my attendance at your wedding. 🌸",
  ur: "السلام علیکم! میں آپ کی شادی میں شرکت کی تصدیق کرنا چاہتا/چاہتی ہوں۔ 🌸",
};

// ---------------------------------------------------------------------------
// Translations
// ---------------------------------------------------------------------------
const translations = {
  en: {
    "cover.label": "the wedding of",
    "cover.cue": "Tap the seal to open",
    "cover.invited": "You are invited",
    "card.names": "Awais & Saira",
    "cover.opening": "Opening your invitation...",
    "hero.date.w": "Sunday, 25 October 2026",
    "hero.date.bw": "23 — 25 October 2026",
    "schedule.title.1": "The celebration",
    "schedule.title.2": "Two days of celebration",
    "schedule.lede.1": "We look forward to seeing you",
    "verse.text": "“And among His signs is that He created for you spouses from among yourselves, so that you may find tranquillity in them.”",
    "verse.ref": "Surah Ar-Rum 30:21",
    "countdown.title": "Counting down",
    "countdown.lede": "until the celebrations begin",
    "countdown.days": "days",
    "countdown.hours": "hours",
    "countdown.mins": "minutes",
    "countdown.secs": "seconds",
    "schedule.title": "Three days of celebration",
    "schedule.lede": "Everyone is welcome at every event",
    "rsvp.title": "Join the celebration",
    "hero.eyebrow": "Together with their families",
    "hero.bride": "Saira Riaz",
    "hero.groom": "Awais Saleem",
    "hero.date": "21 — 25 October 2026",
    "hero.tagline": "request the honour of your presence",
    "mehndi.title": "Mehndi",
    "mehndi.date": "Wednesday, 21 October 2026",
    "mehndi.time": "7:00 PM – 10:00 PM",
    "mehndi.venue": "Eman Palace, Muhammadi Town, Gujranwala",
    "barat.title": "Barat",
    "barat.date": "Friday, 23 October 2026",
    "barat.time": "1:00 AM",
    "walima.title": "Walima",
    "walima.date": "Sunday, 25 October 2026",
    "walima.time": "7:00 PM – 10:00 PM",
    "walima.venue": "Alhamd Marquee, Nowshera Sansi, Gujranwala",
    "map.link": "View location",
    "rsvp.text": "We would be honoured to celebrate with you",
    "rsvp.button": "Send RSVP on WhatsApp",
    "footer.text": "With love, Awais & Saira",
  },
  ur: {
    "cover.label": "شادی کی دعوت",
    "cover.cue": "کھولنے کے لیے مہر کو چھوئیں",
    "cover.invited": "آپ مدعو ہیں",
    "card.names": "اویس اور سائرہ",
    "cover.opening": "دعوت نامہ کھل رہا ہے...",
    "hero.date.w": "اتوار، 25 اکتوبر 2026",
    "hero.date.bw": "23 — 25 اکتوبر 2026",
    "schedule.title.1": "شادی کی تقریب",
    "schedule.title.2": "دو دن کی خوشیاں",
    "schedule.lede.1": "ہمیں آپ کا انتظار رہے گا",
    "verse.text": "”اور اس کی نشانیوں میں سے یہ ہے کہ اس نے تمہارے لیے تمہاری ہی جنس سے جوڑے بنائے تاکہ تم ان سے سکون پاؤ۔“",
    "verse.ref": "سورۃ الروم، آیت 21",
    "countdown.title": "الٹی گنتی",
    "countdown.lede": "تقریبات کے آغاز تک",
    "countdown.days": "دن",
    "countdown.hours": "گھنٹے",
    "countdown.mins": "منٹ",
    "countdown.secs": "سیکنڈ",
    "schedule.title": "تین دن کی خوشیاں",
    "schedule.lede": "ہر تقریب میں آپ کا خیر مقدم ہے",
    "rsvp.title": "خوشیوں میں شریک ہوں",
    "hero.eyebrow": "دونوں خاندانوں کی طرف سے",
    "hero.bride": "سائرہ ریاض",
    "hero.groom": "اویس سلیم",
    "hero.date": "21 — 25 اکتوبر 2026",
    "hero.tagline": "آپ کی تشریف آوری کی دعوت دیتے ہیں",
    "mehndi.title": "مہندی",
    "mehndi.date": "بدھ، 21 اکتوبر 2026",
    "mehndi.time": "شام 7 بجے سے رات 10 بجے تک",
    "mehndi.venue": "ایمان پیلس، محمدی ٹاؤن، گوجرانوالہ",
    "barat.title": "بارات",
    "barat.date": "جمعہ، 23 اکتوبر 2026",
    "barat.time": "رات 1 بجے",
    "walima.title": "ولیمہ",
    "walima.date": "اتوار، 25 اکتوبر 2026",
    "walima.time": "شام 7 بجے سے رات 10 بجے تک",
    "walima.venue": "الحمد مارکی، نوشہرہ سانسی، گوجرانوالہ",
    "map.link": "مقام دیکھیں",
    "rsvp.text": "آپ کی شرکت ہمارے لیے باعثِ اعزاز ہوگی",
    "rsvp.button": "واٹس ایپ پر آر ایس وی پی بھیجیں",
    "footer.text": "محبت کے ساتھ، اویس اور سائرہ",
  },
};

// ---------------------------------------------------------------------------
// Which events to show, from the URL:
//   /            -> Walima only
//   ?B           -> Barat + Walima        (also ?e=B)
//   ?M           -> Mehndi + Walima       (also ?e=M)
//   ?B&M / ?BM   -> all three events      (also ?e=BM)
// ---------------------------------------------------------------------------
function readEventFlags() {
  const tokens = [];
  new URLSearchParams(window.location.search).forEach((value, key) => {
    if (["e", "events", "event"].includes(key.toLowerCase())) tokens.push(value);
    else if (/^[bm]+$/i.test(key)) tokens.push(key);
  });
  const letters = tokens.join("").toUpperCase();
  return { mehndi: letters.includes("M"), barat: letters.includes("B") };
}

const SHOW = readEventFlags();

(function applyEventVisibility() {
  document.querySelector('[data-event="mehndi"]').hidden = !SHOW.mehndi;
  document.querySelector('[data-event="barat"]').hidden = !SHOW.barat;

  const count = 1 + Number(SHOW.mehndi) + Number(SHOW.barat);
  const dateKey =
    SHOW.mehndi ? "hero.date"
    : SHOW.barat ? "hero.date.bw"
    : "hero.date.w";
  document.getElementById("hero-date").setAttribute("data-i18n", dateKey);
  document.getElementById("schedule-title").setAttribute(
    "data-i18n",
    count === 3 ? "schedule.title" : count === 2 ? "schedule.title.2" : "schedule.title.1",
  );
  document.getElementById("schedule-lede").setAttribute(
    "data-i18n",
    count === 1 ? "schedule.lede.1" : "schedule.lede",
  );
})();

const STORAGE_KEY = "invitation-lang";

function applyLanguage(lang) {
  document.body.setAttribute("data-lang", lang);
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "ur" ? "rtl" : "ltr");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = translations[lang][key];
    if (value !== undefined) el.textContent = value;
  });

  document.getElementById("btn-en").classList.toggle("active", lang === "en");
  document.getElementById("btn-ur").classList.toggle("active", lang === "ur");

  updateWhatsappLink(lang);
  safeStorage(() => localStorage.setItem(STORAGE_KEY, lang));
}

function updateWhatsappLink(lang) {
  const link = document.getElementById("whatsapp-btn");
  const message = encodeURIComponent(
    WHATSAPP_MESSAGE[lang] || WHATSAPP_MESSAGE.en,
  );
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

document
  .getElementById("btn-en")
  .addEventListener("click", () => applyLanguage("en"));
document
  .getElementById("btn-ur")
  .addEventListener("click", () => applyLanguage("ur"));

const savedLang = safeStorage(() => localStorage.getItem(STORAGE_KEY));
applyLanguage(savedLang === "ur" ? "ur" : "en");

// ---------------------------------------------------------------------------
// Envelope cover
// ---------------------------------------------------------------------------
const html = document.documentElement;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const cover = document.getElementById("cover");
const envelope = document.getElementById("envelope");
const cue = document.getElementById("coverCue");

function safeStorage(fn) {
  try {
    return fn();
  } catch (e) {
    return null;
  }
}

// The envelope is shown on every visit, starting from the top of the page.
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
window.scrollTo(0, 0);
html.classList.add("locked");

function finishOpening() {
  cover.classList.add("hide");
  html.classList.remove("locked");
  document.body.classList.add("opened");
}

// Sequence: flap opens -> card slides out -> card grows to fill the screen
// -> cover fades and the invitation appears.
function openInvitation() {
  if (envelope.classList.contains("open")) return;
  envelope.classList.add("open");
  cover.classList.add("opening");

  if (reduceMotion) {
    setTimeout(finishOpening, 150);
    return;
  }

  setTimeout(() => envelope.classList.add("rise"), 700);

  setTimeout(() => {
    const card = document.getElementById("card");
    const r = card.getBoundingClientRect();
    // Pull the card out of the (transformed) envelope so it can go fixed/full-screen.
    cover.appendChild(card);
    card.style.cssText =
      "position:fixed;margin:0;bottom:auto;transform:none;transition:none;z-index:5;" +
      "left:" + r.left + "px;top:" + r.top + "px;width:" + r.width + "px;height:" + r.height + "px;";
    void card.offsetWidth; // commit starting position
    card.classList.add("fill");
    card.style.transition =
      "left 1.1s cubic-bezier(.65,0,.25,1), top 1.1s cubic-bezier(.65,0,.25,1)," +
      "width 1.1s cubic-bezier(.65,0,.25,1), height 1.1s cubic-bezier(.65,0,.25,1)," +
      "border-color .8s ease, box-shadow .8s ease, border-radius .8s ease";
    card.style.left = "0px";
    card.style.top = "0px";
    card.style.width = window.innerWidth + "px";
    card.style.height = window.innerHeight + "px";
  }, 2000);

  setTimeout(finishOpening, 3200);
}

envelope.addEventListener("click", openInvitation);

// ---------------------------------------------------------------------------
// Countdown to the first event the guest is invited to
// (Mehndi 21 Oct 7 PM PKT, else Barat 23 Oct 1 AM PKT, else Walima 25 Oct 7 PM PKT)
// ---------------------------------------------------------------------------
const countdownTarget = new Date(
  SHOW.mehndi ? "2026-10-21T19:00:00+05:00"
  : SHOW.barat ? "2026-10-23T01:00:00+05:00"
  : "2026-10-25T19:00:00+05:00",
).getTime();
const cdEls = {
  d: document.getElementById("cdDays"),
  h: document.getElementById("cdHours"),
  m: document.getElementById("cdMins"),
  s: document.getElementById("cdSecs"),
};
const pad = (n) => String(n).padStart(2, "0");

function tick() {
  const diff = Math.max(0, countdownTarget - Date.now());
  cdEls.d.textContent = pad(Math.floor(diff / 86400000));
  cdEls.h.textContent = pad(Math.floor((diff % 86400000) / 3600000));
  cdEls.m.textContent = pad(Math.floor((diff % 3600000) / 60000));
  cdEls.s.textContent = pad(Math.floor((diff % 60000) / 1000));
}
tick();
setInterval(tick, 1000);

// ---------------------------------------------------------------------------
// Scroll reveal
// ---------------------------------------------------------------------------
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("in"));
}
