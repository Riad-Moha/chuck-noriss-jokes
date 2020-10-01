document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.querySelector('input').value;
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`);
  xhr.onload = function () {
    if (this.status === 200) {
      let joke = '';
      const output = JSON.parse(this.responseText);
      if (output.type === 'success') {
        output.value.forEach(function (item) {
          joke += `<li>${item.joke}</li>`;
        });
        document.querySelector('.jokes').innerHTML = joke;
      } else {
        document.querySelector(
          '.jokes'
        ).innerHTML = `<p>Something went wrong</p>`;
      }
    }
  };
  xhr.send();
}
