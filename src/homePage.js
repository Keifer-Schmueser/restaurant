function homePage(companyName) {
  let welcome = document.createElement('h1');
  let message = document.createElement('p');
  let img = document.createElement('img');

  welcome.innerHTML = 'Welcome to ' + companyName;

  img.src = './img.jpeg';

  message.innerHTML =
    'It may look like your average neighborhood pizza joint, but ' +
    companyName +
    ' is anything but!';

  return [welcome, img, message];
}

export default homePage;
