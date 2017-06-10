/**
 * Created by Marina on 10.06.2017.
 */

var x = prompt ('Введите число');
var n = prompt('Введите степень числа');
    if (x<=0) alert ('Ошибка, введите целое число')
    else {

        function pow(x, n) {
            var result = x;
            for (var i = 1; i < n; i++) {
                result *= x;
            }
            return result;

        }
    }

alert (pow(x,n));
