var num1 = document.querySelector('.campo1');
var num2 = document.querySelector('.campo2');
var nome = document.querySelector('.nome');
var partido = document.querySelector('.partido');
var img = document.querySelector('.img');
var btnBranco = document.querySelector('.btnBranco');
var btnCorrigir = document.querySelector('.btnCorrigir');
var btnConfirmar = document.querySelector('.btnConfirmar');
var container = document.querySelector('.container');
var confirmar = document.querySelector('.confirmar');
var votoBrancoMsg = document.querySelector('.votoBranco');
var info = document.querySelector('.info');
var votos = 0;
var votosBranco = 0;



function inserir(num) {
    
    if (!num1.value) {
        num1.value = num;
    
    } else if (!num2.value) {
        num2.value = num;
    }
    candidatos(num1, num2);
}

function candidatos(n1, n2) {
    let voto = n1.value + n2.value;

    if (voto == '13') {
        nome.innerHTML = 'Luiz Inácio (Lula)';
        partido.innerHTML = 'PT'
        img.style.background = "url('img/lula.jpg') no-repeat";
        img.style.backgroundSize = 'cover';
        
        
    } else if (voto == '22') {
        nome.innerHTML = 'Jair Bolsonaro';
        partido.innerHTML = 'PL';
        img.style.background = "url('img/bozo.jpg') no-repeat";
        img.style.backgroundSize = 'cover';

    } else if (voto == '12') {
        nome.innerHTML = 'Ciro Gomes';
        partido.innerHTML = 'PDT';
        img.style.background = "url('img/ciro-gomes.jpg') no-repeat center";
        img.style.backgroundSize = 'cover';

    } else if (voto == '15') {
        nome.innerHTML = 'Simone Tebet';
        partido.innerHTML = 'MDB';
        img.style.background = "url('img/simone.jpg') no-repeat center";
        img.style.backgroundSize = 'cover';

    } else if (voto == '27') {
        nome.innerHTML = 'Eymael';
        partido.innerHTML = 'DC';
        img.style.background = "url('img/eymael.jpg') no-repeat center";
        img.style.backgroundSize = 'cover';

    } else if (voto == '44') {
        nome.innerHTML = 'Soraya Thronicke';
        partido.innerHTML = 'União Brasil';
        img.style.background = "url('img/soraya.jpg') no-repeat center";
        img.style.backgroundSize = 'cover';

    } else if (voto == '21') {
        nome.innerHTML = 'Sofia Manzano';
        partido.innerHTML = 'PCB';
        img.style.background = "url('img/sofia.jpg') no-repeat center";
        img.style.backgroundSize = 'cover';

    } else if (voto == '30') {
        nome.innerHTML = "Luiz Felipe D'Avila";
        partido.innerHTML = 'Novo';
        img.style.background = "url('img/luiz.jpg') no-repeat center";
        img.style.backgroundSize = 'cover';

    } else if (voto == '16') {
        nome.innerHTML = 'Vera Lúcia';
        partido.innerHTML = 'PSTU';
        img.style.background = "url('img/vera.jpg') no-repeat center";
        img.style.backgroundSize = 'cover';

    } else if (voto == '90') {
        nome.innerHTML = 'Pablo Marçal';
        partido.innerHTML = 'Pros';
        img.style.background = "url('img/pablo.jpg') no-repeat center";
        img.style.backgroundSize = 'cover';

    } else if (voto == '80') {
        nome.innerHTML = 'Leonardo Péricles';
        partido.innerHTML = 'UP';
        img.style.background = "url('img/leonardo.jpg') no-repeat center";
        img.style.backgroundSize = 'cover';
    }
    
}

function votar() {
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);
    let candidato = (n1 * 10) + n2;
    
    if(sessionStorage.getItem(candidato) !== null) {
        votos = Number(sessionStorage.getItem(candidato)) + 1;
        sessionStorage.setItem(candidato, votos);
    } else {
        sessionStorage.setItem(candidato, 1);
    }

    alert('Voto confirmado no candidato ' + candidato);
    limpa();

}
function limpa() {
    num1.value = "";
    num2.value = "";
    img.style.background = "";
    nome.innerHTML = "";
    partido.innerHTML = "";
}

btnConfirmar.onclick = function() {
    // container.style.display = 'none';
    // confirmar.style.display = 'block';

    votar(num1, num2);
    

}

function resultado() {
    document.querySelector('.resultado').innerHTML = "";
    document.querySelector(".resultado").innerHTML += "Votos em branco " + sessionStorage.getItem(0) + "<br/>"; 
    
    for(let i = 1; i < 100; i++) {
        if (sessionStorage.getItem(i) !== null) {
            document.querySelector(".resultado").innerHTML += "Candidato "+i+" tem "+sessionStorage.getItem(i)+" votos<br/>";
            
        } 
    }
    
}


btnBranco.onclick = function() {
    let candidato = 0;

    if(sessionStorage.getItem(candidato) !== null){
        votosBranco = Number(sessionStorage.getItem(candidato)) + 1;
        sessionStorage.setItem(candidato, votosBranco);
        console.log(votosBranco);
    } else {
        sessionStorage.setItem(candidato, 1);

    }

    info.style.display = 'none';
    votoBrancoMsg.style.display = 'block'; 
    
    
}

   
