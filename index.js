// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');

// form.addEventListener('submit', (even) => {
//     even.preventDefault();

//     validateInputs();
// })

// const setError = ( element, message ) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector( '.error' )

//     errorDisplay.innerText = message;
//     inputControl.classList.add( 'error' )
//     inputControl.classList.remove( 'succes' )
//     form.classList.add('error_box')
// }

// const setSucces = ( element ) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('succes');
//     inputControl.classList.remove('error');
//     form.classList.remove('error_box')
// }

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// const validateInputs = () => {
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();
//     const password2Value = password2.value.trim();

//     if ( usernameValue === '' ) {
//         setError( username, 'Введите имя пользователя!' );
//     } else {
//         setSucces( username );
//     }

//     if ( emailValue === '' ) {
//         setError( email, 'Введите email!' );
//     } else if ( !isValidEmail(emailValue ) ) {
//         setError( email, 'Введите корректный email!' );
//     } else {
//         setSucces(email);
//     }

//    if ( passwordValue === '' ) {
//         setError( password, 'Введите пароль!' );
//    } else if ( passwordValue.length < 8 ) {
//         setError( password, 'Введите пароль больше 8 символов!' );
//    } else {
//         setSucces( password );
//    }

//    if ( passwordValue === '' ) {
//     setError( password2, 'Повторите пароль!' );
//    } else if ( passwordValue !== password2Value ) {
//     setError( password2, 'Пароли не совпадают' );
//    } else { 
//     setSucces( password2 );
//    }
// }

const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const btnPass = document.getElementById('see-password')
const ease = document.getElementById('ease')

btnPass.onclick = (even) => {
    even.preventDefault();
    if (password.getAttribute('type') === 'password') {
        password.setAttribute('type', 'text')
        ease.setAttribute('src', 'img/ease2.png')

    } else {
        password.setAttribute('type', 'password')
        ease.setAttribute('src', 'img/ease.png')
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;

    inputControl.classList.add('error')
    inputControl.classList.remove('succes')

} 

const setSucces = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';

    inputControl.classList.add('succes');
    inputControl.classList.remove('error');
}

const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

const validateInputs = () => {
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    if ( usernameValue === '' ) {
        setError(username, 'enter username');
    } else {
        setSucces(username);
    }

    if ( emailValue === '' ) {
        setError(email, 'enter email');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'enter valid email');
    } else {
        setSucces(email);
    }

    if ( passwordValue === '' ) {
        setError(password, 'enter password');
    } else if (passwordValue.length < 8) {
        setError(password, `enter password more 8 symbols, please enter ${ 8 - passwordValue.length } symbols`);
    } else {
        setSucces(password);
    }

    if ( password2Value === '' ) {
        setError(password2, 'enter password again');
    } else if (passwordValue !== password2Value) {
        setError(password2, 'passwords dont match')
    } else {
        setSucces(password2);
    }
}