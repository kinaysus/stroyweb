// Инициализация EmailJS (версия 3)
(function () {
    emailjs.init("ALNVoiU1Li7tlwKNf");
    console.log('✅ EmailJS загружен и инициализирован');
})();

let currentService = null;

// Сохраняем оригинальную функцию
const originalShowService = function (serviceNumber) {
    const expandedContent = document.getElementById('expandedContent');
    const cards = document.querySelectorAll('.service-card');

    if (currentService === serviceNumber) {
        expandedContent.classList.remove('active');
        expandedContent.innerHTML = '';
        cards.forEach(card => {
            card.style.display = 'block';
            card.style.transform = 'scale(1)';
        });
        currentService = null;
        return;
    }

    currentService = serviceNumber;

    cards.forEach((card, index) => {
        if (index + 1 !== serviceNumber) {
            card.style.display = 'none';
        } else {
            card.style.display = 'block';
            card.style.transform = 'scale(0.98)';
        }
    });

    let content = '';

    switch (serviceNumber) {
        case 1: // Связаться
            content = `
                <div class="contact-form">
                    <h3 style="margin-bottom: 30px; font-family: 'Sans Serif Collection';">Оставьте заявку на консультацию</h3>
                    <form id="contactForm" onsubmit="submitForm(event); return false;">
                        <div class="form-group">
                            <label>ФИО</label>
                            <input type="text" name="user_name" id="user_name" placeholder="Иванов Иван Иванович" required>
                        </div>
                        <div class="form-group">
                            <label>Номер или почта</label>
                            <input type="text" name="user_contact" id="user_contact" placeholder="+7 (999) 123-45-67 или email@example.com" required>
                        </div>
                        <div class="form-group">
                            <label>Удобная дата и время для звонка</label>
                            <input type="text" name="preferred_time" id="preferred_time" placeholder="Например: 20 апреля, с 14:00 до 17:00" required>
                        </div>
                        <button class="btn-dark" type="submit" style="margin-top: 20px;">Отправить заявку</button>
                    </form>
                    <div class="form-note">
                        ✦ Мы свяжемся с вами сами в указанное время
                    </div>
                </div>
                <div class="back-button-container">
                    <button class="back-button" onclick="resetServices()">Вернуться к выбору</button>
                </div>
            `;
            break;

        case 2: // Соцсети
            content = `
        <h3 style="margin-bottom: 30px; font-family: 'Sans Serif Collection';">Мы в социальных сетях</h3>
        <div class="build-types" style="grid-template-columns: repeat(3, 1fr);">
            <!-- VK -->
            <div class="social-card" onclick="window.open('https://vk.com/', '_blank')">
                <div class="social-icon">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vk.svg" alt="VK" class="social-icon-img">
                </div>
                <div class="social-title">VK</div>
                <div class="social-desc">ВКонтакте — свежие новости и проекты</div>
            </div>
            
            <!-- Telegram -->
            <div class="social-card" onclick="window.open('https://t.me/', '_blank')">
                <div class="social-icon">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/telegram.svg" alt="Telegram" class="social-icon-img">
                </div>
                <div class="social-title">TELEGRAM</div>
                <div class="social-desc">Telegram-канал с акциями и советами</div>
            </div>
            
            <!-- WhatsApp -->
            <div class="social-card" onclick="window.open('https://wa.me/', '_blank')">
                <div class="social-icon">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg" alt="WhatsApp" class="social-icon-img">
                </div>
                <div class="social-title">WHATSAPP</div>
                <div class="social-desc">Быстрая связь в WhatsApp</div>
            </div>
        </div>
        <div class="back-button-container">
            <button class="back-button" onclick="resetServices()">Вернуться к выбору</button>
        </div>
    `;
            break;

        case 3: // Отзывы
            content = `
                <h3 style="margin-bottom: 30px; font-family: 'Sans Serif Collection';">Что говорят наши клиенты</h3>
                <div class="testimonials-carousel">
                    <div class="testimonials-container" id="testimonialsContainer">
                        <div class="testimonial-slide">
                            <div class="testimonial-content">
                                <div class="testimonial-text">"Построили дом за 5 месяцев. Всё чётко по смете, без скрытых платежей. Бригада работала даже в выходные. Очень довольны качеством!"</div>
                                <div class="testimonial-author">Алексей и Мария Петровы</div>
                                <div class="testimonial-project">Дом 180 м², Казань</div>
                            </div>
                        </div>
                        <div class="testimonial-slide">
                            <div class="testimonial-content">
                                <div class="testimonial-text">"Обратились за каркасным домом. Ребята помогли с выбором проекта, всё объяснили. Дом тёплый, счета за отопление радуют. Рекомендую!"</div>
                                <div class="testimonial-author">Сергей Морозов</div>
                                <div class="testimonial-project">Каркасный дом 120 м², Набережные Челны</div>
                            </div>
                        </div>
                        <div class="testimonial-slide">
                            <div class="testimonial-content">
                                <div class="testimonial-text">"Строили дом под ключ. Порадовал индивидуальный подход и внимание к деталям. Через год - ни одной трещины, всё идеально."</div>
                                <div class="testimonial-author">Елена Воронова</div>
                                <div class="testimonial-project">Кирпичный дом 220 м², Альметьевск</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="carousel-controls">
                        <button class="carousel-btn" onclick="prevSlide()">←</button>
                        <button class="carousel-btn" onclick="nextSlide()">→</button>
                    </div>
                    
                    <div class="carousel-dots" id="carouselDots"></div>
                </div>
                <div class="back-button-container">
                    <button class="back-button" onclick="resetServices()">Вернуться к выбору</button>
                </div>
            `;
            break;

        case 4: // Ипотека
            content = `
                <h3 style="margin-bottom: 30px; font-family: 'Sans Serif Collection';">Ипотечный калькулятор</h3>
                <div class="mortgage-calculator">
                    <div class="calculator-input">
                        <label>Стоимость дома (₽)</label>
                        <input type="number" id="housePrice" value="5000000" min="1000000" step="100000">
                    </div>
                    <div class="calculator-input">
                        <label>Первоначальный взнос (₽)</label>
                        <input type="number" id="downPayment" value="1000000" min="0" step="100000">
                    </div>
                    <div class="calculator-input">
                        <label>Срок кредита (лет)</label>
                        <input type="number" id="loanTerm" value="20" min="1" max="30">
                    </div>
                    <div class="calculator-input">
                        <label>Процентная ставка (%)</label>
                        <input type="number" id="interestRate" value="8" min="1" max="30" step="0.1">
                    </div>
                    
                    <button class="btn-dark" onclick="calculateMortgage()">Рассчитать</button>
                    
                    <div class="calculator-result" id="mortgageResult">
                        <div class="result-item">
                            <span class="result-label">Ежемесячный платёж</span>
                            <span class="result-value" id="monthlyPayment">0 ₽</span>
                        </div>
                        <div class="result-item">
                            <span class="result-label">Сумма кредита</span>
                            <span class="result-value" id="loanAmount">0 ₽</span>
                        </div>
                        <div class="result-item">
                            <span class="result-label">Переплата</span>
                            <span class="result-value" id="totalInterest">0 ₽</span>
                        </div>
                    </div>
                </div>
                <div class="back-button-container">
                    <button class="back-button" onclick="resetServices()">Вернуться к выбору</button>
                </div>
            `;
            break;
    }

    expandedContent.innerHTML = content;
    expandedContent.classList.add('active');

    if (serviceNumber === 3) {
        initCarousel();
    }

    if (serviceNumber === 4) {
        calculateMortgage();
    }
};

