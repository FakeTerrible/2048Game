function Listener({ move: moveFn, start: startFn }) {
  window.addEventListener('keyup', function(e) {
    switch (e.keyCode) {
      case 38:
        moveFn({ row: -1, column: 0 });
        break;
      case 37:
        moveFn({ row: 0, column: -1 });
        break;
      case 39:
        moveFn({ row: 0, column: 1 });
        break;
      case 40:
        moveFn({ row: 1, column: 0 });
        break;
    }
  });
  const Up = document.querySelector('.up');
  const Down = document.querySelector('.down');
  const Left = document.querySelector('.left');
  const Right = document.querySelector('.right');

  Up.addEventListener('click',()=>{
    moveFn({ row: -1, column: 0 });
  });

  Down.addEventListener('click',()=>{
    moveFn({ row: 1, column: 0 });
  });

  Left.addEventListener('click',()=>{
    moveFn({ row: 0, column: -1 });
  });

  Right.addEventListener('click',()=>{
    moveFn({ row: 0, column: 1 });
  });

  const buttons = document.querySelectorAll('button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      startFn();
    });
  }
}
