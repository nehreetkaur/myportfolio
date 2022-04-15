const navToggle=document.querySelector('.nav-toggle');

const navLinks=document.querySelectorAll('.nav__link');



navToggle.addEventListener('click',()=>{
    document.body.classList.toggle('nav-open');
})

navLinks.forEach(link=>{
    link.addEventListener("click", ()=>{
        document.body.classList.remove('nav-open');
    })
})


var typed=new Typed(".typing-2",{
    strings:["PERFORMANCE FOCUSED","GROWTH-ORIENTED","CRITICAL THINKER", " EFFECTIVE COMMUNICATOR","DECISIVE","CALM UNDER PRESSURE" ,"ROSY-OUTLOOK"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});