let status_scroll=0;
var nav = document.getElementById("s-nav");
var content = document.getElementById("filter");
document.addEventListener("scroll", galtak);

 function galtak(){      
    nav.style.marginTop="0";
    if(status_scroll>window.pageYOffset){
    nav.style.position="fixed"
    nav.style.marginTop="65px";
    nav.style.transition="all .3s";
    if(window_width>768 && window_width<1024){
        nav.style.marginTop="53px";    
        }
    }

    status_scroll=window.pageYOffset
}


var placeholder = document.getElementById("placeholder");
var btn_set=document.getElementById('btn-set');
placeholder.addEventListener('change',function(){
    if(placeholder.value==''){
        btn_set.style.opacity=".5";
        btn_set.style.backgroundColor='#d8d8d8';
    }
});

function update(){
    btn_set.style.opacity="1";
    btn_set.style.backgroundColor='#ef394e';
    btn_set.style.transition='.3s';
    if(placeholder.value ==''){
        btn_set.style.opacity=".5";
        btn_set.style.backgroundColor='#d8d8d8';
    }

};


//   for button footer back to top
function tap_to_top(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}


//       for hover drop down

var filter=document.getElementById('filter');

function increase_opcity(){
    filter.style.opacity=".7";
    filter.style.transition="all .3s"
    
}function decrease_opcity(){
    filter.style.opacity="1";
}





//for more text in footer
    var more_text=document.getElementById('more_text');
    var more_btn=document.getElementById('more_btn');
    var end_footer=document.getElementById('end_footer');
    var svg_footer=document.getElementById('end--footer');
    more_text.style.display="none";
    function myfuc(){
        if(more_text.style.display=="none"){
            more_text.style.display="block";
            more_btn.innerHTML="بستن ";            
        

        }
        else{
            more_text.style.display="none";
            more_btn.innerHTML="مشاهده بیشتر ";

        }
    }



    //      first swiper


    var swiper = new Swiper("#s4", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        },
      );

    


        ///         for color line swiper
        var window_width = window.innerWidth;

        var preview=3;
        if(window_width>=1632){
            var preview=5;
        }else if(window_width>=1215){
            preview=4;
        }else if(window_width>=1000){
            preview=3;
        }else if(window_width>=750){
            preview=2;
        }else if(window_width>=500){
            preview=1;
        }
        var swiper = new Swiper(".mySwiper", {
        slidesPerView: preview,
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: true,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

    });



    ///      for last model swiper
    var previev;
    if(window_width>=1000){
        previev=4;
    }else if(window_width>=750){
        previev=3;
    }else if(window_width>=500){
        previev=2;
    }

    var swiper = new Swiper(".mySwiper1", {
    slidesPerView: previev,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var preViw;
if(window_width>=1000){
    var preViw=5;
}else if(window_width>=800){
    preViw=4;
}else if(window_width>=600){
    preViw=3;
}else if(window_width>=450){
    preViw=2;
}else if(window_width>=280){
    preViw=1;
}

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: preViw,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
}); 





    var swiper = new Swiper(".mySwiper3", {
    slidesPerView: preViw,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }

});



//      for refresh code
window.addEventListener('resize',function(){
    
    if(window.innerWidth <= 1632 & window.innerWidth >= 1522){
        location.reload();
    }else if(window.innerWidth<=1215 & window.innerWidth >= 1105 ){
        location.reload();
    }else if(window.innerWidth<=1000 & window.innerWidth >= 890){
        window.location.reload();
    }else if(window.innerWidth<=750 & window.innerWidth >= 640){
        window.location.reload();
    }else if(window_width<=500 & window.innerWidth >= 390){
        window.location.reload();
    }

});
        
