let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener('click', (e) => {
    const value = e.target.innerHTML;

    if (value === '=') {
      try {
        string = eval(string);
        input.value = string;
      } catch (err) {
        input.value = 'Error';
      }
    } else if (value === 'C') {
      string = "";
      input.value = string;
    } else if (value === 'CE') {
      string = string.slice(0, -1);
      input.value = string;
    } else if (value === 'x') {
      string += '*';
      input.value = string;
    } else if (value === '÷') {
      string += '/';
      input.value = string;
    } else {
      string += value;
      input.value = string;
    }
  });
});
document.addEventListener('keydown', (e) => {
  const key = e.key;

  if (
    (key >= '0' && key <= '9') ||
    ['+', '-', '*', '/', '.', '%'].includes(key)
  ) {
    string += key;
    input.value = string;
  } else if (key === 'Enter') {
    try {
      string = eval(string);
      input.value = string;
    } catch {
      input.value = 'Error';
    }
    e.preventDefault();
  } else if (key === 'Backspace') {
    string = string.slice(0, -1);
    input.value = string;
  } else if (key === 'Escape') {
    string = "";
    input.value = string;
  }
});
