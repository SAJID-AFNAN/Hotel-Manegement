function signup(){
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    loginForm.classList.add('hidden')
    signupForm.classList.remove('hidden')

}
function login(){
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    loginForm.classList.remove('hidden')
    signupForm.classList.add('hidden')

}
function crossbutton(){
    login();
}