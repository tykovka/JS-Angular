//Task1
$button = document.querySelector('button');
$button.addEventListener('click', () => {
  return fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then((users) => {
      console.log(users);
    });
});

//Task4
str = 'Sed ut perspiciatis unde omnis:\'iste natus error sit\' don\'t some';
str = str.replace(/['']+/g, '"');
console.log(str);

//Task5
str = 'Sed ut perspiciatis unde omnis:\'iste natus error sit\' don\'t some';
str = str.replace(/(?!s'|[a-z]'[a-z])([\s\S])'|^'/g, '$1"')
console.log(str);