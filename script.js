// let button = document.getElementById('no');
// let height = window.innerHeight - 50;
// let width = window.innerWidth - 50;

// button.addEventListener('mouseover', function () {
//     button.style.position = "absolute"
//     button.style.top = Math.random() * height + "px";
//     button.style.left = Math.random() * width + "px";
// })

let button = document.getElementById('no');

// Função para mover o botão, garantindo que ele fique dentro da tela
function moveButton() {
    // Obtém as dimensões da janela visível
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;

    // Obtém as dimensões do botão
    let buttonHeight = button.offsetHeight;
    let buttonWidth = button.offsetWidth;

    // Calcula a nova posição, garantindo que o botão não ultrapasse as bordas
    let newTop = Math.random() * (windowHeight - buttonHeight);
    let newLeft = Math.random() * (windowWidth - buttonWidth);

    // Define a nova posição do botão, sem que ele ultrapasse as bordas
    button.style.position = "fixed"; // Usa 'fixed' para que o botão seja relativo à viewport
    button.style.top = `${newTop}px`;
    button.style.left = `${newLeft}px`;
}

// Adiciona o evento de mouseover ao botão
button.addEventListener('mouseover', moveButton);
