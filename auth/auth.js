import { redirectIfLoggedIn, signInUser, signupUser } from '../fetch.utils.js';

const signInForm = document.getElementById('sign-in');
const homeButton2 = document.getElementById('home-btn2');

const signUpForm = document.getElementById('sign-up');

redirectIfLoggedIn();

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    const email = data.get('email');
    const user = await signupUser(email, data.get('password'));

    if (user) {
        location.replace('/');
    }
});
// Redirect to /other-page on successful auth
// Redirect to /other-page when page loads if user is authenticated

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signInForm);
    const email = data.get('email');
    const user = await signInUser(email, data.get('password'));

    if (user) {
        location.replace('/');
    }
});

homeButton2.addEventListener('click', () => {
    location.replace('/');
});
