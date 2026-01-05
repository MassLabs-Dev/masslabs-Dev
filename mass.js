// Scroll suave
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Formulário de contato (validação)
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if(nome && email && mensagem){
        alert(`Obrigado, ${nome}! Sua mensagem foi recebida.`);
        form.reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
