
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
refs.textEl.addEventListener('input', onSpendTextarea)
refs.inputEl.addEventListener('input', onSpendInput)

onPopulateForm();

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
    localDates[`email`] = `${evt.currentTarget.value}`;
    localStorage.setItem("feedback-form-state", JSON.stringify(localDates))
}

function onSpendTextarea(evt) {
    localDates[`message`] = `${evt.currentTarget.value}`;
    localStorage.setItem("feedback-form-state", JSON.stringify(localDates))
}

function onPopulateForm() {
    const saveForm = JSON.parse(localStorage.getItem("feedback-form-state"))
    localDates = {
        email: '',
        message: '',
    };
    if (saveForm) {
        refs.inputEl.value = saveForm.email;
        refs.textEl.value = saveForm.message;
        localDates.email = saveForm.email;
        localDates.message = saveForm.message;
    }
}

