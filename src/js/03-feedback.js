import throttle from "lodash.throttle";

const refs = {
    formEl: document.querySelector('.feedback-form'),
    textEl: document.querySelector('textarea[name="message"]'),
    inputEl: document.querySelector('input[name="email"]')
}

let localDates = {
    email: '',
    message: '',
};

refs.formEl.addEventListener('submit', onSpendForm)
refs.textEl.addEventListener('input', throttle(onSpendTextarea, 500))
refs.inputEl.addEventListener('input', throttle(onSpendInput, 500))

onPopulateForm();

function onPopulateForm() {
    const saveForm = JSON.parse(localStorage.getItem("feedback-form-state"))

    if (saveForm) {
        refs.inputEl.value = saveForm.email;
        refs.textEl.value = saveForm.message;
        localDates.email = saveForm.email;
        localDates.message = saveForm.message;
    }
}

function onSpendForm(evt) {
    console.log(localDates)
    evt.preventDefault()

    evt.currentTarget.reset()
    localDates = {};
    localStorage.removeItem("feedback-form-state");
    localDates = {
        email: '',
        message: '',
    };
}

function onSpendInput(evt) {
    localDates[`email`] = `${evt.target.value}`;
    localStorage.setItem("feedback-form-state", JSON.stringify(localDates))
}

function onSpendTextarea(evt) {
    localDates[`message`] = `${evt.target.value}`;
    localStorage.setItem("feedback-form-state", JSON.stringify(localDates))
}

