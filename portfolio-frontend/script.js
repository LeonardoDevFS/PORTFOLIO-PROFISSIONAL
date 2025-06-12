document.addEventListener('DOMContentLoaded', () => {

    /**
     * Função para ativar a navegação com scroll e destacar o link ativo.
     */
    const activateNavigationAndScroll = () => {
        const navLinks = document.querySelectorAll('header nav ul li a');
        if (!navLinks.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    const activeLink = document.querySelector(`nav ul li a[href="#${id}"]`);

                    navLinks.forEach(link => link.classList.remove('active'));
                    if(activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }, { rootMargin: '-30% 0px -70% 0px' }); // Ativa quando a seção está no meio da tela

        document.querySelectorAll('.content-section').forEach(section => {
            observer.observe(section);
        });
    };

    /**
     * Função para lidar com o envio do formulário de contato via AJAX.
     * Esta função permanece a mesma, pois é uma funcionalidade de backend.
     */
    const handleContactFormSubmit = () => {
        const contactForm = document.querySelector('#contactForm');
        if (!contactForm) return;

        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const form = e.target;
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            const submitButton = form.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';
            
            // Remove a mensagem de status anterior se existir
            let statusMessageElement = form.querySelector('.form-status-message');
            if (statusMessageElement) {
                statusMessageElement.remove();
            }

            try {
                // A URL para a Netlify Function.
                const backendUrl = '/.netlify/functions/send-email';
                const response = await fetch(backendUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                const result = await response.json();
                
                statusMessageElement = document.createElement('p');
                statusMessageElement.className = 'form-status-message';

                if (response.ok && result.success) {
                    statusMessageElement.textContent = result.message || 'Mensagem enviada com sucesso!';
                    statusMessageElement.style.color = 'var(--accent-blue)';
                    form.reset();
                } else {
                    statusMessageElement.textContent = result.message || 'Ocorreu um erro ao enviar a mensagem.';
                    statusMessageElement.style.color = '#ff8282'; // Cor de erro
                }
                submitButton.insertAdjacentElement('afterend', statusMessageElement);

            } catch (error) {
                console.error('Erro no envio do formulário:', error);
                
                statusMessageElement = document.createElement('p');
                statusMessageElement.className = 'form-status-message';
                statusMessageElement.textContent = 'Erro de conexão. Tente novamente.';
                statusMessageElement.style.color = '#ff8282';
                submitButton.insertAdjacentElement('afterend', statusMessageElement);

            } finally {
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;

                setTimeout(() => {
                    const currentStatus = form.querySelector('.form-status-message');
                    if(currentStatus) currentStatus.remove();
                }, 7000);
            }
        });
    };

    // --- INICIALIZAÇÃO DE TODAS AS FUNÇÕES ---
    activateNavigationAndScroll();
    handleContactFormSubmit();
});