document.getElementById('botaoGirassol').addEventListener('click', iniciarAnimacao);

function iniciarAnimacao() {
    const botao = document.getElementById('botaoContainer');
    const girassol = document.getElementById('girassol');
    const textoAnimado = document.getElementById('textoAnimado');
    const cursor = document.querySelector('.cursor');
    const musica = document.getElementById('musica');
    musica.play();
    musica.volume = 0.3
    // Esconder botão
    botao.style.display = 'none';

    // Mostrar girassol
    girassol.classList.add('mostrar');

    // Animação das pétalas
    const petalas = document.querySelectorAll('.petala');
    petalas.forEach((petala, index) => {
        const angulo = petala.dataset.angulo;
        petala.style.setProperty('--angulo', `${angulo}deg`);
        petala.style.animation = `surgir 0.5s ease-out ${index * 0.05}s forwards`;
    });

    // Configurar animação de digitação
    const textoCompleto = "Você é importante para mim, Joana! TE ADORO!";
    let indexDigitacao = 0;
    textoAnimado.textContent = '';
    cursor.style.display = 'inline';

    function digitar() {
        if (indexDigitacao < textoCompleto.length) {
            textoAnimado.textContent += textoCompleto.charAt(indexDigitacao);
            indexDigitacao++;
            setTimeout(digitar, 100);
        } else {
            cursor.style.display = 'none';
        }
    }

    // Iniciar digitação após 1 segundo
    setTimeout(digitar, 600);
}