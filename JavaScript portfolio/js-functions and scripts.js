 Логін. Відправляє інформацію про користувача на сервер (логи), коли той натискає на кнопку.
HTML:
    <form onsubmit="return checkForm(this)">
        <input type="text" name="username" placeholder="Введіть ім'я"><br>
        <input type="email" name="email" placeholder="Введіть пошту"><br>
        <input type="password" name="password" placeholder="Введіть пароль"><br>
        <input type="radio" name="gender" value= 'male' >Чоловік<br>
        <input type="radio" name="gender" value= 'female'>Жінка<br>
        <button>Надіслати</button>
    </form>



JS:
function checkForm(el) {
let username = el.username.value;
let email = el.email.value;
let password = el.password.value;
let gender = el.gender.value;
console.log(username, email, password, gender);
    return false;
}


Робить так, щоб коли ви нічого не вказали, або вказали щось не те, вам видавало помилку.
 let error = '';
if (username.length < 2) {
    error = "ім'я занадто маленьке";
} else if(!email.includes('@')) {
error = "Email повиннен містити @";
} else if(password.length < 2) {
error = "пароль занадто маленький" 
} else if(gender == null || gender == '')
error = "gender error";

if(error != '') {
    document.getElementById('error').innerText = error;
    return false;
}

document.getElementById('error').innerText = '';

    return false;
}

Самий простий інтервал, з функцією СТОП. (не забуваємо прописувати onclick = 'stopInterval()' в хтмл.
let int = setInterval(my_func, 1000);

let counter = 0;
function my_func() {
    document.getElementById('timer').innerHTML = "Counter:" +  counter;
    counter++;
}

function stopInterval() {
    clearInterval(int);
}
Самий простий таймер:
    let timerid = setTimeout(function() {
    alert('message'); 

}, 15000);

Сама проста дата, яка виводиться в консоль:
 let date = new Date();
console.log('Час: ' + date.getHours() + ":" + date.getMinutes());
Дата, яка працює з інтервалом та відображається на сторінці:
setInterval(function() {
    let date = new Date();
    let time = ('Час: ' + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());   
    document.getElementById("time").innerText = time;
}, 1000) ;
Створення класів з irl:
class Person {
    name = ''
    age = 0
    bio = ''
    info() {
        console.log('person: ' + this.name + '. age: ' + this.age + '. bio: ' + this.bio)
    }
}
let alex = new Person();
alex.name = 'Alex';
alex.age = '20';
alex.bio = 'huesos';

let bob = new Person();
bob.name = 'bob';
bob.age = '25';
bob.bio = 'huesos2';

alex.info();
bob.info();

 Функція колбеки:
   const logMessage = (actionBefore, actionAfter) => {
    actionBefore()
    console.log('Hello');
    actionAfter()
}

const f1 = () => console.log(before);
const f2 = () => console.log(after);

logMessage(
    console.log('before'),
    console.log('after'),
)
 
Функція validate (створює функцію та умову):
// Функция, которая возвращает действия в зависимости от роли пользователя
const getUserActions = (role) => {
    if (role === 'admin') {
        return () => console.log('Welcome, Admin! You can manage users and settings.');
    } else if (role === 'user') {
        return () => console.log('Welcome, User! You can view and edit your profile.');
    } else {
        return () => console.log('Access Denied: Unknown role.');
    }
};

// Пример взаимодействия с пользователем
const role = prompt('Enter your role (admin/user):'); // Запрашиваем роль у пользователя
const actions = getUserActions(role); // Получаем действия на основе роли
actions(); // Выполняем соответствующую функцию
