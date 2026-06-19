const topBtn = document.getElementById("scrollTopBtn");
const bottomBtn = document.getElementById("scrollBottomBtn");

// Scroll to Top
topBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Scroll to Bottom
bottomBtn.addEventListener("click", function () {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth"
  });
});

let lastScroll = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll) {
    // Scroll down → hide navbar
    navbar.style.top = "-70px";
  } else {
    // Scroll up → show navbar
    navbar.style.top = "0";
  }
  lastScroll = currentScroll;
});

//FORM POP OPEN
function openForm() {
  document.getElementById("formPopup").style.display = "flex";
}
//CLOSE POPUP
function closeForm() {
  document.getElementById("formPopup").style.display = "none";
}
//LOGIN POPUP SHOW
function showLogin() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("registerForm").style.display = "none";
}

function showRegister() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "block";
}
//LOGIN ALERT

function loginAlert() {
  let email = document.getElementById("email");
  let pass = document.getElementById("pass");
  if (!email.checkValidity()) {
    email.reportValidity();
    return false;
  }
  if (pass.value.trim() == "") {
    showPopup("Please enter password");
    return false;
  }
  showPopup("Login Successfully");

  setTimeout(function () {
    location.reload();
  }, 400);
  return false;
}

//REGISTER ALERT

function registerAlert() {
  let name = document.getElementById("name");
  let phone = document.getElementById("phone");
  let email = document.getElementById("reg-email");
  let pass = document.getElementById("reg-pass");
  let con = document.getElementById("reg-con");

  if (name.value.trim() == "") {
    showPopup("Please enter Name");
    return false;
  }
  if (phone.value.trim() == "") {
    showPopup("Please enter Phone Number");
    return false;
  }
  if (!email.checkValidity()) {
    email.reportValidity();
    showPopup("Please enter email");
    return false;
  }
  if (pass.value.trim() == "") {
    showPopup("Please enter password");
    return false;
  }
  if (pass.value.trim() !== con.value.trim()) {
    showPopup("Passwords Don't Match");
    return false;
  }
  showPopup("Registered Successfully");

  setTimeout(function () {
    location.reload();
  }, 400);
  return false;
}

//OPEN HERO
function openHeroForm() {
  document.getElementById("heroForm").style.display = "flex";
}
//CLOSE HERO
function closeHeroForm() {
  document.getElementById("heroForm").style.display = "none";
}

// HERO FORM SUBMIT FUNCTION

function submitHero() {
  let name = document.getElementById("hero-name").value;
  let phone = document.getElementById("hero-phone").value;
  let email = document.getElementById("hero-email").value;

  if (name === "" || phone === "" || email === "") {
    showPopup("Please fill all fields");
    return;
  } else {
    showPopup("Details Submitted");
  }
  const formBox = document.querySelector("#heroForm");
  setTimeout(() => {
    closeForm();
  }, 800);
}
//destination
// SLIDER
document.querySelectorAll(".dest-card").forEach((card) => {
  let slides = card.querySelectorAll(".dest-slide");
  let prev = card.querySelector(".dest-prev");
  let next = card.querySelector(".dest-next");

  let index = 0;

  function showSlide(i) {
    slides.forEach((s) => s.classList.remove("active"));
    slides[i].classList.add("active");
  }

  prev.onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  };

  next.onclick = () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  };
});

// POPUP
let popup = document.getElementById("dest-popup");
let popupImg = document.getElementById("dest-popup-img");
let closeBtn = document.getElementById("dest-close");

document.querySelectorAll(".dest-slide").forEach((img) => {
  img.onclick = () => {
    popup.style.display = "flex";
    popupImg.src = img.src;
  };
});

closeBtn.onclick = () => {
  popup.style.display = "none";
};

// outside click close
popup.onclick = (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
};

// BOOK NOW DESTINATION BUTTON
function destbookNow() {
  let msg = document.getElementById("destbookMsg");

  // show message
  msg.classList.add("show");

  // 🔥 PAGE TOP PE LE JAO (instant)
  window.scrollTo({
    top: 0,
    behavior: "auto" // jhatke se
  });

  // hide after 2.5 sec
  setTimeout(() => {
    msg.classList.remove("show");
  }, 2500);
}
//MOVING GALLERY ANIMATION
const galleryTrack = document.getElementById("galleryTrack");

galleryTrack.innerHTML += galleryTrack.innerHTML;

let gPosition = 0;
let gSpeed = 0.3;
let gPaused = false;

function moveGallery() {
  if (!gPaused) {
    gPosition -= gSpeed;

    if (Math.abs(gPosition) >= galleryTrack.scrollWidth / 2) {
      gPosition = 0;
    }

    galleryTrack.style.transform = `translateX(${gPosition}px)`;
  }

  requestAnimationFrame(moveGallery);
}
moveGallery();
//STOP ANIMATION OF GALLERY WHILE MOUSE HOVERS
galleryTrack.addEventListener("mouseenter", () => {
  gPaused = true;
});

galleryTrack.addEventListener("mouseleave", () => {
  gPaused = false;
});
//OPEN GALLAERY IMAGE
function openImage(src) {
  document.getElementById("imagePopup").style.display = "flex";
  document.getElementById("popupImg").src = src;
}

//CLOSE GALLERY IMAGE
function closeImage() {
  document.getElementById("imagePopup").style.display = "none";
}

