

// // ---------------------Калькулятор-----------------


let FirstNumber = prompt('Калькулятор', 'Выберите число');
FirstNumber = parseInt(FirstNumber);
let Action = prompt('Калькулятор','Выберите действие');
let LastNumber = prompt('Калькулятор','Выберите еще раз число');
LastNumber = parseInt(LastNumber);

if (FirstNumber == '0' && Action == '/'){
  alert('Нельзя делить на 0')
}

else if (FirstNumber == '0' && Action == '*'){
  alert('Нельзя умножать на 0')
}
 
if(Action == '/'){
  alert(FirstNumber/LastNumber)
}
 else if(Action == '*'){
   alert(FirstNumber * LastNumber)
 }
else if (Action == '-') {
  alert(FirstNumber - LastNumber)
}
else if (Action == '+') {
  alert(FirstNumber + LastNumber)
}


// // // ------------------Масив с днями недели--------------------

let weeks = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье']
alert(weeks)
for(let a = 0; a<weeks.length; a++){
    if(weeks[a] == 'Вторник'){
      alert('Во вторник урок в 19-00')
    }
  else if (weeks[a] == 'Четверг'){
    alert('В четверг урокв 19-00')

  }
}

let days = prompt('Введите день недели')
switch (days) {
  case 'Понедельник':
  case 'понедельник':
  case 'Среда':
  case 'среда':
  case 'пятница':
  case 'Пятница':
  case 'Суббота':
  case 'суббота':
  case 'Воскресенье':
  case 'воскресенье':
  alert('Хорошего дня!')
    break;
  case 'Вторник' :
  case 'вторник':
  case 'Четверг':
  case 'четверг':
    alert(days + ' : Урок в 19-00')
    break;
  default:
    alert('Oops! Что-то пошло не так :(')
    break;
}


 

// // --------------------тернарный оператор--------------------


let Discount = 'Вы получили скидку 10%';
let DiscountSecond = ' Вы получили скидку 20%'; 
let Price = prompt('Введите количество товара ' )
let PriceResult = Price < 5 ?  Discount : DiscountSecond;
alert(PriceResult)




// -----------------Циклы------------------

let a = 4;
let b = 10;
let res = 0;
for(let c = a; -c<b; c++){
  res+=c;
alert(res);
}





// ---------------Login Passworld-------------


let login=prompt('Введите логин')
if(login == 'admin'){
 
}
let password = prompt('Введите пароль');
if (password = 12345){
 
}
let connect = login + password;
if(login == 'admin' && password == 12345){
  alert('Ура! Вы вошли в систему')
}
else{
  alert('Логин или пароль неверный')
}







