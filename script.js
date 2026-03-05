// --- 1. Custom Cursor ---
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');

window.addEventListener('mousemove', (e) => {
  if (cursorDot && cursorRing) {
    cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    cursorRing.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
  }
});

document.addEventListener('mousedown', () => cursorRing && cursorRing.classList.add('clicking'));
document.addEventListener('mouseup', () => cursorRing && cursorRing.classList.remove('clicking'));

// Hover effects for cursor
document.querySelectorAll('a, button, .showcase-tab, .stat-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    if (cursorDot) cursorDot.style.transform = 'scale(1.5)';
    if (cursorRing) {
      cursorRing.style.transform = 'scale(1.5)';
      cursorRing.style.borderColor = 'var(--accent-color)';
    }
  });
  el.addEventListener('mouseleave', () => {
    if (cursorDot) cursorDot.style.transform = 'scale(1)';
    if (cursorRing) {
      cursorRing.style.transform = 'scale(1)';
      cursorRing.style.borderColor = 'rgba(255, 255, 255, 0.5)';
    }
  });
});


// --- 2. Typing Text Effect ---
const typingText = document.getElementById('typingText');
const words = ["Web Developer", "Tech Enthusiast", "Informatics Student"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  if (!typingText) return;
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 2000; // Pause at end of word
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; // Next word
    typeSpeed = 500; // Pause before typing next
  }

  setTimeout(typeEffect, typeSpeed);
}
typeEffect();


// --- 3. Scroll Reveal ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('visible');

      // If it's the skills section, animate the bars
      if (el.target.classList.contains('skill-bars') || el.target.querySelector('.skill-bar-fill')) {
        const fills = el.target.querySelectorAll('.skill-bar-fill');
        fills.forEach((fill, index) => {
          const width = fill.getAttribute('data-width');
          setTimeout(() => {
            fill.style.width = width + '%';
          }, index * 150);
        });
      }

      observer.unobserve(el.target);
    }
  });
}, { threshold: 0.1 });

// Also observe individual bars just in case they are revealed separately
document.querySelectorAll('.reveal, .skill-bars').forEach(el => observer.observe(el));


// --- 4. Smooth Active Nav ---
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach(a => {
    if (a.getAttribute('href') === '#' + current) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
});


// --- 5. Project Showcase Logic ---
const projects = [
  {
    id: 'tsa',
    num: '01',
    title: 'E-Commerce Hewan TSA',
    cat: 'Marketplace / Laravel',
    tags: ['Laravel', 'JavaScript', 'MySQL', 'Midtrans', 'RajaOngkir'],
    image: 'assets/projecttsa.png',
    desc: 'Platform Marketplace hewan peliharaan lengkap dengan integrasi payment gateway Midtrans dan pengecekan ongkir otomatis menggunakan RajaOngkir API.',
    features: ['Integrasi Midtrans Payment', 'RajaOngkir API', 'Sistem Keranjang & Checkout', 'Dashboard Admin & User']
  },
  {
    id: 'surat',
    num: '02',
    title: 'Pencatatan Surat',
    cat: 'Sistem Informasi / Laravel',
    tags: ['Laravel', 'Bootstrap', 'MySQL'],
    image: 'assets/perpus.png',
    desc: 'Aplikasi manajemen dan pencatatan surat masuk maupun surat keluar untuk instansi, dilengkapi dengan fitur disposisi dan pelacakan status surat serta cetak PDF/Excel.',
    features: ['Manajemen Surat Masuk/Keluar', 'Sistem Disposisi', 'Cetak Laporan', 'Multi-role User']
  },
  {
    id: 'zia',
    num: '03',
    title: 'ZIA Laundry',
    cat: 'Manajemen / Laravel',
    tags: ['Laravel', 'Tailwind', 'MySQL'],
    image: 'assets/laundry.png',
    desc: 'Sistem Manajemen Kasir Laundry untuk mempermudah pencatatan transaksi, status pengerjaan pakaian, dan laporan pendapatan finansial secara realtime.',
    features: ['Point of Sales (POS)', 'Tracking Status Laundry', 'Manajemen Pelanggan', 'Laporan Keuangan']
  }
];

