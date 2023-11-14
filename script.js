var buttons = document.querySelectorAll('button')
var input = document.querySelector('#display');
buttons.forEach(function (btn){
  btn.addEventListener('click', function (){
    if(btn.innerHTML =='C') {
      input.value = ''
    }else if(btn.innerHTML == '=') {
      input.value = eval(input.value)
    }else if(btn.innerHTML == 'Backspace'){
      input.value = input.value.slice(0, -1)
    }else{
      input.value += btn.innerHTML
    }
  }); //end of click
}); //end forEach

