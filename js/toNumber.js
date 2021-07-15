// === TO NUMBER ===
// любое строчное значение к числу
let value = `Bla Bla Bla`;

// 1-й способ
let toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber);

// 2-й способ
toNumber = + value;
console.log(`${value}, через унарный +: `, toNumber);
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);

// строчное число к числу
value = `123`;
// 1-й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber);

// 2-й способ
toNumber = + value;
console.log(`${value}, через унарный +: `, toNumber);
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);

// пустая строка к числу
value = ``;
// 1-й способ
toNumber = Number(value);
console.log(`пустая строка ${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных пустой строки ${value}, через конструктор Number(): `, typeof toNumber);

// 2-й способ
toNumber = + value;
console.log(`пустая строка ${value}, через унарный +: `, toNumber);
console.log(`тип данных пустой строки ${value}, через унарный +: `, typeof toNumber);


// строка с пробелом (не пкустая) к числу
value = ` `;
// 1-й способ
toNumber = Number(value);
console.log(`строка с пробелом ${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных строки с пробелом ${value}, через конструктор Number(): `, typeof toNumber);

// 2-й способ
toNumber = + value;
console.log(`строка с пробелом ${value}, через унарный +: `, toNumber);
console.log(`тип данных строки с пробелом ${value}, через унарный +: `, typeof toNumber);

// Булевое (логическое) true к числу
value = true;
// 1-й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber);

// 2-й способ
toNumber = +value;
console.log(`${value}, через конкатенацию: `, toNumber);
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);

// Булевое (логическое) false к числу
value = false;
// 1-й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber);

// 2-й способ
toNumber = +value;
console.log(`${value}, через конкатенацию: `, toNumber);
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);

// Undefined к числу
value = undefined;
// 1-й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber);

// 2-й способ
toNumber = +value;
console.log(`${value}, через конкатенацию: `, toNumber);
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);

// null к числу
value = null;
// 1-й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber);

// 2-й способ
toNumber = +value;
console.log(`${value}, через конкатенацию: `, toNumber);
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);
