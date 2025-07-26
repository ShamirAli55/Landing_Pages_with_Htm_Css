const tl = gsap.timeline({ 
    repeat: -1, 
    repeatDelay: 0 
},0);


tl.to('.img-container',{
    ease : Expo.easeInOut,
    width : "100%",
    duration:2,
    stagger : 2
},0);

tl.to(".text h1",{
    ease : Expo.easeInOut,
    stagger :2.3,
    top:0,
},0);

tl.to(".text h1",{
    delay :2,
    ease : Expo.easeInOut,
    stagger : 2,
    top:"-100%"
},0);