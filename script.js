/* Add any JavaScript you need to this file. */
window.onload = function () {
  let mbutton = document.getElementById('mainbutton');
  let sbutton = document.getElementById('subbutton');
  let allbutton = document.getElementById('allbutton');
  let iosbutton = document.getElementById('iosbutton');
  let andbutton = document.getElementById('androidbutton');
  let menu1 = document.querySelector('.submenu').querySelector('ul').querySelectorAll('li');
  let menu2 = document.querySelector('.submenu2').querySelector('ul').querySelectorAll('li');
  let iosphone = document.querySelectorAll('.ios');
  let andphone = document.querySelectorAll('.android');

  document.getElementById('allspan').style.display = 'inline';

  function activate(arr, value) {
    for (let i = 0; i < arr.length; i++) {
      arr[i].style.display = value;
    }
  }

  mbutton.addEventListener('click', function () {
    activate(iosphone, '');
    activate(andphone, '');
    iosbutton.style.display = 'none';
    andbutton.style.display = 'none';
    allbutton.style.backgroundColor = '#191970';
    allbutton.className += ' active';
    document.getElementById('allspan').style.display = 'inline';
    document.getElementById('androidspan').style.display = 'none';
    document.getElementById('iosspan').style.display = 'none';
  });

  sbutton.addEventListener('click', function () {
    activate(iosphone, '');
    activate(andphone, '');
    iosbutton.style.display = '';
    andbutton.style.display = '';
    iosbutton.style.backgroundColor = '';
    andbutton.style.backgroundColor = '';
    allbutton.style.backgroundColor = '#00bfff';
    allbutton.className += ' active';
    document.getElementById('allspan').style.display = 'inline';
    document.getElementById('androidspan').style.display = 'none';
    document.getElementById('iosspan').style.display = 'none';
  });

  iosbutton.addEventListener('click', function () {
    activate(iosphone, '');
    activate(andphone, 'none');
    document.getElementById('iosspan').style.display = 'inline';
    document.getElementById('androidspan').style.display = 'none';
    document.getElementById('allspan').style.display = 'none';
  });

  andbutton.addEventListener('click', function () {
    activate(iosphone, 'none');
    activate(andphone, '');
    document.getElementById('androidspan').style.display = 'inline';
    document.getElementById('iosspan').style.display = 'none';
    document.getElementById('allspan').style.display = 'none';
  });

  allbutton.addEventListener('click', function () {
    activate(iosphone, '');
    activate(andphone, '');
    document.getElementById('androidspan').style.display = 'none';
    document.getElementById('iosspan').style.display = 'none';
    document.getElementById('allspan').style.display = 'inline';
  });

  mbutton.style.backgroundColor = '#191970';
  mbutton.className += 'active';
  allbutton.style.backgroundColor = '#00bfff';
  allbutton.className += 'active';
  iosbutton.style.display = 'none';
  andbutton.style.display = 'none';


  for (let i = 0; i < menu1.length; i++) {
    menu1[i].addEventListener('click', function () {
      for (let i = 0; i < menu1.length; i++) {
        if (menu1[i].className.includes('active')) {
          menu1[i].className.replace('active', '');
          menu1[i].style.backgroundColor = '';
        }
      }
      this.className = this.className + 'active';
      this.style.backgroundColor = '#191970';
    });
  }

  for (let i = 0; i < menu2.length; i++) {
    menu2[i].addEventListener('click', function () {
      for (let i = 0; i < menu2.length; i++) {
        if (menu2[i].className.includes('active')) {
          menu2[i].className.replace('active', '');
          menu2[i].style.backgroundColor = '';
        }
      }
      this.className = this.className + 'active';
      if (this.id == 'allbutton') {
        this.style.backgroundColor = '#00bfff';
      } else if (this.id == 'iosbutton') {
        this.style.backgroundColor = '#00bfff';
      } else {
        this.style.backgroundColor = '#00bfff';
      }
    });
  }

}





