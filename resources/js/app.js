import '../sass/app.sass';

const selectFiles = (target, evt) => {
  evt.stopPropagation();
  evt.preventDefault();
  target.click();
};

const uploadButton = document.querySelector('.js-upload-button');
const uploadInput = document.querySelector('.js-upload-input');

uploadButton.addEventListener('click', selectFiles.bind(this, uploadInput), false);


// import Dropzone from 'dropzone';

// // Upload creation
// const dropzone = new Dropzone('div#upload', {
//   url: '/api/upload',
//   paramName: 'files[]',
//   maxFilesize: 100,
//   parallelUploads: 2,
//   uploadMultiple: false,

// });
