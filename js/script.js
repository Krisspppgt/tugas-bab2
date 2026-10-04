/**
 * Script Interaktif - Website Edukasi Privasi Data
 * SMKN 7 - Proyek Pendidikan Kewarganegaraan Digital
 */

// 1. Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking links
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// 2. Data Studi Kasus
const caseStudies = [
    {
        title: "Kasus 1: Doxxing & Kebocoran Nilai di Grup WhatsApp",
        scenario: "Seorang siswa membagikan foto lembar rekapitulasi nilai dan nomor kontak pribadi teman-teman sekelas ke grup publik media sosial tanpa izin, dengan maksud bercanda.",
        dataRisk: "Nomor HP pribadi, Nama Lengkap, Nilai Akademik, Catatan Kedisiplinan Siswa.",
        impact: "Siswa yang bersangkutan mengalami rasa malu, cyberbullying, dan nomor pribadinya dihubungi oleh nomor asing tak dikenal.",
        solution: "Terapkan Pasal 28G (Perlindungan Diri & Rasa Aman). Segera hapus postingan, minta maaf secara terbuka, dan sepakati aturan grup: tidak boleh menyebarkan data pribadi siapapun ke ruang publik tanpa persetujuan.",
        lawRef: "Pasal 28G UUD 1945 & UU PDP (Perlindungan Data Pribadi)",
        icon: "alert-triangle"
    },
    {
        title: "Kasus 2: Penyebaran Foto Tanpa Izin (Consent) Saat Praktikum",
        scenario: "Foto teman sekelas yang sedang tidak siap/tertidur saat jam istirahat laboratorium komputer diambil dan dijadikan bahan meme di akun media sosial anonim sekolah.",
        dataRisk: "Wajah/Citra Pribadi (Biometrik visual), Hak atas kehormatan dan martabat individu.",
        impact: "Merusak rasa nyaman di lingkungan sekolah, memicu perpecahan pertemanan, dan berisiko melanggar hak privasi digital.",
        solution: "Terapkan prinsip 'Consent First' (Persetujuan Dahulu). Sebelum memotret dan mengunggah siapapun, wajib meminta persetujuan pemilik wajah. Pengelola akun wajib menghapus konten jika ada keberatan.",
        lawRef: "Pasal 28E (Kebebasan yang Bertanggung Jawab) & Pasal 28G UUD 1945",
        icon: "camera-off"
    },
    {
        title: "Kasus 3: Berbagi Akun & Password Tugas Bersama",
        scenario: "Satu kelompok tugas membuat satu akun email atau cloud storage bersama dengan password sederhana ('12345678') dan membagikannya ke banyak orang sekaligus.",
        dataRisk: "Akses akun Google Workspace sekolah, tugas kelompok, file pribadi yang tidak sengaja tersimpan.",
        impact: "Akun mudah diretas orang luar, tugas hilang/terhapus tanpa jejak jelas, serta data rahasia kelompok tersebar.",
        solution: "Gunakan fitur kolaborasi resmi (Share dengan izin Edit/View berdasarkan akun masing-masing) daripada membagikan 1 password bersama. Selalu aktifkan 2FA (Verifikasi 2 Langkah).",
        lawRef: "Etika Keamanan Siber & Tata Kelola Informasi Digital",
        icon: "key-round"
    }
];

