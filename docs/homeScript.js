

function createTopNav () {
    const links = [
        {text: 'Home', href: ''},
        {text: 'Art', href: ''},
        {text: 'Contact', href: ''}
    ];
    const nav = document.createElement('div');
    nav.className = 'topnav';
    Object.assign(nav.style, {position: 'fixed', borderRadius: '25px', overflow: 'hidden', backgroundColor: 'lightpink', zIndex: '6'});
    links.forEach(l => {
        const a = document.createElement('a');
        a.href = l.href;
        a.textContent = l.text;
        Object.assign(a.style, {float: 'left', display: 'block', color: 'white', textAlign: 'center', padding: '14px', textDecoration: 'none'});
        Object.assign(a.style.hover, {backgroundColor: 'pink', boxShadow: '0px 0px 10px black'});
        if (l.floatRight) a.classList.add('right');
        nav.appendChild(a);
    });
    const start = document.getElementById('startLine');
    start.appendChild(nav);
    Object.assign(document.body.style, {paddingTop: '1px'});
    Object.assign(start.style, {marginBottom: '52px'});
    return nav;
}
