// alert ('hello bug')
let divWrapper = document.createElement('div');
divWrapper.classList.add('wrapper');
document.body.appendChild(divWrapper);
divWrapper.style.maxWidth= '960px';
divWrapper.style.margin= '25px 140px';

let title2 = document.createElement('h2');
title2.innerHTML = 'Тест по программированию';
divWrapper.appendChild(title2);
title2.style.textAlign='center';
title2.style.margin='25px 100px';
title2.style.fontWeight='bold';

let form = document.createElement('form');
divWrapper.appendChild(form);




let formObject = {
    questions: ["1. Вопрос №1", "2. Вопрос №2", "3. Вопрос №3"],
    answers: ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"],

    block: function () {

        for (let i = 0; i < this.questions.length; i++) {
            let p1 = document.createElement('p');
            p1.innerHTML = this.questions[i];
            form.appendChild(p1);


            for (let k = 0; k < this.answers.length; k++) {
                let inputCheck,
                    spanAfterInput,
                    label1;

                label1 = document.createElement('label');
                form.appendChild(label1);
                label1.style.display='block';

                inputCheck = document.createElement('input');
                inputCheck.type = 'checkbox';
                label1.appendChild(inputCheck);

                spanAfterInput = document.createElement('span');
                spanAfterInput.innerHTML = this.answers[k];
                label1.appendChild(spanAfterInput);

            }

        }
    },
    button: function () {
        let inputSubmit = document.createElement('input');
        inputSubmit.type = 'submit';
        inputSubmit.value = 'Проверить мои результаты';
        form.appendChild(inputSubmit);
        inputSubmit.style.background='#00BCD4';
        inputSubmit.style.borderColor='blue';
        inputSubmit.style.display='block';
        inputSubmit.style.marginLeft='330px';
        inputSubmit.style.height='50px';
        inputSubmit.style.marginTop='40px';
        inputSubmit.style.fontSize='19px';

    }

};


formObject.block();
formObject.button();