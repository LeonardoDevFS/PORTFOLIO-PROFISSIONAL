// portfolio-frontend/script.js

document.addEventListener('DOMContentLoaded', () => {

    /**
     * Função para Animação de Rolagem (Reveal on Scroll)
     */
    const revealOnScroll = () => {
        const elementsToReveal = document.querySelectorAll('.reveal-on-scroll');
        if (!elementsToReveal.length) return;

        const revealOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 
        };

        const revealCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    
                    // Interação com o carrossel para aplicar zoom no card ativo ao ser revelado
                    if (entry.target.classList.contains('project-card') && entry.target.closest('.projects-carousel-track')) {
                        const track = entry.target.closest('.projects-carousel-track');
                        // Presume-se que o track armazena o currentIndex em um dataset
                        const activeCardIndex = parseInt(track.dataset.currentIndex || "0"); 
                        const cardsInTrack = Array.from(track.children);
                        
                        if(cardsInTrack.indexOf(entry.target) === activeCardIndex && entry.target.classList.contains('is-visible')) {
                            // Adia um pouco para garantir que a transição do revealOnScroll não conflite com o zoom
                            setTimeout(() => {
                                entry.target.classList.add('is-active-project');
                            }, 50); 
                        }
                    }
                    observer.unobserve(entry.target);
                }
            });
        };
        const observer = new IntersectionObserver(revealCallback, revealOptions);
        elementsToReveal.forEach(element => observer.observe(element));
    };

    /**
     * Função para ativar a navegação com scroll suave e destacar o link ativo.
     */
    const activateNavigationAndScroll = () => {
        const navLinks = document.querySelectorAll('header nav ul li a');
        const sections = document.querySelectorAll('main section[id]');
        if (!navLinks.length || !sections.length) return;

        const headerElement = document.querySelector('header');
        const headerHeight = headerElement ? headerElement.offsetHeight : 70;

        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                try {
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        const targetPosition = targetSection.offsetTop - headerHeight;
                        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                    }
                } catch (error) { console.error("Erro ao encontrar seção para scroll:", targetId, error); }
            });
        });

        const onScroll = () => {
            let currentSectionId = '';
            const scrollPosition = window.scrollY;

            sections.forEach(section => {
                const sectionTop = section.offsetTop - headerHeight - 50; // Buffer
                if (scrollPosition >= sectionTop) {
                    currentSectionId = '#' + section.id;
                }
            });

            if (sections.length > 0 && sections[0] && scrollPosition < (sections[0].offsetTop - headerHeight - 50)) {
                 currentSectionId = '#' + sections[0].id;
            } else if (sections.length > 0 && (window.innerHeight + scrollPosition) >= document.body.offsetHeight - 50) {
                currentSectionId = '#' + sections[sections.length - 1].id;
            }

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === currentSectionId) {
                    link.classList.add('active');
                }
            });
        };
        
        window.addEventListener('scroll', onScroll);
        onScroll(); // Define o link ativo inicial
    };

    /**
     * Função para lidar com o envio do formulário de contato via AJAX.
     */
    const handleContactFormSubmit = () => {
        const contactForm = document.querySelector('#contato form'); 
        if (!contactForm) {
            return;
        }

        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const form = e.target;
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => data[key] = value);

            let statusMessageElement = form.querySelector('.form-status-message');
            if (!statusMessageElement) {
                statusMessageElement = document.createElement('p');
                statusMessageElement.className = 'form-status-message';
                const submitButtonEl = form.querySelector('button[type="submit"]');
                // Insere a mensagem de status após o botão de envio
                if (submitButtonEl && submitButtonEl.parentNode) {
                    submitButtonEl.parentNode.insertBefore(statusMessageElement, submitButtonEl.nextSibling);
                } else { // Fallback caso o botão não seja encontrado ou não tenha pai
                    form.appendChild(statusMessageElement);
                }
            }
            statusMessageElement.textContent = ''; // Limpa mensagem anterior

            const submitButton = form.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';

            try {
                const backendUrl = 'http://localhost:3000/send-email';
                const response = await fetch(backendUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                const result = await response.json();

                if (response.ok && result.success) {
                    statusMessageElement.textContent = result.message || 'Mensagem enviada com sucesso! Obrigado.';
                    statusMessageElement.style.color = 'green';
                    form.reset();
                } else {
                    statusMessageElement.textContent = result.message || 'Ocorreu um erro ao enviar a mensagem.';
                    statusMessageElement.style.color = 'red';
                }
            } catch (error) {
                console.error('Erro no envio do formulário:', error);
                statusMessageElement.textContent = 'Erro de conexão. Verifique sua internet e se o servidor está rodando.';
                statusMessageElement.style.color = 'red';
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
                setTimeout(() => {
                    if (statusMessageElement && form.contains(statusMessageElement)) {
                        statusMessageElement.textContent = ''; 
                    }
                }, 7000);
            }
        });
    };

    /**
     * Função para controlar o Carrossel de Projetos com Zoom no Card Ativo
     */
    const setupProjectCarousel = () => {
        const track = document.querySelector('.projects-carousel-track');
        const nextButton = document.querySelector('.carousel-button.next');
        const prevButton = document.querySelector('.carousel-button.prev');
        const viewport = document.querySelector('.project-carousel-viewport');

        if (!track || !nextButton || !prevButton || !viewport || !track.children.length) {
            if(nextButton) nextButton.style.display = 'none';
            if(prevButton) prevButton.style.display = 'none';
            return;
        }
        
        const cards = Array.from(track.children);
        let cardFullWidth = 0;
        let currentIndex = 0; // Índice do card que estará alinhado à esquerda da viewport
        let cardsToScrollAtOnce = 1; // Quantos "cards lógicos" o carrossel avança

        const updateCardVisualState = () => {
            if (!cards.length) return;
            cards.forEach((card, index) => {
                // O card "ativo" para o zoom é o que está no currentIndex
                if (index === currentIndex) {
                    // Adia a aplicação da classe ativa se o card ainda não foi revelado pelo scroll
                    // Isso previne que o zoom aconteça antes do card estar visível pela animação de entrada.
                    if (card.classList.contains('is-visible')) {
                        card.classList.add('is-active-project');
                    } else {
                        // Se não está visível ainda, remove para evitar zoom prematuro
                        card.classList.remove('is-active-project'); 
                    }
                } else {
                    card.classList.remove('is-active-project');
                }
            });
            track.dataset.currentIndex = currentIndex.toString(); // Salva o currentIndex para uso no revealOnScroll
        };

        const calculateDimensions = () => {
            if (!cards.length) return;
            const cardStyle = window.getComputedStyle(cards[0]);
            const cardWidth = cards[0].offsetWidth; 
            const cardMarginRight = parseInt(cardStyle.marginRight) || 0;
            cardFullWidth = cardWidth + cardMarginRight;

            // Define quantos cards lógicos rolar por vez (simplificado para 1)
            cardsToScrollAtOnce = 1; 
        };
        
        const moveToCard = (targetLogicalIndex) => {
            if (!cards.length || cardFullWidth === 0) return;

            let effectiveCardsPerPage = Math.floor(viewport.offsetWidth / cardFullWidth);
            if (effectiveCardsPerPage <= 0) effectiveCardsPerPage = 1; 

            const lastPossibleStartingCardIndex = Math.max(0, cards.length - effectiveCardsPerPage);
            targetLogicalIndex = Math.max(0, Math.min(targetLogicalIndex, lastPossibleStartingCardIndex));
            
            const newPosition = targetLogicalIndex * cardFullWidth;
            track.style.transform = `translateX(-${newPosition}px)`;
            currentIndex = targetLogicalIndex;
            
            updateButtonStates();
            updateCardVisualState(); 
        };

        const updateButtonStates = () => {
            if (!cards.length || cardFullWidth === 0) {
                prevButton.disabled = true;
                nextButton.disabled = true;
                prevButton.style.display = 'none';
                nextButton.style.display = 'none';
                return;
            }
            
            let effectiveCardsPerPage = Math.floor(viewport.offsetWidth / cardFullWidth);
            if (effectiveCardsPerPage <= 0) effectiveCardsPerPage = 1;

            const isAtStart = currentIndex === 0;
            const isAtEnd = currentIndex >= (cards.length - effectiveCardsPerPage);

            prevButton.disabled = isAtStart;
            nextButton.disabled = isAtEnd;

            if (cards.length <= effectiveCardsPerPage) {
                prevButton.style.display = 'none';
                nextButton.style.display = 'none';
            } else {
                prevButton.style.display = 'block';
                nextButton.style.display = 'block';
            }
        };
        
        nextButton.addEventListener('click', () => {
            moveToCard(currentIndex + cardsToScrollAtOnce);
        });

        prevButton.addEventListener('click', () => {
            moveToCard(currentIndex - cardsToScrollAtOnce);
        });

        window.addEventListener('resize', () => {
            calculateDimensions();
            moveToCard(currentIndex); 
        });

        // Inicialização
        calculateDimensions();
        moveToCard(0); 
    };

    // Inicializa todas as funcionalidades
    revealOnScroll();
    activateNavigationAndScroll();
    handleContactFormSubmit();
    setupProjectCarousel(); 
});