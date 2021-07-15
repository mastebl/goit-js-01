// === TO BOOLEAN ===
// любое строчное значение к БУЛЮ
let value = `Bla Bla Bla`;

// 1-й способ
let toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean);

// 2-й способ
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

// любое строчное число к БУЛЮ
value = `123`;

// 1-й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean);

// 2-й способ
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

// пустая строка к БУЛЮ
value = ``;

// 1-й способ
toBoolean = Boolean(value);
console.log(`пустая строка ${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных пустой строки ${value}, через конструктор Boolean(): `, typeof toBoolean);

// 2-й способ
toBoolean = !!value;
console.log(`пустая строка ${value}, через !!: `, toBoolean);
console.log(`тип данных пустой строки ${value}, через !!: `, typeof toBoolean);

// пробел к БУЛЮ
value = ` `;

// 1-й способ
toBoolean = Boolean(value);
console.log(`пробел ${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных пробел ${value}, через конструктор Boolean(): `, typeof toBoolean);

// 2-й способ
toBoolean = !!value;
console.log(`пробел ${value}, через !!: `, toBoolean);
console.log(`тип данных пробел ${value}, через !!: `, typeof toBoolean);

// число к БУЛЮ
value = `0`;

// 1-й способ
toBoolean = Boolean(value);
console.log(`число ${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean);

// 2-й способ
toBoolean = !!value;
console.log(`число ${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

// число к БУЛЮ
value = `1`;

// 1-й способ
toBoolean = Boolean(value);
console.log(`число ${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean);

// 2-й способ
toBoolean = !!value;
console.log(`число ${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

// undefined к БУЛЮ
value = undefined;

// 1-й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean);

// 2-й способ
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

// null к БУЛЮ
value = null;

// 1-й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean);

// 2-й способ
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

// NaN к БУЛЮ
value = NaN;

// 1-й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean);

// 2-й способ
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

// infinity к БУЛЮ
value = Infinity;

// 1-й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean);

// 2-й способ
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);
