const pages = {
    illusionofcheese: {
        name: 'Illusion of Cheese',
        image: 'assets/illusionofcheese.jpg',
        alt: 'A cow must choose between colleges, but both eventually lead to cheese club',
        date: '02/18/2026',
        description: '',
        tags: ['art'],
        type: 'normal'
    },
    ambrosia: {
        name: 'Ambrosia',
        image: '',
        alt: '',
        date: '??/12/2025',
        description: 
            `Ambrosia

            Upon a mountain in the land of beasts,
            there rests an orange tree.
            Frosted fruit on which it feasts,
            has been bestowed on we.
            
            If Hebe poured this for the Gods,
            I understand completely.
            Their monstrous, their grand facades
            to harbor this discretely.
            
            This liquid is my blinded Equus,
            an eye-white tonic.
            My leyline, my noble nexus,
            smooth, sharp, chthonic.
            
            I am too young for blood red wine,
            from tea does no yawn stir,
            water's what they feed the swine
            So I drink White Monster`,
        tags: ['writing', 'poetry'],
        type: 'no-image'
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
    if (page.type != 'no-image') {
        const image = document.createElement('img');
        image.src = page.image;
        image.alt = page.alt;
        container.appendChild(image);
    }
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
