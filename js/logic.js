let blob = document.querySelector('.blob');

window.addEventListener('deviceorientation', (e) => {
    let tiltLR = e.gamma;
    let tiltFB = e.beta;

    blob.style.transform = 'rotateX(' +e.beta+ 'deg)' +
        'rotateY(' +e.gamma+ 'deg)' +
        'rotateZ(' +e.alpha+ 'deg)';
});

const getPrefix = ()=> {
    let prefix = null;
    if(document.hidden !== undefined)
        prefix = "";
    else{
        let browserPrefixes = [ 'webkit', 'moz', 'ms', 'o' ];
        for( let i = 0; i < browserPrefixes.length; i++ )
            if(document[browserPrefixes[i] + 'Hidden'] != undefined){
                prefix = browserPrefixes[i];
                break;
            }
    }

    return prefix;
}

const countView = ()=>{
    if( document.hidden === false || document[prefix + 'Hidden'] === false )
        views++;
    console.log(views);
}

let views = 0;
let prefix = getPrefix();
window.onload = countView();

