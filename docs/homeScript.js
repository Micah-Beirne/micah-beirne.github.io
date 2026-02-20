

function createTopNav () {
    const links = [
        {text: 'Home', href: ''},
        {text: 'Art', href: ''},
        {text: 'Contact', href: ''}
    ];
    var css = '.navLink:hover {background-color: pink; box-shadow: 0px 0px 10px black}';
    var style = document.createElement('style');
    
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    
    document.getElementsByTagName('head')[0].appendChild(style);
    const nav = document.createElement('div');
    nav.className = 'topnav';
    Object.assign(nav.style, {position: 'fixed', borderRadius: '25px', overflow: 'hidden', backgroundColor: 'lightpink', zIndex: '6'});
    links.forEach(l => {
        const a = document.createElement('a');
        a.href = l.href;
        a.textContent = l.text;
        Object.assign(a.style, {float: 'left', display: 'block', color: 'white', textAlign: 'center', padding: '14px', textDecoration: 'none'});
        a.classList.add('.navLink');
        if (l.floatRight) a.classList.add('right');
        nav.appendChild(a);
    });
    const start = document.getElementById('startLine');
    start.appendChild(nav);
    Object.assign(document.body.style, {paddingTop: '1px'});
    Object.assign(start.style, {marginBottom: '52px'});
    return nav;
}
