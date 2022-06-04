function carregarModo() {
	carregarClasses();
	carregarText();
}

function carregarClasses() {
	botao.classList.toggle(classeModoEscuro);
	h1.classList.toggle(classeModoEscuro);
	body.classList.toggle(classeModoEscuro);
	footer.classList.toggle(classeModoEscuro);
}

function carregarText() {
	const modoClaro = 'Modo Claro';
	const modoEscuro = 'Modo Escuro';

	if (body.classList.contains(classeModoEscuro)) {
		botao.innerHTML = modoClaro;
		h1.innerHTML = modoEscuro + ' ON';
		return;
	}

	botao.innerHTML = modoEscuro;
	h1.innerHTML = modoClaro + ' ON';
}

const classeModoEscuro = 'modo-escuro';
const botao = document.getElementById('modo-seletor');
const h1 = document.getElementById('titulo-pagina');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

botao.addEventListener('click', carregarModo);
