let x = window.matchMedia("(max-width: 629px)");
let y = window.matchMedia("(max-width: 800px)");
let mobileH = window.matchMedia("(max-width: 425px)");
let breakpoint = window.matchMedia("(max-width: 465px)");
function changeBg(x) {
    if (x.matches) { 
      document.getElementById('bg').setAttribute('src', './images/bg-intro-mobile.svg')
    }else{
        document.getElementById('bg').setAttribute('src', './images/bg-intro-desktop.svg')  
    }

    if(y.matches){
      bgHeight();
      x.addEventListener("change",bgHeight) 
    }
  }
  
  function bgHeight(){
    let latestBg = document.querySelector('.latest').offsetHeight * 5;
    convertLatestBg = String(latestBg) + 'px';
    document.querySelector('.latest').style.height = String(latestBg);
    console.log(latestBg)

    let bgheight = document.getElementById('why-choose-easybank__text-id').offsetHeight + 80;
    let convert = String(bgheight) + "px";
    let newBg = document.getElementById('why-choose-easybank-section');
    newBg.style.height = convert

    
    // next section
    let secondBg = document.getElementById('blockid').offsetHeight * 5 ;
    let convertS = String(secondBg) + "px";
    let newBgS = document.getElementById('latest-id');
    newBgS.style.height = convertS;

    if(mobileH.matches){
      newBgS.style.height =`${secondBg * 1.6}px`;
    }
  if(breakpoint.matches){
    newBg.style.height = `${bgheight * 1.3}px`
  }
  }

  changeBg(x)

