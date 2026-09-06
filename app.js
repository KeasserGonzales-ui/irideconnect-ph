// RideConnect PH - Fully Functional Interactive Logic for All Hero Buttons

// ===== SUPER ADMIN ACCOUNT =====
const SUPER_ADMIN = {
  id: 0,
  role: "superadmin",
  clubName: "iRideConnect PH Admin",
  adminName: "Keasser Gonzales",
  email: "admin@irideconnect.ph",
  password: "superadmin2026",
  city: "Philippines",
  members: 0
};

function isSuperAdmin() {
  return currentUser && currentUser.role === "superadmin";
}

const defaultUsers = [
  { id: 1, role: "club", clubName: "Falcon Riders Club", adminName: "Capt. Juan Dela Cruz", email: "falcon.riders@gmail.com", password: "admin123", city: "Lucena City", members: 18 },
  { id: 2, role: "club", clubName: "Honda Riders PH", adminName: "Officer Marco Santos", email: "honda.riders@gmail.com", password: "admin123", city: "Manila City", members: 34 }
];

function getSampleReceiptSvg(accountName, amount, refNo, dateStr) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="360" height="500" viewBox="0 0 360 500" fill="none">
    <rect width="360" height="500" rx="16" fill="#007DFE"/>
    <rect y="70" width="360" height="430" rx="16" fill="#FFFFFF"/>
    <circle cx="180" cy="70" r="30" fill="#00D09C"/>
    <path d="M168 70L176 78L194 60" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="180" y="128" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#007DFE" text-anchor="middle">GCash Express Send</text>
    <text x="180" y="150" font-family="Arial, sans-serif" font-size="12" fill="#64748B" text-anchor="middle">Payment Sent Successfully</text>
    <text x="180" y="195" font-family="Arial, sans-serif" font-size="30" font-weight="bold" fill="#0F172A" text-anchor="middle">₱${Number(amount).toLocaleString()}.00</text>
    <line x1="30" y1="225" x2="330" y2="225" stroke="#E2E8F0" stroke-width="1" stroke-dasharray="4 4"/>
    <text x="30" y="258" font-family="Arial, sans-serif" font-size="12" fill="#64748B">Sent To:</text>
    <text x="330" y="258" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#0F172A" text-anchor="end">${accountName || 'Event Organizer'}</text>
    <text x="30" y="295" font-family="Arial, sans-serif" font-size="12" fill="#64748B">Reference No:</text>
    <text x="330" y="295" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#0F172A" text-anchor="end">${refNo || '901238491823'}</text>
    <text x="30" y="332" font-family="Arial, sans-serif" font-size="12" fill="#64748B">Date &amp; Time:</text>
    <text x="330" y="332" font-family="Arial, sans-serif" font-size="12" fill="#0F172A" text-anchor="end">${dateStr || 'July 10, 2026 09:30 AM'}</text>
    <rect x="25" y="375" width="310" height="70" rx="10" fill="#F0FDF4" stroke="#86EFAC"/>
    <text x="180" y="405" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#166534" text-anchor="middle">RideConnect PH Verified Donation</text>
    <text x="180" y="425" font-family="Arial, sans-serif" font-size="11" fill="#15803D" text-anchor="middle">Official Community Cause Receipt</text>
  </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

const _realDateNow = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let currentMonth = _realDateNow.getMonth(); // Dynamic current real month (0-11)
let currentYear = _realDateNow.getFullYear(); // Dynamic current real year

const defaultEvents = [
  {
    id: 1, day: 12, month: currentMonth, year: currentYear,
    title: "Falcon Riders Charity Ride", category: "charity", categoryLabel: "❤️ Charity Event",
    time: "05:00 AM - 02:00 PM", location: "Lucena City to Tayabas, Quezon", organizer: "Falcon Riders Club",
    gcashNumber: "0917-888-RIDE", gcashName: "Falcon Riders Charity Fund",
    groupsCount: 4, groups: ["Falcon Riders Club", "Honda Riders PH", "NMAX Community", "Raider Nation"],
    banner: "assets/medical_mission.jpg",
    description: "Annual charity motorcade and medical outreach organized by Falcon Riders Club. Free medical consultations, school supplies, and food packs distribution for rural barangays.",
    comments: [
      { author: "Capt. Juan (Falcon Riders)", text: "Assembly at Lucena City Hall Plaza. Free coffee & breakfast packs for all lead marshals!", time: "2 hours ago" },
      { author: "Officer Marco (Honda Riders PH)", text: "Honda Riders PH will provide 5 lead sweepers for Section 2 of the highway.", time: "1 hour ago" }
    ],
    donations: [
      {
        id: 101,
        donorName: "Officer Marco Santos (Honda Riders)",
        amount: 1000,
        refNo: "Ref: 83920194829",
        receiptImg: getSampleReceiptSvg("Falcon Riders Charity Fund", 1000, "83920194829", `${monthNames[currentMonth]} 10, ${currentYear} • 09:30 AM`),
        date: `${monthNames[currentMonth]} 10, ${currentYear} • 09:30 AM`
      },
      {
        id: 102,
        donorName: "NMAX Community QC",
        amount: 1500,
        refNo: "Ref: 94820173620 (Medical packs)",
        receiptImg: getSampleReceiptSvg("Falcon Riders Charity Fund", 1500, "94820173620", `${monthNames[currentMonth]} 11, ${currentYear} • 02:15 PM`),
        date: `${monthNames[currentMonth]} 11, ${currentYear} • 02:15 PM`
      }
    ]
  },
  {
    id: 2, day: 19, month: currentMonth, year: currentYear,
    title: "Tagaytay Coastal Fun Ride", category: "fun", categoryLabel: "🏍️ Fun Ride",
    time: "04:30 AM - 11:00 AM", location: "BGC Manila to Tagaytay Viewpoint", organizer: "NMAX Community PH",
    gcashNumber: "0918-555-NMAX", gcashName: "NMAX Community PH Aid",
    groupsCount: 3, groups: ["NMAX Community PH", "Vespa Club QC", "Big Bike Club Laguna"],
    banner: "assets/coastal_ride.jpg",
    description: "Scenic early morning fellowship ride to Tagaytay ridge. Enjoy breakfast with over 40 riding clubs while supporting local tourism and road safety awareness.",
    comments: [
      { author: "Admin Alex (NMAX Community)", text: "Jump-off time is 05:00 AM sharp from Shell BGC. Don't forget your hydration packs!", time: "Yesterday" }
    ],
    donations: []
  },
  {
    id: 3, day: 5, month: currentMonth, year: currentYear,
    title: "LTO Helmet & Safety Awareness Drive", category: "announcement", categoryLabel: "📢 Announcement",
    time: "08:00 AM - 12:00 PM", location: "Quezon Memorial Circle, QC", organizer: "LTO Philippines & Allied Clubs",
    gcashNumber: "0917-888-RIDE", gcashName: "Road Safety Foundation",
    groupsCount: 2, groups: ["LTO Marshals", "Yamaha Club Bulacan"],
    banner: "assets/hero_charity_ride.jpg",
    description: "Free ECE helmet inspection, sticker registration assistance, and defensive riding clinic hosted by road safety officers.",
    comments: [],
    donations: []
  },
  {
    id: 4, day: 25, month: currentMonth, year: currentYear,
    title: "Typhoon Relief Motorcade Bicol", category: "medical", categoryLabel: "🩺 Medical Mission",
    time: "04:00 AM - 05:00 PM", location: "Naga City Hall Grounds", organizer: "Bicol Big Bike Alliance",
    gcashNumber: "0919-444-BKL1", gcashName: "Bicol Big Bike Relief Trust",
    groupsCount: 2, groups: ["Bicol Big Bike Alliance", "Mayon Bikers"],
    banner: "assets/medical_mission.jpg",
    description: "Emergency relief motorcade bringing medical aid, water purification tablets, and roofing materials to typhoon-affected coastal communities.",
    comments: [],
    donations: [
      {
        id: 103,
        donorName: "ADV Riders Batangas",
        amount: 2000,
        refNo: "Ref: 99120485721 (Roofing sheets)",
        receiptImg: getSampleReceiptSvg("Bicol Big Bike Relief Trust", 2000, "99120485721", `${monthNames[currentMonth]} 12, ${currentYear} • 11:00 AM`),
        date: `${monthNames[currentMonth]} 12, ${currentYear} • 11:00 AM`
      }
    ]
  }
];

