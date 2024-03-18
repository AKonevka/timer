// setTimeout = Отложенное срабатывание кода, не блокирует дальнеёшее выполнение
// сценария, таймер начинает идти только после выполения основного кода 

/*
console.log("До setTimeout")
setTimeout(() => {
    console.log("Сработал таймер на 3000 мс");
}, 3000);
console.log("После setTimeout")
setTimeout(() => {
    console.log("Сработал таймер на 1000 мс");
}, 1000);
*/

// scrypt.js:4 До setTimeout
// scrypt.js:8 После setTimeout
// scrypt.js:10 Сработал таймер на 1000 мс
// scrypt.js:6 Сработал таймер на 3000 мс

//***************************************** 

console.log("До setTimeout")
setTimeout(() => {
    console.log("Сработал таймер на 3000 мс");
}, 3000);
setTimeout(() => {
    console.log("Сработал таймер на 500 мс");
}, 500);
console.log("После setTimeout")

console.log("До цикла For")
console.time('tmr');
for (let i = 1; i < 2000000000; i++) {

    // let a = i / i;

}
console.timeEnd('tmr');
console.log("После цикла For")