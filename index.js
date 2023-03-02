let header = document.getElementById('change')
window.onscroll = function(){
    const scroller = window.scrollY;
    let header = document.getElementById('change')
    if (scroller > 150){
        header.style.backgroundColor = 'RGB(0, 0, 0, .5)'
    } else {
        header.style.backgroundColor = 'transparent'
    }
}
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    })
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const linkSection = document.querySelector('.linkSection')
const socialSection = document.querySelector('.socialSection')
toggleButton.addEventListener('click', function(){
    document.body.classList.toggle('stop-scrolling')
    linkSection.classList.toggle('active');
    socialSection.classList.toggle('active')
})