const defaultClubs = [
  { id: 1, name: "🏍 Falcon Riders", city: "Lucena City", riders: 18, verified: true, color: "var(--primary-blue)", bg: "var(--primary-blue-light)", icon: "fa-shield-halved" },
  { id: 2, name: "🏍 Honda Riders PH", city: "Manila City", riders: 34, verified: true, color: "var(--accent-orange)", bg: "var(--accent-orange-light)", icon: "fa-gauge-high" },
  { id: 3, name: "🏍 NMAX Community", city: "Quezon City", riders: 26, verified: true, color: "var(--accent-purple)", bg: "var(--accent-purple-light)", icon: "fa-crown" },
  { id: 4, name: "🏍 Raider Nation", city: "Cavite Province", riders: 22, verified: true, color: "var(--accent-red)", bg: "var(--accent-red-light)", icon: "fa-bolt" },
  { id: 5, name: "🏍 ADV Riders Batangas", city: "Lipa City", riders: 29, verified: true, color: "var(--accent-green)", bg: "var(--accent-green-light)", icon: "fa-compass" },
  { id: 6, name: "🏍 Big Bike Club Laguna", city: "Santa Rosa", riders: 40, verified: true, color: "var(--primary-blue)", bg: "var(--primary-blue-light)", icon: "fa-motorcycle" }
];

let usersData = JSON.parse(localStorage.getItem("rideconnect_users")) || defaultUsers;
if (!usersData.some(u => u.email && u.email.toLowerCase() === SUPER_ADMIN.email.toLowerCase())) {
  usersData.unshift(SUPER_ADMIN);
  localStorage.setItem("rideconnect_users", JSON.stringify(usersData));
}
let eventsData = JSON.parse(localStorage.getItem("rideconnect_events")) || defaultEvents;

// Ensure all events in memory/storage have GCash and donations fields initialized & sync default events to current month
eventsData.forEach(evt => {
  if ([1, 2, 3, 4].includes(evt.id) && evt.month !== currentMonth) {
    evt.month = currentMonth;
    evt.year = currentYear;
  }
  if (!evt.gcashNumber) {
    if (evt.id === 1) evt.gcashNumber = "0917-888-RIDE";
    else if (evt.id === 2) evt.gcashNumber = "0918-555-NMAX";
    else if (evt.id === 4) evt.gcashNumber = "0919-444-BKL1";
    else evt.gcashNumber = "0917-888-RIDE";
  }
  if (!evt.gcashName) {
    if (evt.id === 1) evt.gcashName = "Falcon Riders Charity Fund";
    else if (evt.id === 2) evt.gcashName = "NMAX Community PH Aid";
    else if (evt.id === 4) evt.gcashName = "Bicol Big Bike Relief Trust";
    else evt.gcashName = (evt.organizer || "RideConnect") + " Fund";
  }
  if (!evt.donations || evt.donations.length === 0) {
    if (evt.id === 1) {
      evt.donations = [
        {
          id: 101,
          donorName: "Officer Marco Santos (Honda Riders)",
          amount: 1000,
          refNo: "Ref: 83920194829",
          receiptImg: getSampleReceiptSvg("Falcon Riders Charity Fund", 1000, "83920194829", `${monthNames[currentMonth]} 10, ${currentYear} • 09:30 AM`),
          date: `${monthNames[currentMonth]} 10, ${currentYear} • 09:30 AM`
        },
        {
          id: 102,
          donorName: "NMAX Community QC",
          amount: 1500,
          refNo: "Ref: 94820173620 (Medical packs)",
          receiptImg: getSampleReceiptSvg("Falcon Riders Charity Fund", 1500, "94820173620", `${monthNames[currentMonth]} 11, ${currentYear} • 02:15 PM`),
          date: `${monthNames[currentMonth]} 11, ${currentYear} • 02:15 PM`
        }
      ];
    } else if (evt.id === 4) {
      evt.donations = [
        {
          id: 103,
          donorName: "ADV Riders Batangas",
          amount: 2000,
          refNo: "Ref: 99120485721 (Roofing sheets)",
          receiptImg: getSampleReceiptSvg("Bicol Big Bike Relief Trust", 2000, "99120485721", `${monthNames[currentMonth]} 12, ${currentYear} • 11:00 AM`),
          date: `${monthNames[currentMonth]} 12, ${currentYear} • 11:00 AM`
        }
      ];
    } else if (!evt.donations) {
      evt.donations = [];
    }
  }
});
localStorage.setItem("rideconnect_events", JSON.stringify(eventsData));
let clubsData = JSON.parse(localStorage.getItem("rideconnect_clubs")) || defaultClubs;
let currentUser = JSON.parse(localStorage.getItem("rideconnect_session")) || null;
let currentFilter = "all";
let activeModalEventId = null;
let popoverHideTimer = null;

// Default advertisements
const defaultAds = [
  {
    id: 1, name: "Apex Helmet & Intercom Shop", category: "Helmet & Gear Shop",
    description: "ECE certified helmets, Bluetooth intercoms, and safety riding suits with 15% discount for RideConnect members.",
    contact: "0917-888-1234", website: "https://facebook.com/apexhelmets",
    imageUrl: "assets/sample_promo_banner.jpg", gradient: "#1e293b,#0f172a",
    voucherCode: "RIDECONNECT15", voucherLabel: "15% OFF Helmets & Intercoms",
    active: true
  },
  {
    id: 2, name: "Custom Riding Vests & Patches", category: "Custom Apparel",
    description: "High quality embroidered riding club vests, reflectorized charity banners, and custom club patches.",
    contact: "0918-555-6789", website: "",
    imageUrl: "assets/sample_apparel_banner.jpg", gradient: "#1e293b,#0f172a",
    voucherCode: "", voucherLabel: "",
    active: true
  },
  {
    id: 3, name: "UltraShield Synthetic Engine Oil", category: "Lubricants & Care",
    description: "Official oil sponsor of Philippine charity rides. Protect your engine on long-distance endurance runs.",
    contact: "0920-111-2345", website: "https://ultrashield.ph",
    imageUrl: "assets/sample_oil_banner.jpg", gradient: "#0284c7,#0369a1",
    voucherCode: "", voucherLabel: "",
    active: true
  }
];
let adsData = JSON.parse(localStorage.getItem("rideconnect_ads_v3")) || defaultAds;

document.addEventListener("DOMContentLoaded", () => {
  renderCalendar(currentMonth, currentYear);
  renderClubs(clubsData);
  renderAds();

  renderHeroCarousel();
  updateStatsCounters();
  updateNavbarAuth();
});

// HERO ORANGE BUTTON: "Post & Host Charity Ride"
function handlePostEventClick() {
  showToast("📅 Opening Post Event Form...");
  openCreateEventModal();
}

// HERO GREEN BUTTON: "Register Riding Club"
function openAuthModal(tab) {
  const modal = document.getElementById("authModal");
  if (modal) {
    modal.classList.add("active");
    switchAuthTab(tab || 'register');
  }
}

function switchAuthTab(tab) {
  const loginBtn = document.getElementById("tabLoginBtn");
  const regBtn = document.getElementById("tabRegisterBtn");
  const loginForm = document.getElementById("loginForm");
  const regForm = document.getElementById("registerForm");

  if (tab === "login") {
    if (loginBtn) loginBtn.classList.add("active");
    if (regBtn) regBtn.classList.remove("active");
    if (loginForm) loginForm.style.display = "block";
    if (regForm) regForm.style.display = "none";
  } else {
    if (regBtn) regBtn.classList.add("active");
    if (loginBtn) loginBtn.classList.remove("active");
    if (regForm) regForm.style.display = "block";
    if (loginForm) loginForm.style.display = "none";
  }
}

// Month Navigation (< Prev & Next > Buttons)
function changeCalendarMonth(delta) {
  currentMonth += delta;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear -= 1;
  } else if (currentMonth > 11) {
    currentMonth = 0;
    currentYear += 1;
  }

  document.getElementById("currentMonthYear").textContent = `${monthNames[currentMonth]} ${currentYear}`;
  renderCalendar(currentMonth, currentYear);
  showToast(`📅 Viewing ${monthNames[currentMonth]} ${currentYear} Events`);
}

function filterCalendarCategory(category, btnElement) {
  currentFilter = category;
  const chips = document.querySelectorAll(".calendar-filter-chips .chip");
  chips.forEach(c => c.classList.remove("active"));
  if (btnElement) btnElement.classList.add("active");
  renderCalendar(currentMonth, currentYear);
  showToast(`🔍 Filtered calendar: ${category.toUpperCase()}`);
}

