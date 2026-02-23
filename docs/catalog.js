const pages = {
    stuff: {
        name: 'Stuff',
        image: 'assets/illusionofcheese.jpg',
        alt: 'An image containing things, perhaps stuff',
        date: '01, 01, 0001',
        description: 'An image of stuff',
        tags: ['art'],
        type: 'normal'
    },
    things: {
        name: 'Things',
        image: 'assets/things.png',
        alt: 'An image containing things, perhaps stuff',
        date: '01, 01, 0002',
        description: 'An image of things',
        tags: ['art', 'computer science'],
        type: 'normal'
    }
};

function generatePage () {
    const id = window.location.hash.substring(1);
    const container = document.createElement('div');
    container.className = 'container';
    container.classList.add('container');
    const page = pages[id];
    
    const title = page.name;
    document.title = title;
    const name = document.createElement('h1');
    name.textContent = title;
    container.appendChild(name);
    const image = document.createElement('img');
    image.src = page.image;
    image.alt = page.alt;
    container.appendChild(image);
    const description = document.createElement('p');
    description.textContent = page.description;
    container.appendChild(description);
    const date = document.createElement('p');
    date.textContent = page.date;
    container.appendChild(date);
  
    const start = document.getElementById('startLine');
    start.after(container);
    return container;
};

function generateCatalog () {
    let id = window.location.hash;
    const container = document.createElement('div');
    container.className = 'catalog';
    container.classList.add('catalog');
    if (id.length == 0) {
        id = id.substring(1);
    };
    Object.entries(pages).forEach(p => {
        if (!p[1].tags.includes(id)) {
            const a = document.createElement('a');
            a.href = 'https://micah-beirne.github.io/content#' + p[0];
            a.textContent = p[1].name;
            const div = document.createElement('div');
            container.appendChild(div);
            div.appendChild(a);
        };
    });
    document.body.appendChild(container);
    return container;
};
