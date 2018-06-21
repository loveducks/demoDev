let blob = document.querySelector('.blog');

window.addEventListener('deviceorientation', (e) => {
    let tiltLR = e.gamma;
    let tiltFB = e.beta;

    blog.style.transform = `rotate3d(1, 0, 0, ${tiltFB * -1}deg)`; 
});
