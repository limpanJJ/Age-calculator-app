"use strict";

// Selectors
const result = document.querySelector(".calculator__result");
const inputDay = document.querySelector("#input__day");
const inputMonth = document.querySelector("#input__month");
const inputYear = document.querySelector("#input__year");

const btnCalculate = document.querySelector(".btn--calculate-age");

const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

console.log(date.getDate(), date.getMonth(), year);

const calculateAge = function () {
  const dayValue = parseInt(inputDay.value);
  const monthValue = parseInt(inputMonth.value);
  const yearValue = parseInt(inputYear.value);

  const birthDate = new Date(`${yearValue}-${monthValue}-${dayValue}`);

  const sum = date - birthDate;
  const resultYear = Math.abs(sum / (1000 * 60 * 60 * 24 * 365));
  const resultMonth = Math.abs(sum / (1000 * 60 * 60 * 24 * 365));
  const result = parseInt(resultYear);

  const currentMonth = date.getMonth();
  const newMonth = Math.abs(currentMonth - monthValue);
  console.log(dayValue + monthValue + yearValue, newMonth);
  console.log(resultMonth);
  console.log(result);
};
btnCalculate.addEventListener("click", calculateAge);

console.log(new Date());
