// incr/decr pre/post
// let a = 1;
// console.log(++a);//prefix increment //2

// let b = 1;
// console.log(b++);//postfix increment //1

// let c = 1;
// console.log(--c);//prefix decrement //0

// let d = 1;
// console.log(d--);//postfix decrement //1

// const date = new Date();
// const currentHour = date.getHours();

// switch(true) {
//         case currentHour >= 5 && currentHour < 12:
//            console.log('Доброго ранку!')
//            break;
//         default:
//            console.log('erorr');
//            break;
// }

// let arr = ['w', 'r', 4];
// console.log(arr.length);

//loops, function

//debugging
// Помилки бувають:
// -синтаксичні
// -логічні
//

// Як дебажити
//1. Валідатори - jslint.com | linter
//2. console.log() - вводити проміжні логи, щоб виправити помилку
// console.log() не зупиняє потік коду
//3. debugger keyword
//4. breakpoints - в браузері, в панелі розробника на номерах рядка
// закріплювати сині марки

// Типи помилок
// -evolError
// -синтаксичні -
// -референс(або рантайм) помилка - синтаксично все ок, але тоді
//  коли код запускається то ця помилка виникає. Не задекларовано змінні, не оголошено змінні.
// -Логічна - помилки не вибиваються в консолі, на рівні логіки.
// -TypeError
// -URIError

//!!!Якщо є синтаксичні помилки то до референс помилок діло не дойде.

//Конструкіція Try..catch - вона для того щоб якщо уривок мого коду
// трашниця, то користувачу виведе тип помилки
// try {
//     //code run - якщо все ок то працює тільки ця.
//     //Якщо в цьому блоці є помилка то запускається блок catch
// } catch (error) {
//     // console.log(exception.name);
//     // console.log(exception.message);
//     // console.log(exception.steck);
// }

// Створюємо помилки
// throw new Error('підключіться до мережі');
// сров
// ре сров - перекидка

// try {
// } catch (error) {
// } finally {
//     //виконується завжди навіть коли є return і швидше ніж return. Застосовується рідко
// }

// Почитати статтю яку він скинув

//hw4 task-1

// function calcRectangleArea(width, height) {
//   s = width * height;
//   console.log(`Площа прямокутника = ${s}`);
// }

// try {
//   calcRectangleArea(5, "a");
// } catch (exception) {
//   if (isNaN(s)) {
//     console.log("1");
//     throw new Error("Введіть число!");
//   }
// }


//less 6
//task-1

