var filtro        = document.querySelector("#pesquisa select");
var porUsuario    = document.getElementById("por-usuario");
var porComposicao = document.getElementById("por-composicao");
var pesquisa      = document.querySelector("#pesquisa input");

/*[].slice.call(document.querySelectorAll("h4.titulo a")).map(x => [x.addEventListener("mouseover", function(){
    this.className = "titulo-hover"
}),x.addEventListener("mouseout",function(){
    this.className = "h4.titulo a"
})]);*/

filtro.addEventListener('click', function(){
    pesquisa.placeholder = "Pesquise composições por "+this.options[this.selectedIndex].text
});

porUsuario.addEventListener('click', function(){
    pesquisa.placeholder = "Pesquise usuários";
    filtro.disabled = true;
});

porComposicao.addEventListener('click', function(){
    pesquisa.placeholder = "Pesquise composições por "+filtro.options[filtro.selectedIndex].text
    filtro.disabled = false;
});

var getCss = function(tag){
    return getComputedStyle(tag, null).display
}
var modals = function(){ 
    document.getElementById("entrar").addEventListener('click', function(){
        //if(getCss(document.getElementById("everything")) == 'none'){
            document.getElementById("everything").style.display = 'block';
            document.getElementsByClassName("modal-login")[0].style.display = 'block';
            document.getElementsByClassName("modal-cadastro")[0].style.display = 'none';
            //if(getCss(document.getElementsByClassName("modal-login")[0]) == 'none'){
               
        //}
        //}
    });
    
    document.getElementById("cadastrar").addEventListener('click', function(){
         //if(getCss(document.getElementById("everything")) == 'none'){
            document.getElementById("everything").style.display = 'block';
            document.getElementsByClassName("modal-cadastro")[0].style.display = 'block';
            document.getElementsByClassName("modal-login")[0].style.display = 'none';
            //if(getCss(document.getElementsByClassName("modal-cadastro")[0]) == 'none'){
                
        //}}
    });
    
    document.getElementsByClassName("m-close")[0].addEventListener('click', function(){
            document.getElementsByClassName("modal-login")[0].style.display = 'none';
            document.getElementsByClassName("modal-cadastro")[0].style.display = 'none';
            document.getElementById("everything").style.display = 'none';
    });
    document.getElementsByClassName("m-close")[1].addEventListener('click', function(){
            document.getElementsByClassName("modal-login")[0].style.display = 'none';
            document.getElementsByClassName("modal-cadastro")[0].style.display = 'none';
            document.getElementById("everything").style.display = 'none';
    });
  
};

modals();
