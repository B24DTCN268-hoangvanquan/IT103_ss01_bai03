"use strict";

const testValues = [
    "150000",
    "3.75",
    "",
    "100k",
    null,
    undefined
];

console.log("========== KIỂM THỬ ÉP KIỂU DỮ LIỆU ==========");

testValues.forEach(function (val) {
    const numberResult = Number(val);
    const unaryResult = +val;

    console.log(`
---------------------------------------------
Giá trị ban đầu: ${val}
Kiểu dữ liệu ban đầu: ${typeof val}

Number(value):
Kết quả: ${numberResult}
Kiểu dữ liệu: ${typeof numberResult}

+value:
Kết quả: ${unaryResult}
Kiểu dữ liệu: ${typeof unaryResult}
`);
});

const valueWithUnit = "100k";
const parseResult = parseInt(valueWithUnit, 10);

console.log(`
========== KIỂM TRA parseInt() ==========
Giá trị: ${valueWithUnit}
parseInt("100k", 10): ${parseResult}
Kiểu dữ liệu: ${typeof parseResult}
`);