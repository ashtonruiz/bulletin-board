/* Imports */
import { fetchPosts, getUser, logout } from './fetch.utils.js';
import { renderPostIt } from './render.utils.js';
/* Get DOM Elements */
const bulletin = document.getElementById('bulletin-board');
const authButton = document.getElementById('auth-button');
const createButton = document.getElementById('create');

/* State */

/* Events */
window.addEventListener('load', async () => {
    const user = await getUser();

    if (user) {
        authButton.addEventListener('click', logout);
        authButton.textContent = 'Logout';
    } else {
        authButton.textContent = 'Login';
    }

    createButton.addEventListener('click', () => {
        location.replace('/create');
    });

    const posts = await fetchPosts();
    for (let post of posts) {
        const postDiv = renderPostIt(post);
        bulletin.append(postDiv);
    }
});

authButton.addEventListener('click', () => {
    location.replace('./auth');
});

// (don't forget to call any display functions you want to run on page load!)
