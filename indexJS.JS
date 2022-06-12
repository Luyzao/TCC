function init(){
    var cabecalho = document.querySelector('.cabecalho')
    var cabecalhoOffset = cabecalho.offsetTop;


    function verifiCabecalho(){
        var scrollTop = window.scrollY;
        var cabecalhoAltura = cabecalho.offsetHeight;

        if (scrollTop >= cabecalhoOffset){

            cabecalho,classList.add('.cabecalho')
        }
    }
}
window.addEventListener('load',init);