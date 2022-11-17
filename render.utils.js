export function renderPostIt(posts) {
    const div = document.createElement('div');
    div.classList.add('post-it');

    const h3 = document.createElement('h3');
    h3.textContent = posts.title;

    const p1 = document.createElement('p');
    p1.textContent = posts.description;
    const p2 = document.createElement('p');
    p2.textContent = posts.contact;
    p2.classList.add('contact');

    div.append(h3, p1, p2);

    return div;
}
