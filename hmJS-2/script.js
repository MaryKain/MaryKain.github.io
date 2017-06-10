
var arrey = [];
var i;

alert('Введите 5 любых имен');

for (i = 0; i < 5; i++) {
    arrey[i] = prompt('Введите имя');
}

var userName = prompt('Введите Ваше имя');
var nameCheck;

for (i = 0; i < arrey.length; i++) {
    if (userName === arrey[i]) {
        alert(userName + ', Вы успешно вошли');
        nameCheck = 0;
        break;
    }
}
if (nameCheck != 0) {
    alert('Ошибка входа');
}
