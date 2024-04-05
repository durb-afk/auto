/*
let interval = setInterval(() => {
    const elems = document.getElementsByClassName("flex overflow-hidden h-screen");
    if (elems.length > 1) {
        const dupe = elems[1];
        const parent = dupe.parentElement;
        if (parent.contains(dupe)) {
            parent.removeChild(dupe);
            clearInterval(interval);
        }
    }
    //console.log('test');
}, 1000);
*/