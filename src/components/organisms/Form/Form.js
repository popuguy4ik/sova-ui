import { createFormField } from '../../molecules/FormField/FormField.js';
import { createCheckbox } from '../../atoms/Checkbox/Checkbox.js';
import { createButton } from '../../atoms/Button/Button.js';
import { createSpinner } from '../../atoms/Spinner/Spinner.js';
import './Form.css';

/** Форма обращения в поддержку: поля, согласие, проверка на клиенте, состояние отправки. */
export const createForm = ({ title = 'Написать в поддержку', submitLabel = 'Отправить', showErrors = false } = {}) => {
  const form = document.createElement('form');
  form.className = 'form';
  form.noValidate = true;
  form.innerHTML = `<h2 class="form__title">${title}</h2><div class="form__grid"></div><p class="form__status" role="status"></p>`;
  const grid = form.querySelector('.form__grid');
  const fields = {
    name: createFormField({ label: 'Имя', name: 'name', placeholder: 'Как к вам обращаться', required: true, error: showErrors ? 'Заполните это поле' : '' }),
    email: createFormField({ label: 'Почта', type: 'email', name: 'email', placeholder: 'name@mail.ru', required: true, value: showErrors ? 'ilya@mail' : '', error: showErrors ? 'Проверьте адрес, например: name@mail.ru' : '' }),
    message: createFormField({ label: 'Сообщение', type: 'textarea', name: 'message', placeholder: 'Опишите вопрос', helper: 'Не пишите пароли и коды из СМС', required: true }),
  };
  fields.message.classList.add('form__wide');
  grid.append(fields.name, fields.email, fields.message);
  const agree = createCheckbox({ label: 'Согласен на обработку персональных данных', name: 'agree' });
  agree.classList.add('form__wide');
  grid.append(agree);
  const submit = createButton({ label: submitLabel, type: 'submit', icon: 'send', iconPosition: 'end' });
  submit.classList.add('form__submit');
  grid.append(submit);
  const status = form.querySelector('.form__status');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.elements.name, email = form.elements.email, message = form.elements.message;
    const bad = [name, email, message].filter((i) => !i.value.trim() || !i.checkValidity());
    [name, email, message].forEach((i) => i.closest('.input').classList.toggle('input--invalid', bad.includes(i)));
    if (bad.length || !form.elements.agree.checked) {
      status.className = 'form__status is-error';
      status.textContent = bad.length ? 'Проверьте поля, отмеченные красным' : 'Нужно согласие на обработку данных';
      (bad[0] || form.elements.agree).focus();
      return;
    }
    submit.disabled = true;
    submit.prepend(createSpinner({ size: 'sm', label: 'Отправляем' }));
    setTimeout(() => {
      submit.disabled = false;
      submit.querySelector('.spinner')?.remove();
      status.className = 'form__status is-success';
      status.textContent = 'Сообщение отправлено. Ответим в течение дня.';
      form.reset();
    }, 900);
  });
  return form;
};