function handleRegionChange(region) {
  showToast(`📍 Filtering Philippine Region: ${region.toUpperCase()}`);
  renderCalendar(currentMonth, currentYear);
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function triggerCall(number, name) {
  showToast(`📞 Dialing ${name} (${number})...`);
  setTimeout(() => {
    window.location.href = `tel:${number}`;
  }, 500);
}

function openMechanicModal() {
  const modal = document.getElementById("mechanicModal");
  if (modal) {
    modal.classList.add("active");
  } else {
    showToast("📍 Physical vulcanizing & repair directory: Lucena City & Surrounding Quezon Areas");
  }
}

function openVoucherModal(shopTitle, code, offer) {
  document.getElementById("voucherShopTitle").textContent = shopTitle;
  document.getElementById("voucherOffer").textContent = offer;
  document.getElementById("voucherCodeText").textContent = code;
  const modal = document.getElementById("voucherModal");
  if (modal) modal.classList.add("active");
}

function copyVoucherCode() {
  const code = document.getElementById("voucherCodeText").textContent.trim();
  navigator.clipboard.writeText(code);
  closeModal('voucherModal');
  showToast(`📋 Copied voucher code "${code}" to clipboard!`);
}

function openQuoteModal(merchantTitle) {
  document.getElementById("quoteMerchantTitle").textContent = `Merchant: ${merchantTitle}`;
  const modal = document.getElementById("quoteModal");
  if (modal) modal.classList.add("active");
}

function submitQuoteRequest(e) {
  e.preventDefault();
  closeModal('quoteModal');
  showToast("📩 Quote request sent! Partner merchant will contact you shortly.");
}

function openStoresModal(brandTitle) {
  showToast(`🏬 Locating 45 authorized ${brandTitle} dealers...`);
  alert(`🏬 Authorized ${brandTitle} Retailers:\n1. Motoworld Manila (BGC & QC)\n2. Blade Auto Center (Luzon Malls)\n3. Wheeltek Express Stations`);
}

function updateNavbarAuth() {
  const container = document.getElementById("navAuthActions");
  if (!container) return;

  // Admin ads button — ONLY for Super Admin
  const adminBtnContainer = document.getElementById("adminAdsBtnContainer");
  if (adminBtnContainer) {
    adminBtnContainer.innerHTML = isSuperAdmin()
      ? `<button class="btn btn-secondary" onclick="openAdsManager()"><i class="fa-solid fa-bullhorn"></i> Manage Ads</button>`
      : '';
  }

  if (currentUser) {
    if (isSuperAdmin()) {
      // SUPER ADMIN navbar
      container.innerHTML = `
        <div class="user-profile-pill admin-pill">
          <div class="user-avatar-mini admin-avatar"><i class="fa-solid fa-crown"></i></div>
          <span>Super Admin</span>
        </div>
        <button class="btn btn-orange" onclick="handlePostEventClick()">
          <i class="fa-solid fa-plus"></i> Post Event
        </button>
        <button class="btn btn-secondary" style="padding: 10px 14px;" onclick="handleLogout()">
          <i class="fa-solid fa-right-from-bracket"></i>
        </button>
      `;
    } else {
      // CLUB navbar
      container.innerHTML = `
        <div class="user-profile-pill">
          <div class="user-avatar-mini"><i class="fa-solid fa-motorcycle"></i></div>
          <span>${currentUser.clubName}</span>
        </div>
        <button class="btn btn-orange" onclick="handlePostEventClick()">
          <i class="fa-solid fa-plus"></i> Post Event
        </button>
        <button class="btn btn-secondary" style="padding: 10px 14px;" onclick="handleLogout()">
          <i class="fa-solid fa-right-from-bracket"></i>
        </button>
      `;
    }
  } else {
    // NOT LOGGED IN
    container.innerHTML = `
      <button class="btn btn-secondary" onclick="openAuthModal('login')">
        <i class="fa-solid fa-right-to-bracket"></i> Club Login
      </button>
      <button class="btn btn-orange" onclick="openAuthModal('register')">
        <i class="fa-solid fa-shield-halved"></i> Register Club
      </button>
    `;
  }
}

function handleLoginSubmit(e) {
  e.preventDefault();
  // Strip any accidental leading/trailing symbols (like '=' or quotes)
  const rawEmail = document.getElementById("loginEmail").value.trim().toLowerCase();
  const emailInput = rawEmail.replace(/^[\s='":]+/, '').replace(/[\s='":]+$/, '');
  const passwordInput = document.getElementById("loginPassword").value.trim();

  // Check Super Admin (accepts "admin@irideconnect.ph" and "admin")
  const isSuperAdminEmail = (emailInput === SUPER_ADMIN.email.toLowerCase() || emailInput === "admin");
  const isSuperAdminPass = (passwordInput === SUPER_ADMIN.password);

  if (isSuperAdminEmail && isSuperAdminPass) {
    currentUser = { ...SUPER_ADMIN };
    localStorage.setItem("rideconnect_session", JSON.stringify(currentUser));
    updateNavbarAuth();
    closeModal('authModal');
    showToast(`🔑 Welcome back, Super Admin! Full platform access granted.`);
    return;
  }

  // Then check club users (with whitespace trimming)
  const found = usersData.find(u => 
    u.email.trim().toLowerCase().replace(/^[\s='":]+/, '') === emailInput && u.password.trim() === passwordInput
  );

  if (found) {
    if (!found.role) found.role = "club";
    currentUser = found;
    localStorage.setItem("rideconnect_session", JSON.stringify(currentUser));
    updateNavbarAuth();
    closeModal('authModal');
    showToast(`🟢 Logged in as ${currentUser.clubName}!`);
  } else {
    showToast("❌ Invalid login credentials. Please check your email and password.");
  }
}

function fillSuperAdminDemo() {
  document.getElementById("loginEmail").value = "admin@irideconnect.ph";
  document.getElementById("loginPassword").value = "superadmin2026";
  showToast("🔑 Super Admin credentials filled! Click 'Login to Portal'.");
}

function fillClubDemo() {
  document.getElementById("loginEmail").value = "falcon.riders@gmail.com";
  document.getElementById("loginPassword").value = "admin123";
  showToast("🏍️ Club Demo credentials filled! Click 'Login to Portal'.");
}

function handleRegisterSubmit(e) {
  e.preventDefault();
  const clubName = document.getElementById("regClubName").value;
  const adminName = document.getElementById("regAdminName").value;
  const city = document.getElementById("regCity").value;
  const members = Number(document.getElementById("regMembers").value);
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;
  const passwordConfirm = document.getElementById("regPasswordConfirm").value;

  // Validate passwords match
  if (password !== passwordConfirm) {
    const errorEl = document.getElementById("passwordMatchError");
    const successEl = document.getElementById("passwordMatchSuccess");
    errorEl.style.display = "flex";
    successEl.style.display = "none";
    document.getElementById("regPasswordConfirm").focus();
    return;
  }

  const newUser = { id: Date.now(), role: "club", clubName, adminName, city, members, email, password };
  usersData.push(newUser);
  localStorage.setItem("rideconnect_users", JSON.stringify(usersData));

  const newClubCard = { id: Date.now(), name: clubName.startsWith("🏍") ? clubName : `🏍 ${clubName}`, city, riders: members, verified: true };
  clubsData.unshift(newClubCard);
  localStorage.setItem("rideconnect_clubs", JSON.stringify(clubsData));
  renderClubs(clubsData);
  updateStatsCounters();

  currentUser = newUser;
  localStorage.setItem("rideconnect_session", JSON.stringify(currentUser));
  updateNavbarAuth();
  closeModal('authModal');

  // Show success modal
  showSuccessModal(clubName, adminName, email);
}

function handleLogout() {
  currentUser = null;
  localStorage.removeItem("rideconnect_session");
  updateNavbarAuth();
  showToast("ℹ️ Logged out.");
}

function renderCalendar(month, year) {
  const monthYearHeader = document.getElementById("currentMonthYear");
  if (monthYearHeader) {
    monthYearHeader.textContent = `${monthNames[month]} ${year}`;
  }

  const calendarGrid = document.getElementById("calendarDaysGrid");
  if (!calendarGrid) return;
  calendarGrid.innerHTML = "";

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  const prevMonthTotalDays = new Date(year, month, 0).getDate();

  const realNow = new Date();
  const isRealCurrentMonth = (month === realNow.getMonth() && year === realNow.getFullYear());
  const realTodayDay = realNow.getDate();

  for (let i = firstDay - 1; i >= 0; i--) {
    const dayCell = document.createElement("div");
    dayCell.className = "calendar-day-cell other-month";
    dayCell.innerHTML = `<span class="day-number">${prevMonthTotalDays - i}</span>`;
    calendarGrid.appendChild(dayCell);
  }

  for (let day = 1; day <= totalDays; day++) {
    const dayCell = document.createElement("div");
    dayCell.className = "calendar-day-cell";
    if (isRealCurrentMonth && day === realTodayDay) dayCell.classList.add("today");

    dayCell.innerHTML = `<span class="day-number">${day}</span>`;

    const dayEvents = eventsData.filter(e => Number(e.day) === day && Number(e.month) === month && Number(e.year) === year);
    
    dayEvents.forEach(evt => {
      if (currentFilter !== "all" && evt.category !== currentFilter) return;

      const pill = document.createElement("div");
      pill.className = `calendar-event-pill ${evt.category}`;
      pill.innerHTML = `
        <div class="pill-title">
          <i class="fa-solid fa-motorcycle"></i> ${evt.title}
        </div>
        <div class="pill-meta">
          <span>👥 ${(evt.groups || []).length} Co-Hosts</span>
          <span>${evt.categoryLabel ? evt.categoryLabel.split(' ')[0] : '🏍️'}</span>
        </div>
      `;

      pill.addEventListener("mouseenter", (e) => showPopover(e, evt));
      pill.addEventListener("mouseleave", () => scheduleHidePopover());
      pill.addEventListener("click", () => openEventDetailsModal(evt.id));

      dayCell.appendChild(pill);
    });

    calendarGrid.appendChild(dayCell);
  }

  const totalCells = firstDay + totalDays;
  const remainingCells = 35 - totalCells > 0 ? 35 - totalCells : 42 - totalCells;
  for (let i = 1; i <= remainingCells; i++) {
    const dayCell = document.createElement("div");
    dayCell.className = "calendar-day-cell other-month";
    dayCell.innerHTML = `<span class="day-number">${i}</span>`;
    calendarGrid.appendChild(dayCell);
  }

  // Render mobile agenda cards
  renderAgendaList(month, year);
}

function renderAgendaList(month, year) {
  const container = document.getElementById("mobileEventsAgenda");
  const countEl = document.getElementById("agendaCount");
  if (!container) return;

  let monthEvents = eventsData.filter(e => Number(e.month) === month && Number(e.year) === year);
  if (currentFilter !== "all") {
    monthEvents = monthEvents.filter(e => e.category === currentFilter);
  }

  // Sort by day ascending
  monthEvents.sort((a, b) => Number(a.day) - Number(b.day));

  if (countEl) countEl.textContent = monthEvents.length;

  if (monthEvents.length === 0) {
    container.innerHTML = `
      <div class="agenda-empty-state">
        <i class="fa-solid fa-calendar-xmark" style="font-size: 2.2rem; color: var(--text-muted); margin-bottom: 8px;"></i>
        <p style="font-weight: 700; color: var(--text-secondary); font-size: 0.95rem;">No scheduled events for ${monthNames[month]} ${year}.</p>
        <button class="btn btn-orange" style="margin-top: 12px; padding: 8px 16px; font-size: 0.85rem;" onclick="handlePostEventClick()">
          <i class="fa-solid fa-plus"></i> Post & Host an Event
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = monthEvents.map(evt => {
    const coHostsCount = (evt.groups || []).length;
    return `
      <div class="agenda-card" onclick="openEventDetailsModal(${evt.id})">
        <div class="agenda-date-badge">
          <span class="agenda-month">${monthNames[evt.month].substring(0, 3)}</span>
          <span class="agenda-day">${evt.day}</span>
        </div>
        <div class="agenda-content">
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 4px;">
            <span class="popover-category ${evt.category}" style="margin-bottom: 0; font-size: 0.7rem; padding: 2px 8px;">${evt.categoryLabel || 'Event'}</span>
            <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700;"><i class="fa-solid fa-users" style="color: var(--primary-blue);"></i> ${coHostsCount} Clubs</span>
          </div>
          <h4 class="agenda-title">${evt.title}</h4>
          <div class="agenda-details">
            <div><i class="fa-solid fa-clock" style="color: var(--primary-blue);"></i> ${evt.time || '06:00 AM'}</div>
            <div><i class="fa-solid fa-location-dot" style="color: var(--accent-red);"></i> ${evt.location}</div>
            <div><i class="fa-solid fa-shield-halved" style="color: var(--accent-orange);"></i> ${evt.organizer}</div>
          </div>
        </div>
        <div class="agenda-arrow">
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    `;
  }).join('');
}

function showPopover(e, evt) {
  clearTimeout(popoverHideTimer);
  const popover = document.getElementById("eventPopover");
  if (!popover) return;

  document.getElementById("popoverBanner").src = evt.banner || "assets/medical_mission.jpg";
  document.getElementById("popoverCategory").className = `popover-category ${evt.category}`;
  document.getElementById("popoverCategory").textContent = evt.categoryLabel || "❤️ Charity Event";
  document.getElementById("popoverTitle").textContent = evt.title;
  document.getElementById("popoverDate").textContent = `${monthNames[evt.month]} ${evt.day}, ${evt.year}`;
  document.getElementById("popoverTime").textContent = evt.time || "06:00 AM";
  document.getElementById("popoverLocation").textContent = evt.location;
  document.getElementById("popoverOrganizer").textContent = evt.organizer;

  const tagsContainer = document.getElementById("popoverGroupsTags");
  const groupsList = evt.groups || [evt.organizer];
  tagsContainer.innerHTML = groupsList.map(g => `<span class="group-tag">${g}</span>`).join('');

  const rect = e.currentTarget.getBoundingClientRect();
  let top = rect.bottom + window.scrollY + 8;
  let left = rect.left + window.scrollX;

  if (left + 340 > window.innerWidth) left = window.innerWidth - 350;

  popover.style.top = `${top}px`;
  popover.style.left = `${left}px`;
  popover.style.display = "block";

  document.getElementById("popoverDetailsBtn").onclick = () => {
    hidePopoverNow();
    openEventDetailsModal(evt.id);
  };
  document.getElementById("popoverJoinBtn").onclick = () => {
    hidePopoverNow();
    openEventDetailsModal(evt.id);
  };
}

function scheduleHidePopover() {
  popoverHideTimer = setTimeout(() => hidePopoverNow(), 250);
}

function hidePopoverNow() {
  const popover = document.getElementById("eventPopover");
  if (popover) popover.style.display = "none";
}

function openEventDetailsModal(eventId) {
  const evt = eventsData.find(e => e.id === eventId) || eventsData[0];
  activeModalEventId = evt.id;

  document.getElementById("modalImg").src = evt.banner || "assets/hero_charity_ride.jpg";
  document.getElementById("modalCategoryTag").className = `popover-category ${evt.category}`;
  document.getElementById("modalCategoryTag").textContent = evt.categoryLabel || "❤️ Charity Event";
  document.getElementById("modalTitle").textContent = evt.title;
  document.getElementById("modalDesc").textContent = evt.description;
  document.getElementById("modalOrganizer").textContent = evt.organizer;

  const coHosts = evt.groups || [evt.organizer];
  document.getElementById("modalCoHostsCount").textContent = coHosts.length;
  document.getElementById("modalCoHostsList").innerHTML = coHosts.map(c => `
    <li><i class="fa-solid fa-motorcycle" style="color: var(--primary-blue);"></i> ${c}</li>
  `).join('');

  // Render Host / Super Admin action buttons
  const canManageEvent = isSuperAdmin() || (currentUser && currentUser.clubName === evt.organizer);
  const adminActionsEl = document.getElementById("modalAdminActions");
  if (adminActionsEl) {
    if (canManageEvent) {
      adminActionsEl.style.display = "block";
      const badgeTitle = isSuperAdmin() ? "Super Admin Controls" : "Event Organizer Controls";
      const badgeIcon = isSuperAdmin() ? "fa-crown" : "fa-shield-halved";
      adminActionsEl.innerHTML = `
        <div style="background: linear-gradient(135deg, #fef3c7, #fde68a); border: 1px solid #f59e0b; border-radius: var(--radius-lg); padding: 16px; margin-bottom: 20px;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
            <i class="fa-solid ${badgeIcon}" style="color: #d97706;"></i>
            <span style="font-size: 0.78rem; font-weight: 800; color: #92400e; text-transform: uppercase;">${badgeTitle}</span>
          </div>
          <button class="btn btn-orange" style="width: 100%; margin-bottom: 8px;" onclick="openEditEventModal(${evt.id})">
            <i class="fa-solid fa-pen-to-square"></i> Edit Event &amp; GCash Info
          </button>
          <button class="btn btn-red" style="width: 100%;" onclick="deleteEvent(${evt.id})">
            <i class="fa-solid fa-trash"></i> Delete This Event
          </button>
        </div>
      `;
    } else {
      adminActionsEl.style.display = "none";
      adminActionsEl.innerHTML = "";
    }
  }

  renderModalComments(evt.comments || []);
  renderModalDonations(evt.donations || []);

  const modal = document.getElementById("eventModal");
  if (modal) modal.classList.add("active");
}

function renderModalDonations(donations) {
  const container = document.getElementById("modalDonationsList");
  const countEl = document.getElementById("modalDonationsCount");
  if (!container) return;
  
  const totalAmount = (donations || []).reduce((sum, d) => sum + (Number(d.amount) || 0), 0);
  if (countEl) {
    countEl.textContent = `${(donations || []).length} • ₱${totalAmount.toLocaleString()} Total`;
  }
  
  if (!donations || donations.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 20px; color: var(--text-muted); font-size: 0.85rem;">
        <i class="fa-solid fa-hand-holding-dollar" style="font-size: 2rem; color: #86efac; margin-bottom: 8px; display: block;"></i>
        No donation receipts submitted yet.<br>
        <span style="font-size: 0.78rem;">Be the first to donate via GCash and upload your proof receipt!</span>
      </div>
    `;
    return;
  }

  const currentEvt = eventsData.find(e => e.id === activeModalEventId);
  const canDeleteDonation = isSuperAdmin() || (currentUser && currentEvt && currentUser.clubName === currentEvt.organizer);

  container.innerHTML = `
    <div class="donations-list-grid">
      ${donations.map(d => {
        const safeImg = (d.receiptImg || '').replace(/'/g, "\\'");
        const safeName = (d.donorName || 'Anonymous Rider').replace(/'/g, "\\'");
        const safeMeta = (d.date || 'Verified Proof').replace(/'/g, "\\'");
        return `
          <div class="donation-proof-card">
            <div class="receipt-thumb-wrapper" onclick="openReceiptModal('${safeImg}', '${safeName}', ${Number(d.amount) || 0}, '${safeMeta}')" title="Click to view full receipt">
              <img src="${d.receiptImg}" alt="Receipt" class="receipt-thumb-img" onerror="this.src='assets/hero_charity_ride.jpg'">
              <div class="receipt-thumb-overlay"><i class="fa-solid fa-magnifying-glass-plus"></i></div>
            </div>
            <div class="donation-info">
              <div class="donor-name-row">
                <div class="donor-name" title="${d.donorName}">${d.donorName}</div>
                <span class="donor-amount-badge">₱${Number(d.amount).toLocaleString()}</span>
              </div>
              <div class="donation-meta">
                <i class="fa-solid fa-clock"></i> ${d.date || 'Recently'}
              </div>
              ${d.refNo ? `<div class="donation-ref-note"><i class="fa-solid fa-receipt" style="color: var(--accent-green); font-size: 0.7rem;"></i> ${d.refNo}</div>` : ''}
              ${canDeleteDonation ? `
                <div style="margin-top: 6px; text-align: right;">
                  <button type="button" class="donation-delete-btn" onclick="deleteDonationProof(${d.id})" title="Remove donation proof"><i class="fa-solid fa-trash"></i> Remove</button>
                </div>
              ` : ''}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderModalComments(comments) {
  const container = document.getElementById("modalCommentsList");
  if (!container) return;

  if (comments.length === 0) {
    container.innerHTML = `<p style="font-size: 0.85rem; color: var(--text-muted); font-style: italic;">No coordination notes posted yet. Be the first partner club to comment!</p>`;
    return;
  }

  container.innerHTML = comments.map(c => `
    <div class="comment-item">
      <div class="comment-header">
        <span><i class="fa-solid fa-user-shield"></i> ${c.author}</span>
        <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 400;">${c.time}</span>
      </div>
      <p style="color: var(--text-secondary);">${c.text}</p>
    </div>
  `).join('');
}

function postCollaborationComment(e) {
  e.preventDefault();
  if (!currentUser) {
    showToast("🔒 Please login with your Riding Club account to post updates.");
    openAuthModal('login');
    return;
  }

  const input = document.getElementById("newCommentInput");
  const text = input.value.trim();
  if (!text) return;

  const evt = eventsData.find(e => e.id === activeModalEventId);
  if (!evt) return;

  if (!evt.comments) evt.comments = [];
  evt.comments.push({
    author: `${currentUser.adminName} (${currentUser.clubName})`,
    text: text,
    time: "Just now"
  });

  if (!evt.groups.includes(currentUser.clubName)) {
    evt.groups.push(currentUser.clubName);
  }

  localStorage.setItem("rideconnect_events", JSON.stringify(eventsData));

  renderModalComments(evt.comments);
  openEventDetailsModal(evt.id);
  renderCalendar(currentMonth, currentYear);
  input.value = "";
  showToast("💬 Coordination update posted!");
}

function handleCollaborateClick() {
  if (!currentUser) {
    showToast("🔒 Please login with your Riding Club account to join as a co-hosting partner.");
    openAuthModal('login');
    return;
  }

  const evt = eventsData.find(e => e.id === activeModalEventId);
  if (!evt) return;

  if (evt.groups.includes(currentUser.clubName)) {
    showToast(`ℹ️ ${currentUser.clubName} is already listed as a co-hosting partner club!`);
  } else {
    evt.groups.push(currentUser.clubName);
    localStorage.setItem("rideconnect_events", JSON.stringify(eventsData));
    openEventDetailsModal(evt.id);
    renderCalendar(currentMonth, currentYear);
    showToast(`🎉 ${currentUser.clubName} has joined as an official co-host for this ride!`);
  }
}

function submitNewEvent(e) {
  e.preventDefault();

  // If editing an existing event, delegate to edit handler
  if (editingEventId !== null) {
    submitEditEvent(editingEventId);
    document.getElementById("createEventForm").reset();
    return;
  }

  const title = document.getElementById("newEventTitle").value;
  const category = document.getElementById("newEventCategory").value;
  const day = Number(document.getElementById("newEventDay").value);
  const location = document.getElementById("newEventLocation").value;
  const description = document.getElementById("newEventDesc").value;
  const gcashNumber = document.getElementById("newEventGcashNumber").value.trim() || "0917-888-RIDE";
  const hostName = currentUser ? currentUser.clubName : "Independent Riders PH";
  const gcashName = document.getElementById("newEventGcashName").value.trim() || (hostName + " Charity Fund");

  const categoryLabels = {
    charity: "❤️ Charity Event",
    medical: "🩺 Medical Mission",
    fun: "🏍️ Fun Ride",
    announcement: "📢 Announcement"
  };

  const newEvt = {
    id: Date.now(),
    day: day,
    month: Number(document.getElementById("newEventMonth").value) || currentMonth,
    year: Number(document.getElementById("newEventYear").value) || currentYear,
    title: title,
    category: category,
    categoryLabel: categoryLabels[category],
    time: "06:00 AM Jump-off",
    location: location,
    organizer: hostName,
    gcashNumber: gcashNumber,
    gcashName: gcashName,
    groupsCount: 1,
    groups: [hostName],
    banner: "assets/hero_charity_ride.jpg",
    description: description,
    comments: [
      { author: hostName, text: "Event created. All motorcycle clubs are welcome to join as co-hosting partners!", time: "Just now" }
    ],
    donations: []
  };

  eventsData.push(newEvt);
  localStorage.setItem("rideconnect_events", JSON.stringify(eventsData));

  renderCalendar(currentMonth, currentYear);
  updateStatsCounters();
  closeModal('createEventModal');
  showToast(`🎉 "${title}" published with GCash support!`);
  document.getElementById("createEventForm").reset();
  resetCreateFormTitle();
}

function renderClubs(clubs) {
  const grid = document.getElementById("clubsGrid");
  if (!grid) return;
  grid.innerHTML = clubs.map(c => `
    <div class="club-card">
      <span class="club-badge-verified"><i class="fa-solid fa-circle-check"></i> Verified</span>
      <div class="club-avatar" style="color: ${c.color || 'var(--primary-blue)'}; background: ${c.bg || 'var(--primary-blue-light)'};">
        <i class="fa-solid ${c.icon || 'fa-shield-halved'}"></i>
      </div>
      <h3 class="club-name">${c.name}</h3>
      <p class="club-city"><i class="fa-solid fa-location-dot"></i> ${c.city}</p>
      <span class="club-riders-count"><i class="fa-solid fa-user-group"></i> ${c.riders} Riders</span>
    </div>
  `).join('');
}

function filterClubs() {
  const query = document.getElementById("clubSearchInput").value.toLowerCase();
  const filtered = clubsData.filter(c => c.name.toLowerCase().includes(query) || c.city.toLowerCase().includes(query));
  renderClubs(filtered);
}

function toggleBlowItem(element) {
  element.classList.toggle("checked");
  const checkIcon = element.querySelector(".blow-check i");
  if (checkIcon) {
    checkIcon.style.display = element.classList.contains("checked") ? "block" : "none";
  }

  const allChecked = document.querySelectorAll(".blow-item.checked").length === 10;
  if (allChecked) {
    showToast("🎉 Excellent! Your motorcycle safety check is 100% complete.");
  }
}

function resetBlowbagets() {
  const items = document.querySelectorAll(".blow-item");
  items.forEach(el => {
    el.classList.remove("checked");
    const checkIcon = el.querySelector(".blow-check i");
    if (checkIcon) checkIcon.style.display = "none";
  });
  showToast("Checklist reset! Perform your pre-ride check.");
}

function updateStatsCounters() {
  const eventsCountEl = document.getElementById("statEventsCount");
  const clubsCountEl = document.getElementById("statClubsCount");
  const ridersCountEl = document.getElementById("statRidersCount");

  if (eventsCountEl) eventsCountEl.textContent = `${eventsData.length}+`;
  if (clubsCountEl) clubsCountEl.textContent = `${clubsData.length}+`;
  
  const totalRiders = clubsData.reduce((acc, c) => acc + (c.riders || 20), 12000);
  if (ridersCountEl) ridersCountEl.textContent = `${totalRiders.toLocaleString()}+`;
}

function openCreateEventModal() {
  const modal = document.getElementById("createEventModal");
  if (modal) modal.classList.add("active");
}

let currentReceiptBase64 = null;

function openDonateModal(eventId) {
  const targetId = eventId || activeModalEventId || (eventsData[0] ? eventsData[0].id : null);
  const evt = eventsData.find(e => e.id === targetId) || eventsData[0];
  if (!evt) return;

  activeModalEventId = evt.id;

  const modalTitle = document.getElementById("donateModalTitle");
  const organizerClub = document.getElementById("donateOrganizerClub");
  const gcashName = document.getElementById("donateGcashName");
  const gcashNumber = document.getElementById("donateGcashNumber");

  if (modalTitle) modalTitle.textContent = `Support: ${evt.title}`;
  if (organizerClub) organizerClub.textContent = evt.organizer || "Verified Organizer";
  if (gcashName) gcashName.textContent = evt.gcashName || (evt.organizer + " Charity Fund");
  if (gcashNumber) gcashNumber.textContent = evt.gcashNumber || "0917-888-RIDE";

  // Reset proof form
  const form = document.getElementById("donationProofForm");
  if (form) form.reset();
  removeReceiptImage();

  // Pre-fill donor name if logged in
  const donorNameInput = document.getElementById("donorNameInput");
  if (donorNameInput && currentUser) {
    donorNameInput.value = `${currentUser.adminName} (${currentUser.clubName})`;
  }

  const modal = document.getElementById("donateModal");
  if (modal) modal.classList.add("active");
}

function copyGcashNumber() {
  const numEl = document.getElementById("donateGcashNumber");
  const num = numEl ? numEl.textContent.trim() : "0917-888-RIDE";
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(num);
  } else {
    const temp = document.createElement("textarea");
    temp.value = num;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
  }
  showToast(`📋 Copied GCash Number: ${num}`);
}

function handleReceiptFileSelect(input) {
  const file = input.files && input.files[0];
  if (!file) return;

  if (file.size > 5 * 1024 * 1024) {
    showToast("⚠️ Image size exceeds 5MB. Please choose a smaller receipt screenshot.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    currentReceiptBase64 = e.target.result;
    const previewImg = document.getElementById("receiptPreviewImg");
    const wrapper = document.getElementById("receiptPreviewWrapper");
    const placeholder = document.getElementById("receiptPlaceholder");
    if (previewImg && wrapper && placeholder) {
      previewImg.src = currentReceiptBase64;
      wrapper.style.display = "block";
      placeholder.style.display = "none";
    }
  };
  reader.readAsDataURL(file);
}

function removeReceiptImage() {
  currentReceiptBase64 = null;
  const fileInput = document.getElementById("donorReceiptFile");
  if (fileInput) fileInput.value = "";
  const wrapper = document.getElementById("receiptPreviewWrapper");
  const placeholder = document.getElementById("receiptPlaceholder");
  if (wrapper && placeholder) {
    wrapper.style.display = "none";
    placeholder.style.display = "block";
  }
}

function submitDonationProof(e) {
  e.preventDefault();
  const evt = eventsData.find(e => e.id === activeModalEventId);
  if (!evt) {
    showToast("❌ Event not found.");
    return;
  }

  const donorName = document.getElementById("donorNameInput").value.trim();
  const amount = Number(document.getElementById("donorAmountInput").value);
  const refNo = document.getElementById("donorRefInput").value.trim();
  
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) + ' • ' + now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  // If user didn't pick an image file, generate nice SVG receipt proof
  const receiptImg = currentReceiptBase64 || getSampleReceiptSvg(evt.gcashName || evt.organizer, amount, refNo, dateStr);

  const newProof = {
    id: Date.now(),
    donorName: donorName,
    amount: amount,
    refNo: refNo,
    receiptImg: receiptImg,
    date: dateStr
  };

  if (!evt.donations) evt.donations = [];
  evt.donations.unshift(newProof);
  localStorage.setItem("rideconnect_events", JSON.stringify(eventsData));

  renderModalDonations(evt.donations);
  closeModal('donateModal');
  showToast(`🎉 Salamat ${donorName}! ₱${amount.toLocaleString()} GCash donation proof submitted.`);
}

function openReceiptModal(imgSrc, donorName, amount, meta) {
  const img = document.getElementById("receiptModalImg");
  const title = document.getElementById("receiptModalDonorName");
  const metaEl = document.getElementById("receiptModalMeta");
  const downloadBtn = document.getElementById("receiptModalDownloadBtn");

  if (img) img.src = imgSrc;
  if (title) title.textContent = `${donorName} — GCash Receipt`;
  if (metaEl) metaEl.textContent = `Amount: ₱${Number(amount).toLocaleString()} • ${meta || 'Verified Donation Proof'}`;
  if (downloadBtn) {
    downloadBtn.href = imgSrc;
    downloadBtn.download = `gcash_receipt_${donorName.replace(/[^a-zA-Z0-9]/g, '_')}.png`;
  }

  const modal = document.getElementById("receiptViewModal");
  if (modal) modal.classList.add("active");
}

function deleteDonationProof(proofId) {
  const evt = eventsData.find(e => e.id === activeModalEventId);
  if (!evt || !evt.donations) return;

  const canDelete = isSuperAdmin() || (currentUser && currentUser.clubName === evt.organizer);
  if (!canDelete) {
    showToast("🔒 Only the event organizer or Super Admin can remove donation records.");
    return;
  }

  if (!confirm("Remove this donation proof record?")) return;

  evt.donations = evt.donations.filter(d => d.id !== proofId);
  localStorage.setItem("rideconnect_events", JSON.stringify(eventsData));
  renderModalDonations(evt.donations);
  showToast("🗑️ Donation proof removed.");
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove("active");
}

// ===== SUPER ADMIN & ORGANIZER: Event Edit & Delete =====
let editingEventId = null;

function openEditEventModal(eventId) {
  const evt = eventsData.find(e => e.id === eventId);
  if (!evt) return;

  const canManage = isSuperAdmin() || (currentUser && currentUser.clubName === evt.organizer);
  if (!canManage) {
    showToast("🔒 Only the event host or Super Admin can edit this event.");
    return;
  }

  editingEventId = eventId;
  closeModal('eventModal');

  // Pre-fill the create event form with existing data
  document.getElementById("newEventTitle").value = evt.title;
  document.getElementById("newEventCategory").value = evt.category;
  document.getElementById("newEventLocation").value = evt.location;
  document.getElementById("newEventDesc").value = evt.description;
  document.getElementById("newEventGcashNumber").value = evt.gcashNumber || "";
  document.getElementById("newEventGcashName").value = evt.gcashName || "";

  // Set date
  document.getElementById("newEventDay").value = evt.day;
  document.getElementById("newEventMonth").value = evt.month;
  document.getElementById("newEventYear").value = evt.year;
  const dateDisplay = document.getElementById("newEventDateDisplay");
  if (dateDisplay) dateDisplay.value = `${monthNames[evt.month]} ${evt.day}, ${evt.year}`;

  // Update modal title to "Edit" mode
  const modalEl = document.getElementById("createEventModal");
  const modalTitle = modalEl.querySelector("h2");
  if (modalTitle) modalTitle.textContent = isSuperAdmin() ? "✏️ Edit Event & GCash (Super Admin)" : "✏️ Edit Event & GCash Details";
  const submitBtn = modalEl.querySelector("button[type='submit']");
  if (submitBtn) submitBtn.innerHTML = '<i class="fa-solid fa-save"></i> Save Changes';

  openCreateEventModal();
  showToast("✏️ Editing event — update GCash info or details and save.");
}

function submitEditEvent(eventId) {
  const evt = eventsData.find(e => e.id === eventId);
  if (!evt) return;

  evt.title = document.getElementById("newEventTitle").value;
  evt.category = document.getElementById("newEventCategory").value;
  evt.day = Number(document.getElementById("newEventDay").value) || evt.day;
  evt.month = Number(document.getElementById("newEventMonth").value) ?? evt.month;
  evt.year = Number(document.getElementById("newEventYear").value) || evt.year;
  evt.location = document.getElementById("newEventLocation").value;
  evt.description = document.getElementById("newEventDesc").value;
  evt.gcashNumber = document.getElementById("newEventGcashNumber").value.trim() || evt.gcashNumber || "0917-888-RIDE";
  evt.gcashName = document.getElementById("newEventGcashName").value.trim() || evt.gcashName || (evt.organizer + " Charity Fund");

  const categoryLabels = {
    charity: "❤️ Charity Event",
    medical: "🩺 Medical Mission",
    fun: "🏍️ Fun Ride",
    announcement: "📢 Announcement"
  };
  evt.categoryLabel = categoryLabels[evt.category] || evt.categoryLabel;

  localStorage.setItem("rideconnect_events", JSON.stringify(eventsData));
  renderCalendar(currentMonth, currentYear);
  closeModal('createEventModal');
  showToast(`✅ Event "${evt.title}" & GCash details updated successfully!`);

  // Reset form title back
  resetCreateFormTitle();
  editingEventId = null;
}

function deleteEvent(eventId) {
  const evt = eventsData.find(e => e.id === eventId);
  if (!evt) return;

  const canManage = isSuperAdmin() || (currentUser && currentUser.clubName === evt.organizer);
  if (!canManage) {
    showToast("🔒 Only the event host or Super Admin can delete this event.");
    return;
  }

  if (!confirm(`🗑️ Are you sure you want to delete "${evt.title}"?\n\nThis action cannot be undone.`)) return;

  eventsData = eventsData.filter(e => e.id !== eventId);
  localStorage.setItem("rideconnect_events", JSON.stringify(eventsData));
  renderCalendar(currentMonth, currentYear);
  updateStatsCounters();
  closeModal('eventModal');
  showToast(`🗑️ Event "${evt.title}" has been deleted.`);
}

function resetCreateFormTitle() {
  const modalEl = document.getElementById("createEventModal");
  if (!modalEl) return;
  const modalTitle = modalEl.querySelector("h2");
  if (modalTitle) modalTitle.textContent = "Post & Host a Charity Event";
  const submitBtn = modalEl.querySelector("button[type='submit']");
  if (submitBtn) submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Publish Event to Calendar';
}

function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--accent-green);"></i> <span>${message}</span>`;
  
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

// ===== Password Toggle Visibility =====
function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const isPassword = input.type === "password";
  input.type = isPassword ? "text" : "password";
  const icon = btn.querySelector("i");
  icon.className = isPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
  btn.classList.toggle("active", isPassword);
}

// ===== Real-time Password Confirmation Check =====
document.addEventListener("DOMContentLoaded", function() {
  const regPassword = document.getElementById("regPasswordConfirm");
  if (regPassword) {
    regPassword.addEventListener("input", checkPasswordMatch);
    document.getElementById("regPassword").addEventListener("input", function() {
      if (regPassword.value.length > 0) checkPasswordMatch();
    });
  }
});

function checkPasswordMatch() {
  const password = document.getElementById("regPassword").value;
  const confirm = document.getElementById("regPasswordConfirm").value;
  const errorEl = document.getElementById("passwordMatchError");
  const successEl = document.getElementById("passwordMatchSuccess");

  if (confirm.length === 0) {
    errorEl.style.display = "none";
    successEl.style.display = "none";
    return;
  }

  if (password === confirm) {
    errorEl.style.display = "none";
    successEl.style.display = "flex";
  } else {
    errorEl.style.display = "flex";
    successEl.style.display = "none";
  }
}

// ===== Success Registration Modal =====
function showSuccessModal(clubName, adminName, email) {
  document.getElementById("successClubName").textContent = clubName;
  document.getElementById("successAdminName").textContent = adminName;
  document.getElementById("successEmail").textContent = email;

  // Reset & clear form
  document.getElementById("registerForm").reset();
  const errorEl = document.getElementById("passwordMatchError");
  const successEl = document.getElementById("passwordMatchSuccess");
  if (errorEl) errorEl.style.display = "none";
  if (successEl) successEl.style.display = "none";

  // Open modal
  const modal = document.getElementById("successModal");
  modal.classList.add("active");

  // Spawn confetti
  spawnConfetti();
}

function spawnConfetti() {
  const container = document.getElementById("confettiContainer");
  if (!container) return;
  container.innerHTML = "";

  const colors = [
    "#f97316", "#1e40af", "#10b981", "#8b5cf6",
    "#ef4444", "#f59e0b", "#ec4899", "#06b6d4"
  ];

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.className = "confetti-particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.animationDuration = (Math.random() * 2 + 1.5) + "s";
    particle.style.animationDelay = (Math.random() * 0.8) + "s";
    particle.style.width = (Math.random() * 6 + 5) + "px";
    particle.style.height = (Math.random() * 6 + 5) + "px";
    particle.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
    container.appendChild(particle);
  }
}

// ===== Custom Datepicker =====
let dpMonth = new Date().getMonth();
let dpYear = new Date().getFullYear();
let dpSelectedDay = null;
let dpSelectedMonth = null;
let dpSelectedYear = null;

const dpMonthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

function toggleDatepicker() {
  const popup = document.getElementById("datepickerPopup");
  if (popup.classList.contains("active")) {
    popup.classList.remove("active");
  } else {
    popup.classList.add("active");
    renderDatepicker();
  }
}

function datepickerNavMonth(dir) {
  dpMonth += dir;
  if (dpMonth > 11) { dpMonth = 0; dpYear++; }
  if (dpMonth < 0) { dpMonth = 11; dpYear--; }
  renderDatepicker();
}

function renderDatepicker() {
  const label = document.getElementById("datepickerMonthLabel");
  const grid = document.getElementById("datepickerDays");
  if (!label || !grid) return;

  label.textContent = dpMonthNames[dpMonth] + " " + dpYear;
  grid.innerHTML = "";

  const firstDay = new Date(dpYear, dpMonth, 1).getDay();
  const totalDays = new Date(dpYear, dpMonth + 1, 0).getDate();
  const prevMonthDays = new Date(dpYear, dpMonth, 0).getDate();
  const today = new Date();
  const todayDay = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  // Previous month trailing days
  for (let i = firstDay - 1; i >= 0; i--) {
    const cell = document.createElement("div");
    cell.className = "datepicker-day-cell other-month";
    cell.textContent = prevMonthDays - i;
    grid.appendChild(cell);
  }

  // Current month days
  for (let day = 1; day <= totalDays; day++) {
    const cell = document.createElement("div");
    cell.className = "datepicker-day-cell";
    cell.textContent = day;

    // Check if today
    if (day === todayDay && dpMonth === todayMonth && dpYear === todayYear) {
      cell.classList.add("today");
    }

    // Check if selected
    if (day === dpSelectedDay && dpMonth === dpSelectedMonth && dpYear === dpSelectedYear) {
      cell.classList.add("selected");
    }

    // Mark past days
    const cellDate = new Date(dpYear, dpMonth, day);
    const todayStart = new Date(todayYear, todayMonth, todayDay);
    if (cellDate < todayStart) {
      cell.classList.add("past");
    } else {
      cell.addEventListener("click", function() {
        datepickerSelectDate(day, dpMonth, dpYear);
      });
    }

    grid.appendChild(cell);
  }

  // Next month leading days
  const totalCells = firstDay + totalDays;
  const remaining = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
  for (let i = 1; i <= remaining; i++) {
    const cell = document.createElement("div");
    cell.className = "datepicker-day-cell other-month";
    cell.textContent = i;
    grid.appendChild(cell);
  }
}

function datepickerSelectDate(day, month, year) {
  dpSelectedDay = day;
  dpSelectedMonth = month;
  dpSelectedYear = year;

  // Update hidden inputs
  document.getElementById("newEventDay").value = day;
  document.getElementById("newEventMonth").value = month;
  document.getElementById("newEventYear").value = year;

  // Update display
  const display = document.getElementById("newEventDateDisplay");
  const formatted = dpMonthNames[month] + " " + day + ", " + year;
  display.value = formatted;

  // Close popup
  document.getElementById("datepickerPopup").classList.remove("active");
}

function datepickerSelectToday() {
  const today = new Date();
  dpMonth = today.getMonth();
  dpYear = today.getFullYear();
  datepickerSelectDate(today.getDate(), dpMonth, dpYear);
}

// Close datepicker when clicking outside
document.addEventListener("click", function(e) {
  const wrapper = document.getElementById("datepickerWrapper");
  const popup = document.getElementById("datepickerPopup");
  if (wrapper && popup && !wrapper.contains(e.target)) {
    popup.classList.remove("active");
  }
});

// ===== Advertisement System =====
const adCategoryIcons = {
  "Helmet & Gear Shop": "fa-helmet-safety",
  "Custom Apparel": "fa-vest",
  "Lubricants & Care": "fa-oil-can",
  "Motorcycle Parts": "fa-gears",
  "Motorcycle Dealer": "fa-motorcycle",
  "Repair & Service": "fa-wrench",
  "Food & Beverages": "fa-utensils",
  "Insurance & Finance": "fa-shield-halved",
  "Other Services": "fa-box-open"
};

function renderAds() {
  const grid = document.getElementById("adsGrid");
  const emptyState = document.getElementById("adsEmptyState");
  if (!grid) return;

  const activeAds = adsData.filter(ad => ad.active);

  if (activeAds.length === 0) {
    grid.style.display = "none";
    if (emptyState) emptyState.style.display = "block";
    return;
  }

  grid.style.display = "";
  if (emptyState) emptyState.style.display = "none";
  grid.innerHTML = "";

  activeAds.forEach(ad => {
    const icon = adCategoryIcons[ad.category] || "fa-store";
    const gradientColors = ad.gradient ? ad.gradient.split(",") : ["#1e293b", "#0f172a"];

    // Banner: image or gradient
    let bannerHtml;
    if (ad.imageUrl) {
      bannerHtml = `
        <img src="${ad.imageUrl}" alt="${ad.name}" class="ad-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="ad-gradient-banner" style="display: none; background: linear-gradient(135deg, ${gradientColors[0]}, ${gradientColors[1]});"><i class="fa-solid ${icon}"></i></div>
      `;
    } else {
      bannerHtml = `<div class="ad-gradient-banner" style="background: linear-gradient(135deg, ${gradientColors[0]}, ${gradientColors[1]});"><i class="fa-solid ${icon}"></i></div>`;
    }

    // Action buttons
    let actionsHtml = '';
    if (ad.voucherCode) {
      actionsHtml += `<button class="btn btn-secondary" onclick="openVoucherModal('${ad.name.replace(/'/g, "\\'")}', '${ad.voucherCode}', '${(ad.voucherLabel || ad.voucherCode).replace(/'/g, "\\'")}')"><i class="fa-solid fa-bag-shopping"></i> Claim Voucher</button>`;
    }

    // Contact row
    let contactRowHtml = '';
    const contactBtns = [];
    if (ad.contact) {
      contactBtns.push(`<a href="tel:${ad.contact.replace(/[^0-9+]/g, '')}" class="ad-contact-btn"><i class="fa-solid fa-phone"></i> ${ad.contact}</a>`);
    }
    if (ad.website) {
      contactBtns.push(`<a href="${ad.website}" target="_blank" rel="noopener" class="ad-contact-btn"><i class="fa-solid fa-globe"></i> Visit Page</a>`);
    }
    if (contactBtns.length > 0) {
      contactRowHtml = `<div class="ad-contact-row">${contactBtns.join('')}</div>`;
    }

    const card = document.createElement("div");
    card.className = "ad-card";
    card.innerHTML = `
      ${bannerHtml}
      <span class="ad-sponsored-badge">Sponsored</span>
      <div class="ad-body">
        <div>
          <span class="ad-tag">${ad.category}</span>
          <h3 class="ad-title">${ad.name}</h3>
          <p class="ad-desc">${ad.description}</p>
        </div>
        ${actionsHtml}
        ${contactRowHtml}
      </div>
    `;
    grid.appendChild(card);
  });
}

function openAdsManager() {
  if (!isSuperAdmin()) {
    showToast("🔒 Only the Super Admin can manage advertisements.");
    return;
  }
  renderAdminAdsList();
  const modal = document.getElementById("adsManagerModal");
  modal.classList.add("active");
}

function submitNewAd(e) {
  e.preventDefault();

  const newAd = {
    id: Date.now(),
    name: document.getElementById("adBusinessName").value,
    category: document.getElementById("adCategory").value,
    description: document.getElementById("adDescription").value,
    contact: document.getElementById("adContact").value,
    website: document.getElementById("adWebsite").value,
    imageUrl: document.getElementById("adImageUrl").value,
    gradient: document.getElementById("adGradient").value,
    voucherCode: document.getElementById("adVoucherCode").value,
    voucherLabel: document.getElementById("adVoucherLabel").value,
    active: true
  };

  adsData.push(newAd);
  localStorage.setItem("rideconnect_ads_v3", JSON.stringify(adsData));
  renderAds();

  renderHeroCarousel();
  renderAdminAdsList();
  document.getElementById("addAdForm").reset();
  showToast(`📢 "${newAd.name}" advertisement published!`);
}

function deleteAd(adId) {
  adsData = adsData.filter(ad => ad.id !== adId);
  localStorage.setItem("rideconnect_ads_v3", JSON.stringify(adsData));
  renderAds();

  renderHeroCarousel();
  renderAdminAdsList();
  showToast("🗑️ Advertisement removed.");
}

function toggleAdVisibility(adId) {
  const ad = adsData.find(a => a.id === adId);
  if (ad) {
    ad.active = !ad.active;
    localStorage.setItem("rideconnect_ads_v3", JSON.stringify(adsData));
    renderAds();

    renderHeroCarousel();
    renderAdminAdsList();
    showToast(ad.active ? `✅ "${ad.name}" is now visible.` : `⏸️ "${ad.name}" is now hidden.`);
  }
}

function renderAdminAdsList() {
  const list = document.getElementById("adminAdsList");
  if (!list) return;

  if (adsData.length === 0) {
    list.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 20px; font-style: italic;">No advertisements yet. Add one above!</p>`;
    return;
  }

  list.innerHTML = adsData.map(ad => {
    const icon = adCategoryIcons[ad.category] || "fa-store";
    const gradientColors = ad.gradient ? ad.gradient.split(",") : ["#1e293b", "#0f172a"];
    const statusText = ad.active ? "Active" : "Hidden";
    const statusColor = ad.active ? "var(--accent-green)" : "var(--text-muted)";

    return `
      <div class="admin-ad-item" style="${!ad.active ? 'opacity: 0.6;' : ''}">
        <div class="admin-ad-thumb" style="background: linear-gradient(135deg, ${gradientColors[0]}, ${gradientColors[1]});">
          <i class="fa-solid ${icon}"></i>
        </div>
        <div class="admin-ad-info">
          <h4>${ad.name}</h4>
          <p>${ad.category} · <span style="color: ${statusColor};">${statusText}</span></p>
        </div>
        <div class="admin-ad-actions">
          <button class="admin-ad-action-btn toggle-btn ${!ad.active ? 'inactive' : ''}" onclick="toggleAdVisibility(${ad.id})" title="${ad.active ? 'Hide ad' : 'Show ad'}">
            <i class="fa-solid ${ad.active ? 'fa-eye' : 'fa-eye-slash'}"></i>
          </button>
          <button class="admin-ad-action-btn" onclick="deleteAd(${ad.id})" title="Delete ad">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');
}


let heroCarouselInterval = null;

function renderHeroCarousel() {
  const container = document.getElementById("heroCarousel");
  const track = document.getElementById("heroCarouselTrack");
  const indicators = document.getElementById("heroCarouselIndicators");
  
  if (!container || !track || !indicators) return;

  const activeAds = adsData.filter(ad => ad.active);

  if (activeAds.length === 0) {
    container.style.display = "none";
    if (heroCarouselInterval) clearInterval(heroCarouselInterval);
    return;
  }
  
  container.style.display = "block";

  track.innerHTML = activeAds.map(ad => {
    const icon = adCategoryIcons[ad.category] || "fa-store";
    const gradientColors = ad.gradient ? ad.gradient.split(",") : ["#1e293b", "#0f172a"];
    
    if (ad.imageUrl) {
      return `<div class="hero-carousel-slide" onclick="scrollToSection('marketplace')">
                <img src="${ad.imageUrl}" alt="${ad.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="slide-gradient" style="display: none; background: linear-gradient(135deg, ${gradientColors[0]}, ${gradientColors[1]});"><i class="fa-solid ${icon}"></i></div>
              </div>`;
    }
    return `<div class="hero-carousel-slide" onclick="scrollToSection('marketplace')">
              <div class="slide-gradient" style="background: linear-gradient(135deg, ${gradientColors[0]}, ${gradientColors[1]});"><i class="fa-solid ${icon}"></i></div>
            </div>`;
  }).join('');

  indicators.innerHTML = activeAds.map((_, idx) => 
    `<div class="hero-carousel-dot ${idx === 0 ? 'active' : ''}" onclick="goToHeroSlide(${idx})"></div>`
  ).join('');

  let currentSlide = 0;
  const slideCount = activeAds.length;

  window.goToHeroSlide = function(index) {
    currentSlide = index;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    Array.from(indicators.children).forEach((dot, idx) => {
      dot.classList.toggle("active", idx === currentSlide);
    });
    
    resetHeroCarouselTimer();
  };

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    goToHeroSlide(currentSlide);
  }

  function resetHeroCarouselTimer() {
    if (heroCarouselInterval) clearInterval(heroCarouselInterval);
    heroCarouselInterval = setInterval(nextSlide, 5000); // 5 seconds per slide
  }

  resetHeroCarouselTimer();
}
