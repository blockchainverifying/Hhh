/**
 * SAINFOXIYA - Global Data Store for Footers & Popups
 * This file contains the dynamic content for various website sections.
 */

const popupData = {
    privacy: {
        title: "Privacy Policy",
        content: `
            <div class="space-y-6 text-slate-600 leading-relaxed">
                <section>
                    <h3 class="text-xl font-bold text-slate-900 mb-2">1. Data Collection</h3>
                    <p>We collect essential business information, including company names, professional email addresses, and transaction history, solely to provide and improve our B2B gift card services.</p>
                </section>
                <section>
                    <h3 class="text-xl font-bold text-slate-900 mb-2">2. Security Standards</h3>
                    <p>All transactions and data exchanges are protected by 256-bit SSL encryption. We implement industry-leading firewall protections to ensure your business inventory and financial records remain confidential.</p>
                </section>
                <section>
                    <h3 class="text-xl font-bold text-slate-900 mb-2">3. Third-Party Disclosure</h3>
                    <p>Sainfoxiya strictly prohibits the sale or unauthorized sharing of partner data with third-party advertisers. Information is only shared with financial institutions or brand partners when necessary to fulfill your specific orders.</p>
                </section>
                <section>
                    <h3 class="text-xl font-bold text-slate-900 mb-2">4. User Rights</h3>
                    <p>Partners may request access to their stored data or account deletion at any time through their dedicated account manager.</p>
                </section>
                <p class="text-xs text-slate-400 border-t pt-4">© 2024 SAINFOXIYA | All Rights Reserved. Last Updated: Feb 2024</p>
            </div>
        `
    },
    help: {
        title: "Help Centre",
        content: `
            <div class="space-y-6">
                <p class="text-slate-600">Find quick solutions to common B2B queries regarding our distribution infrastructure.</p>
                <div class="grid gap-4">
                    <div class="p-5 bg-blue-50 rounded-2xl border border-blue-100">
                        <h4 class="font-bold text-blue-800 mb-1">Transaction Status "Pending"?</h4>
                        <p class="text-sm text-slate-600">Most codes are delivered within 30 seconds. If a transaction remains pending for over 5 minutes, it may be undergoing manual compliance review for bulk security.</p>
                    </div>
                    <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                        <h4 class="font-bold text-slate-800 mb-1">Regional Lock Issues</h4>
                        <p class="text-sm text-slate-600">Please ensure the gift card region (INR/USD/AED) matches your end-customer's account. We do not offer refunds for regional mismatch once the code is exposed.</p>
                    </div>
                    <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                        <h4 class="font-bold text-slate-800 mb-1">API Integration Support</h4>
                        <p class="text-sm text-slate-600">Our technical team is available 10 AM - 8 PM IST for API troubleshooting and sandbox environment setup.</p>
                    </div>
                </div>
                <div class="text-center mt-4">
                    <p class="text-sm text-slate-500 font-medium italic">Still need help? Please reach out to your dedicated account manager.</p>
                </div>
            </div>
        `
    },
    merchant: {
        title: "Merchant Access",
        content: `
            <div class="text-center py-6">
                <div class="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i class="fas fa-university text-3xl"></i>
                </div>
                <h3 class="text-2xl font-bold mb-2">Merchant Terminal</h3>
                <p class="text-slate-600 mb-8">Access your wholesale inventory and transaction ledger.</p>
                <div class="space-y-4 max-w-sm mx-auto">
                    <div class="text-left">
                        <label class="text-xs font-bold text-slate-400 uppercase ml-2">Username</label>
                        <input type="text" placeholder="Admin ID" class="w-full p-4 mt-1 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none">
                    </div>
                    <div class="text-left">
                        <label class="text-xs font-bold text-slate-400 uppercase ml-2">Password</label>
                        <input type="password" placeholder="••••••••" class="w-full p-4 mt-1 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none">
                    </div>
                    <button class="w-full py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg hover:bg-black transition mt-4">Secure Login</button>
                    <p class="text-xs text-slate-400 mt-4">Unauthorized access attempt is logged and tracked via IP.</p>
                </div>
            </div>
        `
    },
    sales: {
        title: "Contact Sales",
        content: `
            <div class="space-y-6">
                <div class="p-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl text-white">
                    <h3 class="text-xl font-bold mb-2">Scale Your Business</h3>
                    <p class="text-blue-100 text-sm">For high-volume distribution (₹10L+ monthly), we offer customized API pricing and credit lines.</p>
                </div>
                <div class="grid gap-4">
                    <div class="flex items-center gap-4 p-4 border border-slate-100 rounded-2xl">
                        <div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
                            <i class="fas fa-envelope-open-text"></i>
                        </div>
                        <div>
                            <p class="text-xs text-slate-400 font-bold uppercase">Wholesale Dept</p>
                            <p class="font-bold text-slate-800">sales@sainfoxiya.com</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 p-4 border border-slate-100 rounded-2xl">
                        <div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div>
                            <p class="text-xs text-slate-400 font-bold uppercase">Business Hours</p>
                            <p class="font-bold text-slate-800">Mon - Sat | 10:00 - 20:00 IST</p>
                        </div>
                    </div>
                </div>
                <button onclick="openPopup('whatsapp')" class="w-full py-4 bg-slate-100 text-slate-900 font-bold rounded-2xl hover:bg-slate-200 transition">Speak to a Consultant</button>
            </div>
        `
    },
    whatsapp: {
        title: "WhatsApp B2B Support",
        content: `
            <div class="text-center py-6">
                <div class="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i class="fab fa-whatsapp text-5xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-slate-900 mb-2">Live Support Line</h3>
                <p class="text-slate-600 mb-8 max-w-xs mx-auto">Connect with our support team for instant inventory updates and order assistance.</p>
                
                <a href="https://wa.me/919411917035?text=Hi%20i%20am%20looking%20for%20Gift%20Cards" 
                   target="_blank"
                   class="inline-flex items-center gap-3 px-10 py-4 bg-green-500 text-white font-bold rounded-full shadow-xl hover:bg-green-600 hover:scale-105 transition-all duration-300">
                    <i class="fab fa-whatsapp text-xl"></i>
                    Chat Now on WhatsApp
                </a>
                
                <p class="mt-8 text-sm font-bold text-slate-400">Response time: &lt; 2 Minutes</p>
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

    // Reset scroll and inject content
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
