const btn_upload = document.getElementById('upload');
const btn_fetch = document.getElementById('fetch');
const btn_fetch_multiple = document.getElementById('fetch-multiple');
const btn_delete = document.getElementById('delete');
const btn_send = document.getElementById('send');
const content = document.getElementById('main');

btn_upload.addEventListener('click', function(e) {
    content.innerHTML = `
        <form></form>
    `;
});
btn_fetch.addEventListener('click', function(e) {});
btn_fetch_multiple.addEventListener('click', function(e) {});
btn_delete.addEventListener('click', function(e) {});
btn_send.addEventListener('click', function(e) {});