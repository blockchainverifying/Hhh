/**
 * SAINFOXIYA - Global Data Store for Footers & Popups
 * This file contains the dynamic content for various website sections.
 */

const popupData = {
    privacy: {
        title: "Privacy Policy",
        content: `
            <div class="space-y-4">
                <h3 class="text-xl font-bold text-slate-900">Hamari Privacy Policy</h3>
                <p class="text-slate-600">Sainfoxiya aapke data ki security ko priority deta hai. Hum aapke business data ko third parties ke saath kabhi share nahi karte.</p>
                <ul class="list-disc pl-5 space-y-2 text-slate-600">
                    <li>Data encryption (SSL) se safe rehta hai.</li>
                    <li>Orders aur transaction details 100% private rehti hain.</li>
                    <li>Hum sirf wahi info lete hain jo legal verification ke liye zaruri hai.</li>
                </ul>
                <p class="text-sm text-slate-400 italic mt-6">Last Updated: February 2024</p>
            </div>
        `
    },
    help: {
        title: "Help Centre",
        content: `
            <div class="space-y-4">
                <h3 class="text-xl font-bold text-slate-900">How can we help you?</h3>
                <div class="grid gap-4">
                    <div class="p-4 bg-slate-50 rounded-xl">
                        <h4 class="font-bold text-blue-600">Order Delay Issues?</h4>
                        <p class="text-sm text-slate-600">Agar aapka code 5 min tak nahi aaya, toh dashboard mein 'Track Order' karein.</p>
                    </div>
                    <div class="p-4 bg-slate-50 rounded-xl">
                        <h4 class="font-bold text-blue-600">API Integration</h4>
                        <p class="text-sm text-slate-600">Hamara API documentation portal separately available hai approved partners ke liye.</p>
                    </div>
                </div>
            </div>
        `
    },
    merchant: {
        title: "Merchant Login",
        content: `
            <div class="text-center py-8">
                <i class="fas fa-user-lock text-5xl text-blue-600 mb-6"></i>
                <h3 class="text-2xl font-bold mb-4">Merchant Dashboard</h3>
                <p class="text-slate-600 mb-6">Apne B2B business ko manage karne ke liye sign-in karein.</p>
                <div class="space-y-4 max-w-sm mx-auto">
                    <input type="text" placeholder="Merchant ID" class="w-full p-4 rounded-xl border border-slate-200">
                    <input type="password" placeholder="Password" class="w-full p-4 rounded-xl border border-slate-200">
                    <button class="w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg">Login Now</button>
                </div>
            </div>
        `
    },
    sales: {
        title: "Contact Sales",
        content: `
            <div class="space-y-6">
                <h3 class="text-2xl font-bold text-slate-900">Bulk Sales Queries</h3>
                <p class="text-slate-600">Agar aap ₹5,00,000+ per month ki volume handle kar sakte hain, toh humse direct baat karein special rates ke liye.</p>
                <div class="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                    <p class="font-bold text-blue-900">Official Email:</p>
                    <p class="text-blue-600">sales@sainfoxiya.com</p>
                    <p class="mt-4 font-bold text-blue-900">Response Time:</p>
                    <p class="text-blue-600 text-sm">Under 24 Working Hours</p>
                </div>
            </div>
        `
    },
    whatsapp: {
        title: "WhatsApp Support",
        content: `
            <div class="text-center py-6">
                <i class="fab fa-whatsapp text-6xl text-green-500 mb-6"></i>
                <h3 class="text-2xl font-bold text-slate-900">Instant B2B Chat</h3>
                <p class="text-slate-600 mb-8">Hamare agents live hain support dene ke liye. Codes, topups aur inventory ki help lein.</p>
                <a href="https://wa.me/yournumber" class="inline-block px-10 py-4 bg-green-500 text-white font-bold rounded-full shadow-xl hover:bg-green-600 transition">
                    Open WhatsApp Chat
                </a>
            </div>
        `
    }
};

/**
 * Logic to handle Popups
 */
function openPopup(key) {
    const data = popupData[key];
    if (!data) return;

    const popup = document.getElementById('global-popup');
    const innerContent = document.getElementById('popup-inner-content');

    // Reset scroll of inner content
    innerContent.innerHTML = `
        <h2 class="text-3xl font-bold mb-8 text-slate-900">${data.title}</h2>
        ${data.content}
    `;

    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Stop scrolling background
}

function closePopup() {
    const popup = document.getElementById('global-popup');
    popup.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close popup when clicking outside the box
window.onclick = function(event) {
    const popup = document.getElementById('global-popup');
    if (event.target == popup) {
        closePopup();
    }
}

init3D();


document.getElementById('inquiry-form')?.addEventListener('submit', handleFormSubmit);
