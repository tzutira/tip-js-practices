"use strict";

const result1 = "8" + 2;
console.log('1. "8" + 2:', result1, "| Тип:", typeof result1);

const result2 = "8" - 2;
console.log('2. "8" - 2:', result2, "| Тип:", typeof result2);

const result3 = Number("8") + 2;
console.log('3. Number("8") + 2:', result3, "| Тип:", typeof result3);

const result4 = "12" > "3";
console.log('4. "12" > "3":', result4, "| Тип:", typeof result4);

const result5 = 12 === "12";
console.log('5. 12 === "12":', result5, "| Тип:", typeof result5);

const result6 = Number("");
console.log('6. Number(""):', result6, "| Тип:", typeof result6);

const result7 = Number("text");
console.log('7. Number("text"):', result7, "| Тип:", typeof result7);

const result8 = Boolean("false");
console.log('8. Boolean("false"):', result8, "| Тип:", typeof result8);

const result9 = typeof null;
console.log("9. typeof null:", result9, "| Тип:", typeof result9);

const result10 = typeof NaN;
console.log("10. typeof NaN:", result10, "| Тип:", typeof result10);