const progress = document.getElementById( 'progress' );
const form = document.getElementById( 'form' );


form.addEventListener( 'submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const fileSize = formData.get('file').size;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.upload.onprogress = (e) => {
        progress.value = e.loaded/fileSize;
    };
    xhr.send( formData );
});
