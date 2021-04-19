const h2 = document.createElement('h2');
h2.textContent = "remember we all must die";

document.querySelector('.h2-div').appendChild(h2);

const input = document.getElementById('input');
input.addEventListener('click', function() {
  alert('We all have an appointment with Death');
}); 