// Обёртка для showService с проверкой видимости секции
function showService(serviceNumber) {
    // Если открываем форму связи (serviceNumber === 1), проверяем видимость секции
    if (serviceNumber === 1) {
        const contactsSection = document.getElementById('contacts');
        if (contactsSection) {
            const rect = contactsSection.getBoundingClientRect();
            const isVisible = rect.top >= -100 && rect.top <= window.innerHeight - 100;

            if (!isVisible) {
                contactsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                setTimeout(() => {
                    originalShowService(serviceNumber);
                }, 500);
                return;
            }
        }
    }

    originalShowService(serviceNumber);
}

function submitForm(event) {
    event.preventDefault();

    const userName = document.getElementById('user_name').value;
    const userContact = document.getElementById('user_contact').value;
    const preferredTime = document.getElementById('preferred_time').value;

    if (!userName || !userContact || !preferredTime) {
        alert('Пожалуйста, заполните все поля');
        return false;
    }

    const templateParams = {
        from_name: userName,
        contact_info: userContact,
        preferred_time: preferredTime,
        to_email: 'sorabeatsoff@gmail.com'
    };

    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Отправка...';
    submitBtn.disabled = true;

    // Используйте ВАШ Service ID и Template ID
    emailjs.send('service_d6hw4qw', 'template_xjrfzab', templateParams)
        .then(function (response) {
            alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в указанное время.');
            document.getElementById('contactForm').reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;

            setTimeout(() => {
                showService(1);
            }, 1500);

        }, function (error) {
            console.log('Ошибка:', error);
            alert('Ошибка отправки. Пожалуйста, попробуйте позже или позвоните нам.');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });

    return false;
}

