

function createTopNav () {
    const links = [
        {text: 'Home', href: ''}
    ];
    const nav = document.createElement('div');
    nav.className = 'topnav';
    links.forEach(l => {
        const a = document.createElement('a');
        a.href = l.href;
        a.textContent = l.text;
        if (l.floatRight) a.classList.add('right');
        nav.appendChild(a);
    });
    const referenceElement = document.getElementById('startLine');
    referenceElement.appendChild(nav);
    return nav;
}
