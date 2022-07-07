const img = document.querySelector('img');
const button = document.querySelector('button');

fetch(
  'https://api.giphy.com/v1/gifs/translate?api_key=Vrdebkal4bzp47mVDJMcdjTKNDjoJifs&s=cute-frog',
  {
    mode: 'cors',
  }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    img.src = response.data.images.original.url;
  });

button.addEventListener('click', () => {
  fetch(
    'https://api.giphy.com/v1/gifs/translate?api_key=Vrdebkal4bzp47mVDJMcdjTKNDjoJifs&s=cute-frog',
    {
      mode: 'cors',
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
});
