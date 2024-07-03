// Fade In
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show-transition');
        } else{
            entry.target.classList.remove('show-transition');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hide');
hiddenElements.forEach((el)=>{
    observer.observe(el);
});