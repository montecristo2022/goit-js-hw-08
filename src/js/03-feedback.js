import throttle from 'lodash.throttle';

// const refs = {
//   form: document.querySelector('.feedback-form'),
//     textarea: document.querySelector('.feedback-form textarea'),
//   input: document.querySelector('.feedback-form input')
// };

// const STORAGE_KEY = 'feedback-msg';

// const formData = {};

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

// refs.form.addEventListener('input', e => {
//   // console.log(e.target.name)
//   // console.log(e.target.value)

//   formData[e.target.name] = e.target.value;

//   console.log(formData);
// });

// populateTextarea();

// function onFormSubmit(evt) {
//   evt.preventDefault();

//   evt.target.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// function onTextareaInput(evt) {
//   const message = evt.target.value;
//   localStorage.setItem(STORAGE_KEY, message);
// }

// function populateTextarea() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);

//   if (savedMessage) {
//     console.log(savedMessage);
//     refs.textarea.value = savedMessage;
//   }
// }





const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

populateFormInput();
 

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
};

function onFormInput(event) {
    const messageName = event.target.name;
    const messageValue = event.target.value;    
    formData[messageName] = messageValue;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));  


};

function populateFormInput() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const parsedSavedMessage = JSON.parse(savedMessage);    
    if (parsedSavedMessage) {
        Object.entries(parsedSavedMessage).forEach(([name, value]) => {
            formData[name] = value;
            form.elements[name].value = value;            
        })
    }
};