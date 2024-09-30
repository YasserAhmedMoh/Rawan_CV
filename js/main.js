// bar icon event
let barsIcons = document.querySelectorAll('.bars div');
barsIcons.forEach((bar) => {
    bar.addEventListener('click' , function() {
        barsIcons.forEach((bar) => {
            bar.classList.add('active');
        });
        this.classList.remove('active');
        
        document.querySelector('.links').classList.toggle('list');
        
    });
});
//add active to nav links
let navLinks = document.querySelectorAll('.navbar .links a');
addActivetoClickElement(navLinks);

function addActivetoClickElement(elements) {
    elements.forEach((element) => {
        element.addEventListener('click' , function() {
            elements.forEach((element) => {
                element.classList.remove('active')
            })
            this.classList.add('active');
        })
    })
}
// onscroll events
document.querySelector('.up-btn').onclick = () => {
            window.scroll({
                top: 0,
                behavior: 'smooth'
            })
        }

onscroll = () => {
    let navbar = document.querySelector('.navbar');
    navbar.classList.toggle('bg',window.scrollY >= 180 )  
        // document.querySelector('.up-btn').style.display = 'flex';
    document.querySelector('.up-btn').classList.toggle('show',window.scrollY >= document.querySelector('.landing').clientHeight);
    if(this.scrollY >= document.querySelector('.skills').offsetTop - 400) {
        document.querySelectorAll('.skills .prog').forEach((prog) => {
            prog.style.width = prog.dataset.prog;
        })
    }

    document.querySelector('.links').classList.add('list');
}
// get current year
document.querySelector('#year').innerHTML = new Date().getFullYear();




