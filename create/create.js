import { createNewPost, checkAuth } from '../fetch.utils.js';

const form = document.getElementById('create-post');
const homeBtn = document.getElementById('home-btn');

checkAuth();

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const newPost = {
        title: data.get('title'),
        description: data.get('description'),
        contact: data.get('contact'),
    };
    await createNewPost(newPost);
    location.replace('/');
    // console.log(response);
});

homeBtn.addEventListener('click', () => {
    location.replace('/');
});
// need createNewPost function in fetch.utils