// Function to render active case
function switchCase(index) {
    const caseData = caseStudies[index];
    const displayContainer = document.getElementById('case-display');
    
    // Update active tab buttons
    for (let i = 0; i < 3; i++) {
        const tab = document.getElementById(`case-tab-${i}`);
        if (tab) {
            if (i === index) {
                tab.className = "case-tab-btn active px-5 py-3 rounded-xl font-bold text-sm transition-all flex items-center space-x-2 bg-[#34d9eb] text-[#07152d] shadow-lg shadow-[#34d9eb]/20";
            } else {
                tab.className = "case-tab-btn px-5 py-3 rounded-xl font-bold text-sm transition-all flex items-center space-x-2 bg-[#0a2245] text-[#d5e7ff] hover:bg-[#0f2c59] border border-blue-900";
            }
        }
    }

    if (displayContainer && caseData) {
        displayContainer.innerHTML = `
            <div class="flex flex-col lg:flex-row gap-8 items-start">
                <div class="lg:w-7/12 space-y-6">
                    <div class="flex items-center space-x-3">
                        <span class="bg-[#34d9eb]/20 text-[#34d9eb] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            ${caseData.lawRef}
                        </span>
                    </div>

                    <h3 class="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                        ${caseData.title}
                    </h3>

                    <div class="bg-[#07152d]/80 border border-blue-800/60 p-5 rounded-2xl">
                        <h4 class="text-xs font-bold text-[#fff1aa] uppercase tracking-wider mb-2 flex items-center space-x-2">
                            <i data-lucide="file-text" class="w-4 h-4 text-[#fff1aa]"></i>
                            <span>Kronologi Kasus</span>
                        </h4>
                        <p class="text-sm text-[#d5e7ff] leading-relaxed">${caseData.scenario}</p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="bg-red-950/30 border border-red-900/40 p-4 rounded-xl">
                            <span class="text-xs font-bold text-red-400 uppercase tracking-wider block mb-1">Data Berisiko:</span>
                            <p class="text-xs text-red-100/90">${caseData.dataRisk}</p>
                        </div>
                        <div class="bg-amber-950/30 border border-amber-900/40 p-4 rounded-xl">
                            <span class="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">Dampak Kerugian:</span>
                            <p class="text-xs text-amber-100/90">${caseData.impact}</p>
                        </div>
                    </div>
                </div>

                <div class="lg:w-5/12 w-full bg-gradient-to-br from-[#07152d] to-[#0d2242] border-2 border-[#34d9eb]/40 p-6 rounded-2xl shadow-xl flex flex-col justify-between">
                    <div>
                        <div class="flex items-center space-x-2 text-[#34d9eb] mb-4">
                            <i data-lucide="shield-check" class="w-6 h-6"></i>
                            <h4 class="text-lg font-bold text-white">Solusi & Respons Bijak</h4>
                        </div>
                        <p class="text-sm text-[#d5e7ff]/90 leading-relaxed mb-6">
                            ${caseData.solution}
                        </p>
                    </div>

                    <div class="bg-[#34d9eb]/10 border border-[#34d9eb]/20 p-4 rounded-xl text-center">
                        <span class="text-xs text-[#34d9eb] font-bold block mb-1">Prinsip Utama:</span>
                        <p class="text-xs text-white">"Baca risiko, pilih respons yang menghargai hak bersama."</p>
                    </div>
                </div>
            </div>
        `;

        // Refresh icons inside dynamic container
        if (window.lucide) {
            lucide.createIcons();
        }
    }
}

// 3. Comparison Mode Controller
function setComparisonMode(mode) {
    const sideView = document.getElementById('side-by-side-view');
    const singleView = document.getElementById('single-toggle-view');
    const sideBtn = document.getElementById('view-side-btn');
    const toggleBtn = document.getElementById('view-toggle-btn');

    if (mode === 'side') {
        sideView.classList.remove('hidden');
        singleView.classList.add('hidden');
        sideBtn.className = "px-5 py-2.5 rounded-xl font-bold text-sm transition-all bg-[#34d9eb] text-[#07152d] flex items-center space-x-2";
        toggleBtn.className = "px-5 py-2.5 rounded-xl font-bold text-sm transition-all text-[#d5e7ff] hover:text-white flex items-center space-x-2";
    } else {
        sideView.classList.add('hidden');
        singleView.classList.remove('hidden');
        toggleBtn.className = "px-5 py-2.5 rounded-xl font-bold text-sm transition-all bg-[#34d9eb] text-[#07152d] flex items-center space-x-2";
        sideBtn.className = "px-5 py-2.5 rounded-xl font-bold text-sm transition-all text-[#d5e7ff] hover:text-white flex items-center space-x-2";
        
        // Initial render single view
        const isChecked = document.getElementById('mode-toggle-checkbox')?.checked || false;
        toggleComparisonState(isChecked);
    }
}

