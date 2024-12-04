// Load Header Section
fetch('../src/header.html')
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
    })
    .then((data) => {
        document.getElementById('header').innerHTML = data;
        console.log('Header loaded successfully!');
    })
    .catch((error) => {
        console.error('Error loading header:', error);
    });

// Load main about Section
fetch('./src/about.html')
    .then((response) => response.text())
    .then((data) => {
        document.getElementById('about').innerHTML = data;
    })
    .catch((error) => {
        console.error('Error loading About section:', error);
    });

// Load main project Section
fetch('./src/projects.html')
    .then((response) => response.text())
    .then((data) => {
        document.getElementById('projects').innerHTML = data;
    })
    .catch((error) => {
        console.error('Error loading Projects section:', error);
    });

// Load Skills Section
fetch('./src/skills.html')
    .then((response) => response.text())
    .then((data) => {
        document.getElementById('skills').innerHTML = data;
    })
    .catch((error) => {
        console.error('Error loading Skills section:', error);
    });

// Load Contact Section
fetch('./src/contact.html')
    .then((response) => response.text())
    .then((data) => {
        document.getElementById('contact').innerHTML = data;
    })
    .catch((error) => {
        console.error('Error loading Contact section:', error);
    });

/*==================== CHANGE BACKGROUND HEADER ====================*///
function scrollHeader() {
    const nav = document.getElementById('nav-menu')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*///
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

//! =================== Collapse Button ======================//
const navigation_box = document.querySelector('#navigation_box')
const menuToggle = document.querySelector('#menuToggle')
const nav_links = document.querySelectorAll('.nav-link')

menuToggle.addEventListener('click', () => {
    navigation_box.classList.toggle('slidein_active')
    transform_hamburger()
})
nav_links.forEach(el => {
    el.addEventListener('click', () => {
        navigation_box.classList.toggle('slidein_active')
        transform_hamburger()
    })
})

function transform_hamburger() {
    let first = document.querySelector('#first_span')
    let second = document.querySelector('#second_span')
    let third = document.querySelector('#third_span')

    first.classList.toggle('first_span_active')
    second.classList.toggle('second_span_active')
    third.classList.toggle('third_span_active')
}

//! ============= resume button ==========///
document.getElementById("resume-link-1").onclick = () => {

    window.open("https://drive.google.com/file/d/1iAqMXfsBQPrOkNgpgzhok94RpIugudPi/view");
}
document.getElementById("resume-link-2").onclick = () => {

    window.open("https://drive.google.com/file/d/1iAqMXfsBQPrOkNgpgzhok94RpIugudPi/view");
}


//! ================= Fixture =================
// window.addEventListener('load',()=>{
//     // window.scrollTo(0, 0);
//     window.location.href = '#home'
// })
//! ================= SCROLL  =================


