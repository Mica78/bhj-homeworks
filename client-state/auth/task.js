const form = document.forms[0];
const btn = document.getElementById('signin__btn');
const model = {
    url: 'https://students.netoservices.ru/nestjs-backend/auth',
    method: 'POST',
}


function auth(userId){
    const welcome = document.getElementById('welcome');
    const idElem = document.getElementById('user_id');
    const signing = document.getElementById('signin');
    welcome.classList.add('welcome_active');
    idElem.textContent = userId;
    signing.classList.remove('signin_active');
};


if (localStorage.getItem('login')) {
    auth(localStorage.getItem('login'));
} else {
    btn.onclick = async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const body = JSON.stringify(Object.fromEntries(formData))
        const response = await fetch(
            model.url,
            {
                method: model.method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body:body,
            }
        );
        const result = await response.json();
        if (result.success) {
            localStorage.setItem('login', result.user_id);
            auth(result.user_id);
        } else if (!result.success) {
            alert('Неверный логин/пароль');
        };
    };
}