function toggleComparisonState(isAfter) {
    const card = document.getElementById('dynamic-toggle-card');
    if (!card) return;

    if (isAfter) {
        // Render SESUDAH
        card.className = "bg-white rounded-3xl p-8 shadow-2xl text-[#0a2245] transition-all duration-300 border-t-8 border-[#166534]";
        card.innerHTML = `
            <div class="flex items-center justify-between mb-6">
                <span class="bg-[#dcfce7] text-[#166534] px-4 py-1.5 rounded-full font-bold text-sm tracking-wider uppercase flex items-center space-x-1.5">
                    <i data-lucide="check-circle" class="w-4 h-4"></i>
                    <span>SESUDAH</span>
                </span>
                <span class="text-xs text-green-700 font-semibold">Tindakan Bertanggung Jawab</span>
            </div>

            <h3 class="text-2xl font-extrabold text-[#0a2245] mb-4">
                Data dijaga, hak dihormati
            </h3>
            <p class="text-gray-600 text-sm mb-6 leading-relaxed">
                Membangun budaya digital yang saling menghargai privasi dan menjunjung tinggi keamanan bersama.
            </p>

            <ul class="space-y-4 text-sm">
                <li class="flex items-start space-x-3 text-green-950 bg-green-50 p-3.5 rounded-xl border border-green-100">
                    <i data-lucide="shield-check" class="w-5 h-5 text-[#166534] shrink-0 mt-0.5"></i>
                    <span>Selalu meminta izin (consent) sebelum mendokumentasikan & mempublikasikan orang lain.</span>
                </li>
                <li class="flex items-start space-x-3 text-green-950 bg-green-50 p-3.5 rounded-xl border border-green-100">
                    <i data-lucide="shield-check" class="w-5 h-5 text-[#166534] shrink-0 mt-0.5"></i>
                    <span>Menjaga etika privasi: sensor data sensitif saat membagikan bukti informasi.</span>
                </li>
                <li class="flex items-start space-x-3 text-green-950 bg-green-50 p-3.5 rounded-xl border border-green-100">
                    <i data-lucide="shield-check" class="w-5 h-5 text-[#166534] shrink-0 mt-0.5"></i>
                    <span>Menggunakan kata sandi unik, mengaktifkan Verifikasi 2 Langkah (2FA).</span>
                </li>
            </ul>
        `;
    } else {
        // Render SEBELUM
        card.className = "bg-white rounded-3xl p-8 shadow-2xl text-[#0a2245] transition-all duration-300 border-t-8 border-[#a33125]";
        card.innerHTML = `
            <div class="flex items-center justify-between mb-6">
                <span class="bg-[#ffe8e5] text-[#a33125] px-4 py-1.5 rounded-full font-bold text-sm tracking-wider uppercase flex items-center space-x-1.5">
                    <i data-lucide="x-circle" class="w-4 h-4"></i>
                    <span>SEBELUM</span>
                </span>
                <span class="text-xs text-red-700 font-semibold">Tindakan Tanpa Perlindungan</span>
            </div>

            <h3 class="text-2xl font-extrabold text-[#0a2245] mb-4">
                Data dibagikan tanpa berpikir
            </h3>
            <p class="text-gray-600 text-sm mb-6 leading-relaxed">
                Tindakan impulsif di mana privasi diabaikan demi kepraktisan atau konten sesaat.
            </p>

            <ul class="space-y-4 text-sm">
                <li class="flex items-start space-x-3 text-red-950 bg-red-50 p-3.5 rounded-xl border border-red-100">
                    <i data-lucide="alert-circle" class="w-5 h-5 text-[#a33125] shrink-0 mt-0.5"></i>
                    <span>Mengunggah foto dan video teman atau guru tanpa konfirmasi/izin.</span>
                </li>
                <li class="flex items-start space-x-3 text-red-950 bg-red-50 p-3.5 rounded-xl border border-red-100">
                    <i data-lucide="alert-circle" class="w-5 h-5 text-[#a33125] shrink-0 mt-0.5"></i>
                    <span>Menyebarkan screenshot percakapan pribadi/chat grup ke media sosial publik.</span>
                </li>
                <li class="flex items-start space-x-3 text-red-950 bg-red-50 p-3.5 rounded-xl border border-red-100">
                    <i data-lucide="alert-circle" class="w-5 h-5 text-[#a33125] shrink-0 mt-0.5"></i>
                    <span>Menggunakan satu password yang sama & membagikan akses akun tugas bersama.</span>
                </li>
            </ul>
        `;
    }

    if (window.lucide) {
        lucide.createIcons();
    }
}

// 4. Interactive Assessment & Checklist Scoring
function updateChecklistScore() {
    const checkboxes = document.querySelectorAll('.checklist-item');
    const total = checkboxes.length;
    let checkedCount = 0;

    checkboxes.forEach(box => {
        if (box.checked) checkedCount++;
    });

    const score = Math.round((checkedCount / total) * 100);
    const scoreText = document.getElementById('score-text');
    const progressBar = document.getElementById('score-progress-bar');
    const feedbackMsg = document.getElementById('feedback-message');

    if (scoreText) scoreText.innerText = score;
    if (progressBar) progressBar.style.width = `${score}%`;

    if (feedbackMsg) {
        if (score === 0) {
            feedbackMsg.innerText = "Yuk centang checklist di atas untuk mengetahui level perlindungan datamu!";
        } else if (score <= 40) {
            feedbackMsg.innerText = "⚠️ Perlindungan data kamu masih rentan. Mulai aktifkan 2FA dan perhatikan izin saat berbagi konten!";
        } else if (score <= 80) {
            feedbackMsg.innerText = "👍 Bagus! Kebiasaan keamanan digitalmu sudah cukup baik. Tingkatkan lagi di perangkat publik lab!";
        } else {
            feedbackMsg.innerText = "🎉 Luar Biasa! Kamu sudah menerapkan etika & perlindungan privasi digital secara paripurna!";
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    switchCase(0);
});