function switchProject(index) {
  // Update active tab styles
  document.querySelectorAll('.showcase-tab').forEach((tab, i) => {
    if (i === index) tab.classList.add('active');
    else tab.classList.remove('active');
  });

  const proj = projects[index];
  const detailBox = document.querySelector('.showcase-detail');

  if (detailBox) {
    detailBox.style.opacity = 0;
    detailBox.style.transform = 'translateY(10px)';
  }

  setTimeout(() => {
    // Update Media
    const imgEl = document.getElementById('showcaseImg');
    if (imgEl) {
      imgEl.src = proj.image;
      imgEl.style.display = 'block'; // Ensure it's shown
    }

    // Hide Video/Youtube for now since all current mockups are images
    const ytEl = document.getElementById('showcaseYoutube');
    if (ytEl) ytEl.style.display = 'none';
    const vidEl = document.getElementById('showcaseVideo');
    if (vidEl) vidEl.style.display = 'none';

    // Update Badges
    const badge1 = document.getElementById('mediaBadge');
    if (badge1) badge1.textContent = `PROJECT // ${proj.num}`;
    const badge2 = document.getElementById('mediaBadge2');
    if (badge2) badge2.textContent = `PROJECT // ${proj.num}`;

    // Update Text Details
    const title = document.getElementById('sdTitle');
    if (title) title.textContent = proj.title;

    const cat = document.getElementById('sdCat');
    if (cat) cat.textContent = proj.cat;

    // Update Tags
    const tagsWrapper = document.getElementById('sdTags');
    if (tagsWrapper) {
      tagsWrapper.innerHTML = proj.tags.map(t => `<span class="project-tag">${t}</span>`).join('');
    }

    // Update Button Action
    const btn = document.getElementById('sdBtn');
    if (btn) btn.setAttribute('onclick', `openModal('${proj.id}')`);

    // Fade IN details
    if (detailBox) {
      detailBox.style.opacity = 1;
      detailBox.style.transform = 'translateY(0)';
    }
  }, 200);
}


// --- 6. Modal Logic ---
const projectModal = document.getElementById('projectModal');

function openModal(id) {
  const proj = projects.find(p => p.id === id);
  if (!proj) return;

  const modalImg = document.getElementById('modalImg');
  if (modalImg) modalImg.src = proj.image;

  const modalNum = document.getElementById('modalNum');
  if (modalNum) modalNum.textContent = `PROJECT // ${proj.num}`;

  const modalTitle = document.getElementById('modalTitle');
  if (modalTitle) modalTitle.textContent = proj.title;

  const modalTags = document.getElementById('modalTags');
  if (modalTags) {
    modalTags.innerHTML = proj.tags.map(t => `<span class="project-tag">${t}</span>`).join('');
  }

  const modalDesc = document.getElementById('modalDesc');
  if (modalDesc) modalDesc.textContent = proj.desc;

  const modalFeatures = document.getElementById('modalFeatures');
  if (modalFeatures) {
    const featuresHtml = proj.features.map(f => `<div>- ${f}</div>`).join('');
    modalFeatures.innerHTML = `<div style="margin-top: 15px; margin-bottom: 5px;"><strong>Fitur Utama:</strong></div> ${featuresHtml}`;
  }

  if (projectModal) {
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent scrolling behind modal
  }
}

function closeModal(event) {
  if (event.target === projectModal) {
    projectModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

function closeModalForce() {
  if (projectModal) {
    projectModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}


// --- 7. Contact Form Logic ---
function sendMessage() {
  const btn = document.getElementById('sendBtn');
  if (!btn) return;

  const orgText = btn.textContent;

  btn.textContent = "[ Mengirim... ]";
  btn.disabled = true;

  // Fake sending delay
  setTimeout(() => {
    btn.textContent = "[ Pesan Terkirim! ]";
    btn.style.backgroundColor = 'var(--accent-color)';
    btn.style.color = 'var(--bg-color)';

    // Clear forms
    const fName = document.getElementById('formNama');
    const fEmail = document.getElementById('formEmail');
    const fPesan = document.getElementById('formPesan');
    if (fName) fName.value = '';
    if (fEmail) fEmail.value = '';
    if (fPesan) fPesan.value = '';

    // Revert button
    setTimeout(() => {
      btn.textContent = orgText;
      btn.style.backgroundColor = '';
      btn.style.color = '';
      btn.disabled = false;
    }, 3000);
  }, 1500);
}


// --- 8. Konami Code (Easter Egg) ---
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
  // Map 'B' and 'A' as case insensitive
  const keyMap = e.key.toLowerCase() === 'b' ? 'b' : (e.key.toLowerCase() === 'a' ? 'a' : e.key);

  if (keyMap === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      const overlay = document.getElementById('konamiOverlay');
      if (overlay) overlay.classList.add('active');
      konamiIndex = 0; // reset
    }
  } else {
    // Reset if wrong key, but allow restarting immediately if the wrong key was the start of the sequence
    konamiIndex = (keyMap === konamiCode[0]) ? 1 : 0;
  }
});

function closeKonami() {
  const overlay = document.getElementById('konamiOverlay');
  if (overlay) overlay.classList.remove('active');
}