// Функции для карусели
let currentSlide = 0;
let totalSlides = 3;

function initCarousel() {
    currentSlide = 0;
    totalSlides = document.querySelectorAll('.testimonial-slide').length;
    updateCarousel();
    createDots();
}

function updateCarousel() {
    const container = document.getElementById('testimonialsContainer');
    if (container) {
        container.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateDots();
    }
}

function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateCarousel();
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - 1;
    }
    updateCarousel();
}

function createDots() {
    const dotsContainer = document.getElementById('carouselDots');
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot' + (i === currentSlide ? ' active' : '');
            dot.onclick = () => {
                currentSlide = i;
                updateCarousel();
            };
            dotsContainer.appendChild(dot);
        }
    }
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function calculateMortgage() {
    const price = parseFloat(document.getElementById('housePrice')?.value) || 5000000;
    const down = parseFloat(document.getElementById('downPayment')?.value) || 1000000;
    const years = parseFloat(document.getElementById('loanTerm')?.value) || 20;
    const rate = parseFloat(document.getElementById('interestRate')?.value) || 8;

    const loanAmount = price - down;
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;

    let monthlyPayment = 0;
    if (monthlyRate > 0) {
        monthlyPayment = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
    } else {
        monthlyPayment = loanAmount / months;
    }

    const totalPayment = monthlyPayment * months;
    const totalInterest = totalPayment - loanAmount;

    const monthlyEl = document.getElementById('monthlyPayment');
    const loanEl = document.getElementById('loanAmount');
    const interestEl = document.getElementById('totalInterest');

    if (monthlyEl) monthlyEl.textContent = Math.round(monthlyPayment).toLocaleString() + ' ₽';
    if (loanEl) loanEl.textContent = Math.round(loanAmount).toLocaleString() + ' ₽';
    if (interestEl) interestEl.textContent = Math.round(totalInterest).toLocaleString() + ' ₽';
}

// Плавная прокрутка к секции
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Прокрутка к контактам и открытие формы
// Прокрутка к контактам и открытие вкладки СОЦСЕТИ
function scrollToContacts() {
    const contactsSection = document.getElementById('contacts');
    if (contactsSection) {
        contactsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Закрываем текущий открытый блок если есть
        if (currentService !== null) {
            const expandedContent = document.getElementById('expandedContent');
            const cards = document.querySelectorAll('.service-card');
            expandedContent.classList.remove('active');
            expandedContent.innerHTML = '';
            cards.forEach(card => {
                card.style.display = 'block';
                card.style.transform = 'scale(1)';
            });
            currentService = null;
        }

        // Открываем вкладку "Соцсети" (serviceNumber === 2)
        setTimeout(() => {
            showService(2);
        }, 500);
    }
}

// Обработчики событий при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
    // Обработка ссылок навигации
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const href = this.getAttribute('href');

            if (href === '#projects') {
                scrollToSection('projects');
            } else if (href === '#about') {
                scrollToSection('about');
            } else if (href === '#contacts') {
                scrollToContacts();
            }
        });
    });

    // Проверяем хеш при загрузке страницы
    if (window.location.hash) {
        setTimeout(() => {
            const hash = window.location.hash;
            if (hash === '#contacts') {
                scrollToContacts();
            } else {
                scrollToSection(hash.substring(1));
            }
        }, 100);
    }
});

// Функция сброса - возврат ко всем карточкам
function resetServices() {
    const expandedContent = document.getElementById('expandedContent');
    const cards = document.querySelectorAll('.service-card');

    expandedContent.classList.remove('active');
    expandedContent.innerHTML = '';

    cards.forEach(card => {
        card.style.display = 'block';
        card.style.transform = 'scale(1)';
    });

    currentService = null;
}

// Инициализация AOS
AOS.init({ once: true });