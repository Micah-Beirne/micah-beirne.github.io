

function createTopNav () {
    const links = [
        {text: 'Home', href: ''},
        {text: 'Art', href: ''},
        {text: 'Contact', href: ''}
    ];
    const nav = document.createElement('div');
    const subnav = document.createElement('div');
    nav.className = 'topnav';
    Object.assign(nav.style, {position: 'fixed', borderRadius: '25px', overflow: 'hidden', backgroundColor: 'lightpink', zIndex: '6'});
    links.forEach(l => {
        const a = document.createElement('a');
        a.href = l.href;
        a.textContent = l.text;
        Object.assign(a.style, {float: 'left', display: 'block', color: 'white', textAlign: 'center', padding: '14px', textDecoration: 'none', hover: "backgroundColor: 'pink', boxShadow: '0px 0px 10px black'"});
        if (l.floatRight) a.classList.add('right');
        nav.appendChild(a);
    });
    const txt = document.createElement('p');
    Object.assign(txt.style, {float: 'left', display: 'block', color: 'white', textAlign: 'center', padding: '14px', textDecoration: 'none',});
    subnav.appendChild(txt);
    const referenceElement = document.getElementById('startLine');
    referenceElement.appendChild(nav);
    referenceElement.appendChild(subnav);
    return nav;
}
