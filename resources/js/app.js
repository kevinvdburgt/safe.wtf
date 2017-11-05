import axios from 'axios';

import '../sass/app.sass';

function setup () {
  const uploadButton = document.querySelector('.js-upload-button');
  const uploadInput = document.querySelector('.js-upload-input');
  const uploadFileList = document.querySelector('.js-upload-filelist');

  uploadButton.addEventListener('click', (evt) => {
    evt.preventDefault();

    uploadInput.click();
  }, false);

  uploadInput.addEventListener('change', (evt) => {
    const files = [];
    for(let i = 0; i < evt.target.files.length; i++) {
      files.push(evt.target.files[i]);
    }

    files.forEach((file) => {
      const item = document.createElement('li');
      uploadFileList.appendChild(item);

      item.innerHTML = 'Starting upload..';

      const data = new FormData();
      data.append('files[]', file);

      const config = {
        onUploadProgress: (evt) => {
          item.innerHTML = `Progress: ${(evt.loaded * 100) / evt.total}%`;
        },
      };

      axios
        .post('/api/upload', data, config)
        .then((res) => {
          item.innerHTML = `https://safe.wtf/${res.data.files[0].name}`;
        })
        .catch((err) => {
          item.innerHTML = 'Upload error';
          console.error(err);
        });
    });
  });
}

setup();
