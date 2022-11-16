/* Imports */
import { fetchPosts, getUser, logout } from './fetch.utils.js';

/* Get DOM Elements */
const bulletin = document.getElementById('bulletin-board');
const authButton = document.getElementById('auth-button');
const createButton = document.getElementById('create');

/* State */

/* Events */
window.addEventListener('load', async () => {
    const user = await getUser();

    createButton.addEventListener('click', () => {
        location.replace('/create');
    });
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
