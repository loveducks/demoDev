let blob = document.querySelector('.blob');

window.addEventListener('deviceorientation', (e) => {
    let tiltLR = e.gamma;
    let tiltFB = e.beta;

    blog.style.transform = 'rotateX(' +e.beta+ 'deg)' +
        'rotateY(' +e.gamma+ 'deg)' +
        'rotateZ(' +e.alpha+ 'deg)';
});
