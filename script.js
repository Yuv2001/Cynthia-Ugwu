const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var t1= gsap.timeline();

    t1.from("#nav",{
        y: '-10',
        opacity:0,
        duration:2,
        ease:Expo.easeInOut
    })
    .to(".boundingelem",{
        y: '0',
        duration:2,
        delay:-1,
        ease:Expo.easeInOut,
        stagger: .3
    })
    .from("#herofooter",{
        y: '-10',
        opacity:0,
        duration:2,
        delay:-1,
        ease:Expo.easeInOut
    })
}
// jab mouse move ho to hum log skew kar paaye aur maximum skew and minimum kew define kar paaye, jab mouse move ho to chapta ki value badhe, aur jab mouse chalna band ho jaaye to chapta hata lo  
 
function circleskewkaro(){
    // define default scale value
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove",function(dets){
         var xdiff = dets.clientX - xprev;
         var ydiff = dets.clienty - yprev;

         xprev = dets.clientX;
         yprev = dets.clienty;

         console.log(xdiff, ydiff);

    });
}
circleskewkaro();

function circleMouseFowller(){
    window.addEventListener("mousemove",function (dets) {
        document.querySelector("#minicircle").style.transform =`translate(${dets.clientX}px,${dets.clientY}px)`;
    })
}
circleMouseFowller();
firstPageAnim();