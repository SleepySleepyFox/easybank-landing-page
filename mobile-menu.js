let state = false;
let x2 = window.matchMedia("(max-width: 425px)");
if(x2.matches){
    document.querySelector('.mobile-menu').style.height = '0%'
    document.querySelector('.mobile-menu').style.width = '80%'
}else{
    document.querySelector('.mobile-menu').style.height = '100%'
    document.querySelector('.mobile-menu').style.width = '0%'
}

function openWin(){
    document.querySelector('.main-header__mobile-menue').addEventListener('click', function(){
        state = !state
        if(state === true){
            if(x.matches){
                document.querySelector('.mobile-menu').style.height = '60%'
            }else{
                document.querySelector('.mobile-menu').style.width = '40%'
            }
        }else{
            if(x.matches){
                document.querySelector('.mobile-menu').style.height = '0%'
            }else{
                document.querySelector('.mobile-menu').style.width = '0%'
            }
        }
    })
}

x2.addEventListener("change",openWin()) 