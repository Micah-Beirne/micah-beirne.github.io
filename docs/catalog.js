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
    //container.classList.add('container');
  
    const page = pages[id];
    const title = page.name;
    document.title = title;
    const name = document.createElement('h1');
    name.textContent = title;
    containter.appendChild(name);
    const image = document.createElement('img');
    image.src = page.image;
    image.alt = page.alt;
    containter.appendChild(image);
    const description = document.createElement('p');
    description.textContent = page.description + '\n\n' + page.date;
    containter.appendChild(description);
  
    const start = document.getElementById('startLine');
    start.after(container);
    return container;
}