//MOVING REVIEW GALLERY ANIMATION
const reviewTrack = document.getElementById("reviewTrack");

reviewTrack.innerHTML += reviewTrack.innerHTML;

let rPosition = 0;
let rSpeed = 0.3;
let rPaused = false;

function moveReview() {
  if (!rPaused) {
    rPosition -= rSpeed;
    if (Math.abs(rPosition) >= reviewTrack.scrollWidth / 2) {
      rPosition = 0;
    }

    reviewTrack.style.transform = `translateX(${rPosition}px)`;
  }

  requestAnimationFrame(moveReview);
}

moveReview();
//STOP REVIEW GALLERY ANIMATION WHILE MOUSE HOVERS
reviewTrack.addEventListener("mouseenter", () => {
  rPaused = true;
});

reviewTrack.addEventListener("mouseleave", () => {
  rPaused = false;
});

//OPEN REVIEW CARD
function openReviewPopup(img, text, name) {
  document.getElementById("reviewPopup").style.display = "flex";
  document.getElementById("popupImage").src = img;
  document.getElementById("popupText").innerText = text;
  document.getElementById("popupName").innerText = name;
}
//CLOSE REVIEW POPUP CARD
function closeReviewPopup(event) {
  if (event.target.id === "reviewPopup") {
    document.getElementById("reviewPopup").style.display = "none";
  }
}

function vendorShowSection(sectionId) {
  // sab sections hide
  let sections = document.querySelectorAll(".vendor-section");
  sections.forEach((sec) => {
    sec.style.display = "none";
  });

  // selected section show
  let section = document.getElementById(sectionId);
  section.style.display = "block";

  // scroll to section
  section.scrollIntoView();
}

function vendorNextSlide(btn) {
  let slides = btn.parentElement.querySelectorAll(".vendor-slide");
  let index = [...slides].findIndex((s) => s.classList.contains("active"));

  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function vendorPrevSlide(btn) {
  let slides = btn.parentElement.querySelectorAll(".vendor-slide");
  let index = [...slides].findIndex((s) => s.classList.contains("active"));

  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

function vendorbookNow() {
  let msg = document.getElementById("vendorSuccessMsg");

  // show message
  msg.classList.add("show");

  // 🔥 PAGE TOP PE LE JAO (instant)
  window.scrollTo({
    top: 0,
    behavior: "auto" // jhatke se
  });

  // hide after 2.5 sec
  setTimeout(() => {
    msg.classList.remove("show");
  }, 2500);
}

function vendorShowSection(sectionId) {
  // 🔴 sab sections hide
  let sections = document.querySelectorAll(".vendor-section");
  sections.forEach((sec) => {
    sec.style.display = "none";
  });

  // 🟢 sirf clicked wala show
  let section = document.getElementById(sectionId);
  if (section) {
    section.style.display = "block";

    // scroll usi pe
    window.scrollTo({
      top: section.offsetTop - 50,
      behavior: "auto"
    });
  }
}

function vendorOpenImage(img) {
  let popup = document.getElementById("vendorImagePopup");
  let popupImg = document.getElementById("vendorPopupImg");

  popup.style.display = "flex";
  popupImg.src = img.src;
}

function vendorCloseImage() {
  document.getElementById("vendorImagePopup").style.display = "none";
}

function vendoroutsideClick(event) {
  window.onclick = function (event) {
    let popup = document.getElementById("vendorImagePopup");

    if (event.target === popup) {
      popup.style.display = "none";
    }
  };
}

function toggleSection(id) {
  let sections = document.querySelectorAll(".hidden-section");

  // sab close karo
  sections.forEach((sec) => {
    sec.style.display = "none";
  });

  // selected open karo
  let current = document.getElementById(id);
  current.style.display = "flex";

  // scroll smooth
  current.scrollIntoView({
    behavior: "smooth"
  });
}

// redirect to vendors section
function goTo(sectionId) {
  window.location.href = "all_ven.html#" + sectionId;
}

// direct page open
function goToPage() {
  window.location.href = "all_ven.html";
}

//gallery page
function openGalleryImage(img) {
  document.getElementById("galleryPagePopup").style.display = "block";
  document.getElementById("galleryPagePopupImg").src = img.src;
}

function closeGalleryImage() {
  document.getElementById("galleryPagePopup").style.display = "none";
}

function galleryoutsideClick(event) {
  window.onclick = function (event) {
    let popup = document.getElementById("galleryPagePopup");

    if (event.target === popup) {
      popup.style.display = "none";
    }
  };
}

//about page

function scrollToContact() {
  window.location.href = "contact.html";
}

//contact page
function sendMessage() {
  let email = document.getElementById("contact-email");
  let message = document.getElementById("contact-message");
  if (!email.checkValidity()) {
    email.reportValidity();
    showPopup("Please enter email");
    return false;
  }
  if (message.value.trim() == "") {
    showPopup("Please write message");
    return false;
  }
  showPopup("Details submitted");
  setTimeout(function () {
    location.reload();
  }, 400);
  window.scrollTo({
    top: 0,
    behavior: "auto" // jhatke se
  });
  return false;
}
function showPopup(message) {
  let popup = document.getElementById("topPopup");
  popup.innerText = message;
  popup.style.top = "20px";
  setTimeout(() => {
    popup.style.top = "-60px";
  }, 1000);
}
