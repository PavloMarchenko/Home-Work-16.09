


// 1.  Знайдіть суму всіх цифр від 1 до 100.

// let sum = 0;

// for (let i = 0; i <= 100; i++) {
//   sum += i;
// }
//   console.log(sum);




// 2.  Є масив [1, 2, 3, 4, 5]. З допомогою  цикла for вивести всі елементи на екран.

// let numbers = [1, 2, 3, 4, 5];

// for (i = 0; i < number.length; i++) {
//   alert(number[i]);
// }




// 3. Є масив [-1, 22, 3, 44, 5]. Виведіть максимальне значення

// let arr = [-1, 22, 3, 44, 5];
// console.log(Math.max(...arr))





// 4. Попросити юзера ввести 8 чисел і скільки він ввів додатніх, відємних та нулів. Вивести статистику на екран. Також досмтатньо тільки 1 змінної для отримання даних від юзера. 

// let countZero = 0;
// let countPositive = 0;
// let countNegative = 0;


// for (let i = 0; i < 8; i++) {
//   let inputNumb = +prompt('Введіть будь яке число');
//   if (inputNumb < 0) {
//     countNegative++
//   } else if (inputNumb > 0) {
//     countPositive++
//   } else {
//     countZero++
//   }
// }

// alert(`${countZero}, ${countPositive}, ${countNegative}`);



// 5. Надрукуйте табличку множення для числа  8 від 1 до 9. 8 х 1 = 8

// let result = [];
// let target = 8;

// for (let i = 1; i <= 9; i++) {
//   result.push(target * i);
// }

// console.log(result);



// 6. Є масив з елементами 2, 5, 9, 15, 0, 4. З допомогою цикла for і оператора if вивести на екран цифри, які більше 3-х, але менше 10.

// let arrNumbers = [2, 5, 9, 15, 0, 4 ];

// for (i = 0; i < arrNumbers.length; i++) {
//   if  (arrNumbers[i] > 3 && arrNumbers[i] < 10) {
//     alert(arrNumbers[i]);
//   }
// }



// 7. Створити калькулятор який буде зациклений. Запитати у юзера 2 числа та знак , провести математичну операцію, далі вивести результат і спитатись чи хоче юзер повторити?

// let next = true;

// while (next) {
//   let firstNumber = +prompt('ВВедіть перше значення');
//   let secondNumber = +prompt('ВВедіть друге значення');
//   let mathSign = prompt('Введіть знак математичної операції');


//   switch (mathSign) {
//     case '+':
//       alert(firstNumber + secondNumber);
//       break;

//       case '-':
//       alert(firstNumber - secondNumber);
//       break;

//       case '*':
//       alert(firstNumber * secondNumber);
//       break;

//       case '/':
//       alert(firstNumber / secondNumber);
//       break;

//       default:
//         mathSign = aleret(' Ви ввели не математичний знак');
//   }
//   next = confirm('Ви хочете повторити?');

// }

