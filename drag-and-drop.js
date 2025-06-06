const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('fileElem');

['dragenter', 'dragover'].forEach(eventName => {
  dropArea.addEventListener(eventName, (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropArea.classList.add('highlight');
  }, false);
});

['dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropArea.classList.remove('highlight');
  }, false);
});

dropArea.addEventListener('drop', (e) => {
  const files = e.dataTransfer.files;
  handleFiles(files);
});

document.querySelector('.browse').addEventListener('click', () => {
  fileInput.click();
});

fileInput.addEventListener('change', () => {
  handleFiles(fileInput.files);
});


function handleFiles(files) {
  for (let file of files) {
    console.log('File uploaded:', file.name);
  }
}
