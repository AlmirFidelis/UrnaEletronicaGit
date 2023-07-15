// ############ VARIÁVEIS PRINCIPAIS ############# //
let numero = document.querySelector('.numero');

let digito1 = document.querySelector('.digito1');
let digito2 = document.querySelector('.digito2');

let telainicial = document.querySelector('.telainicial')
let cliquebranco = document.querySelector('.cliquebranco')
let cliqueconfirma = document.querySelector('.cliqueconfirma')
let invalido = document.querySelector('.invalido')

let diginvalido = document.querySelector('.digito-invalido');

let candidatos = document.querySelector('.candidato')
let candidato1 = `<div class="num-candidato">
<span>SEU VOTO PARA</span>
<P style="text-align: center;"><strong>PRESIDENTE</strong></P><br>
<input type="text" name="digitado" value="2" class="digitado1" maxlength="1" readonly>
<input type="text" name="digitado" value="2" class="digitado2" maxlength="1" readonly>
</div>
<div class="text-candidato">
<p><strong>Nome</strong>: Pica-Pau, o Imperador</p>
<P><strong>Partido</strong>: PM (Partido do MITO)</P>
<p><strong>Slogan</strong>: <i>"Bandido bom é bandido morto!"</i></p>
<p><strong>Vice-presidente</strong>: Zeca Urubu </p>
</div>
<div>
<img class="foto-candidato" src="images/Woody_Woodpecker.png" alt="">
<img class="foto-vice" src="images/Zeca_urubu.png" alt="">
</div>`

let candidato2 = `<div class="num-candidato">
<span>SEU VOTO PARA</span>
<P style="text-align: center;"><strong>PRESIDENTE</strong></P><br>
<input type="text" name="digitado" value="1" class="digitado1" maxlength="1" readonly>
<input type="text" name="digitado" value="5" class="digitado2" maxlength="1" readonly>
</div>
<div class="text-candidato">
<p><strong>Nome</strong>: Piu-Piu, o Rebelde</p>
<P><strong>Partido</strong>: PAB (Partido Anti-Burguês)</P>
<p><strong>Slogan</strong>: <i>"Sempre um passo a frente da lei!"</i></p>
<p><strong>Vice-presidente</strong>: Frajola </p>
</div>
<div>
<img class="foto-candidato" src="images/piu-piu.png" alt="">
<img class="foto-vice" src="images/frajola.png" alt="">
</div>`

let candidato3 = `<div class="num-candidato">
<span>SEU VOTO PARA</span>
<P style="text-align: center;"><strong>PRESIDENTE</strong></P><br>
<input type="text" name="digitado" value="3" class="digitado1" maxlength="1" readonly>
<input type="text" name="digitado" value="0" class="digitado2" maxlength="1" readonly>
</div>
<div class="text-candidato">
<p><strong>Nome</strong>: Naruto, o Entusiasta</p>
<P><strong>Partido</strong>: PTC (Partido Tô Certo)</P>
<p><strong>Slogan</strong>: <i>"Em busca da paz entre as Nações"</i></p>
<p><strong>Vice-presidente</strong>: Kurama </p>
</div>
<div>
<img class="foto-candidato" src="images/naruto.png" alt="">
<img class="foto-vice" src="images/kurama.png" alt="">
</div>`

digito1.style.animation = '';
digito2.style.animation = 'none';

let votoBranco = false;
let votoInvalido = false;
let fim = false;

const beep = new Audio('sounds/beep.mp3');
const music = new Audio('sounds/votacao-finalizada.mp3');

// Funções dos Botões ///////////////////////////////////////////////
function digitar(numero) {

    beep.play();

    if (fim === false && votoBranco === false) {
        if (digito1.value == "" && digito2.value == "") {
            digito1.value = numero;
            digito1.style.animation = 'none';
            digito2.style.animation = '';
        } else if (digito1.value != "" && digito2.value == "") {
            digito2.value = numero;
            digito2.style.animation = 'none';
            
        }
    }
}

function branco() {

    beep.play();

    if (fim === false) {
        if (digito1.value == "" && digito2.value == "") {
            votoBranco = true;
            telainicial.classList.add('sumir');
            cliquebranco.classList.remove('sumir');
        }
    }
}

function corrige() {

    beep.play();
    
    if (fim === false) {
        candidatos.classList.add('sumir');
        cliquebranco.classList.add('sumir');
        invalido.classList.add('sumir');
        telainicial.classList.remove('sumir');
        digito1.value = "";
        digito2.value = "";
        votoBranco = false;
        votoInvalido = false;
    }
}

// Votando /////////////////////////////////////////////////////////
const loop = setInterval(() => {
    if (digito1.value == "2" && digito2.value == "2") {
        telainicial.classList.add('sumir');
        candidatos.classList.remove('sumir');
        candidatos.innerHTML = candidato1;
    }
    else if (digito1.value == "1" && digito2.value == "5") {
        telainicial.classList.add('sumir');
        candidatos.classList.remove('sumir');
        candidatos.innerHTML = candidato2;
    }
    else if (digito1.value == "3" && digito2.value == "0") {
        telainicial.classList.add('sumir');
        candidatos.classList.remove('sumir');
        candidatos.innerHTML = candidato3;    
    } else {
        if (digito1.value != "" && digito2.value != "") {
            votoInvalido = true;
            telainicial.classList.add('sumir');
            invalido.classList.remove('sumir');
            diginvalido.innerHTML = `Você digitou: <strong>${digito1.value}${digito2.value}</strong>`;
            
        } else if (digito1.value == "" && digito2.value == "") {
            digito1.style.animation = '';
        }
    }
}, 10);

function confirma() {
    if (votoBranco === true || votoInvalido === true || digito1.value != "" && digito2.value != "") {
        fim = true
        digito1.value = "";
        digito2.value = "";
        telainicial.classList.add('sumir');
        cliquebranco.classList.add('sumir');
        invalido.classList.add('sumir')

        candidatos.classList.add('sumir')

        cliqueconfirma.classList.remove('sumir')

        music.play();  
    } 
}