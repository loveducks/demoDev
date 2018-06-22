let blob = document.querySelector('.blob');
let log = document.querySelector('#log');

window.addEventListener('deviceorientation', (e) => {
    blob.style.transform = 'rotateX(' +e.beta+ 'deg)' +
        'rotateY(' +e.gamma+ 'deg)' +
        'rotateZ(' +e.alpha+ 'deg)';
});

let getPrefix = ()=> {
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

let countView = ()=>{
    if( document.hidden === false || document[prefix + 'Hidden'] === false )
        views++;
    log.innerText = "You visited the page " + views + " times";
    //console.log(views);
}

/*
let testPageVisibilityApi = () => {
    if(prefix === null)
        log.innerText = "Your browser does not support Page Visibility API";
    else{
        document.addEventListener(prefix + "visibilitychange", countView);
        countView();
    }
}
*/


let views = 0;
let prefix = getPrefix();
window.onload = 
document.addEventListener(prefix + "visibilitychange", countView, false);
