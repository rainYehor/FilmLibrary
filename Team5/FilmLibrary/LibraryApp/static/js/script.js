// const modalWindow = document.querySelector('.modal-window-parent');
// const closeButton = document.querySelector('.button-close');
// const buttonSend = document.querySelector('.button-send');
// const opacityBox = document.querySelector('.content_filter');

// function showModalWindow(){
//     modalWindow.style.display = 'flex';
// }

// function hideModalWindow(){ 
//     modalWindow.style.display = 'none';
// }

// function showOpacityBox(){
//     opacityBox.style.display = 'flex';
// }

// function hideOpacityBox(){
//     opacityBox.style.display = 'none';
// }

// setTimeout(showOpacityBox, 1000);
// setTimeout(showModalWindow, 1000);

// // closeButton.addEventListener('click', hideOpacityBox);
// closeButton.addEventListener('click', hideModalWindow);
// closeButton.addEventListener('click', hideOpacityBox);
// $(document).ready(function(){
//     $('.button-send').on('click', function(e){
//         e.preventDefault();
//         $.ajax({
//             url : $('.url_get').val(),
//             type : 'POST',
//             data: {
//                 user_name:$('.user_name').val(),
//                 feedback:$('.feedback').val(),
//                 csrfmiddlewaretoken:$('input[name="csrfmiddlewaretoken"]').val(),
//             },
//             success : function(){
//                 hideModalWindow();
//             },
//         });
//     });
// });