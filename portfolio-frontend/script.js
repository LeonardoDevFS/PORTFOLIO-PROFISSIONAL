/**
 * Adiciona os listeners de evento quando o conteúdo do DOM estiver totalmente carregado.
 */
document.addEventListener('DOMContentLoaded', () => {

    // --- CHAMADA DAS FUNÇÕES PRINCIPAIS ---
    initializeActiveNavOnScroll();
    initializeContactFormHandler();

});


/**
 * @function initializeActiveNavOnScroll
 * @description Observa as seções da página e destaca o link de navegação correspondente quando ele está visível na tela.
 */
const initializeActiveNavOnScroll = () => {
    const navLinks = document.querySelectorAll('header nav ul li a');
    if (!navLinks.length) return; // Se não houver links, não faz nada.

    // Opções para o IntersectionObserver:
    // rootMargin define uma "margem" na viewport. O link se torna ativo quando
    // a seção entra numa área que começa a 30% do topo e termina a 70% do topo da tela.
    // Isso faz com que o link seja ativado quando a seção está mais centralizada.
    const observerOptions = {
        rootMargin: '-30% 0px -70% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Se a seção está "intersectando" a área definida no rootMargin...
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                const activeLink = document.querySelector(`nav ul li a[href="#${id}"]`);

                // Remove a classe 'active' de todos os links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Adiciona a classe 'active' apenas no link correspondente
                if(activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    // Aplica o observador a todas as seções de conteúdo.
    document.querySelectorAll('.content-section').forEach(section => {
        observer.observe(section);
    });
};


/**
 * @function initializeContactFormHandler
 * @description Gerencia o envio do formulário de contato, comunicando-se com a função serverless da Netlify.
 */
const initializeContactFormHandler = () => {
    const contactForm = document.querySelector('#contactForm');
    if (!contactForm) return; // Se não houver formulário, não faz nada.

    contactForm.addEventListener('submit', async (e) => {
        // 1. Previne o comportamento padrão de recarregar a página.
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // 2. Prepara o botão para o estado de "enviando".
        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';
        
        // 3. Remove mensagens de status de envios anteriores.
        let statusMessageElement = form.querySelector('.form-status-message');
        if (statusMessageElement) {
            statusMessageElement.remove();
        }

        try {
            // 4. Faz a requisição POST para a Netlify Function.
            const backendUrl = '/.netlify/functions/send-email';
            const response = await fetch(backendUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            
            // 5. Cria e exibe a mensagem de status (sucesso ou erro).
            statusMessageElement = document.createElement('p');
            statusMessageElement.className = 'form-status-message';

            if (response.ok && result.success) {
                statusMessageElement.textContent = result.message || 'Mensagem enviada com sucesso!';
                statusMessageElement.style.color = 'var(--accent-blue)';
                form.reset(); // Limpa o formulário em caso de sucesso.
            } else {
                statusMessageElement.textContent = result.message || 'Ocorreu um erro ao enviar a mensagem.';
                statusMessageElement.style.color = '#ff8282'; // Cor de erro.
            }
            submitButton.insertAdjacentElement('afterend', statusMessageElement);

        } catch (error) {
            // 6. Lida com erros de conexão ou outros problemas na requisição.
            console.error('Erro no envio do formulário:', error);
            
            statusMessageElement = document.createElement('p');
            statusMessageElement.className = 'form-status-message';
            statusMessageElement.textContent = 'Erro de conexão. Tente novamente.';
            statusMessageElement.style.color = '#ff8282';
            submitButton.insertAdjacentElement('afterend', statusMessageElement);

        } finally {
            // 7. Restaura o botão ao seu estado original.
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;

            // 8. Remove a mensagem de status após 7 segundos.
            setTimeout(() => {
                const currentStatus = form.querySelector('.form-status-message');
                if(currentStatus) currentStatus.remove();
            }, 7000);
        }
    });
};