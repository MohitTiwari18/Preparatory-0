let preveiwContainer = document.querySelector('.Books-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.Books-container .Book').forEach(Book =>{
  Book.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = Book.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});