"use strict";

// declairing globel variables
let DailyCalories = "X";
const inputForm = document.getElementById("inputForm");
const resaultsContainer = document.getElementById("resaultsContainer");
const cal_cal_form = document.getElementById("cal-cal-form");
const resaults = document.getElementById("resaults");

let user;

cal_cal_form.onsubmit = function (e) {
  e.preventDefault();
  let user = {
    messurement_system: document.getElementById("user_measurement_systems")
      .value,
    user_sex: document.getElementById("user_sex").value,
    user_weight: document.getElementById("user_weight").value,
    user_height: document.getElementById("user_height").value,
    user_age: document.getElementById("user_age").value,
    user_AMR: document.getElementById("activityRate").value,
  };

  // Convert inches and pounds into kilograms and CM for math
  if (user.messurement_system === "inch/pounds") {
    user.user_weight = user.user_weight / 2.205;
    user.user_height = user.user_height * 2.54;
  }

  // Establishing Base matabalic Rate
  if (user.user_sex === "Male") {
    let weightVar = 13.75 * user.user_weight;
    let heightVar = 5.003 * user.user_height;
    let ageVar = 6.755 * user.user_age;
    user.BMR = 664.7 + weightVar + heightVar - ageVar;

    // user.DC = DailyCalories;
  } else {
    let weightVar = 9.563 * user.user_weight;
    let heightVar = 1.85 * user.user_height;
    let ageVar = 4.676 * user.user_age;
    user.BMR = 655.1 + weightVar + heightVar - ageVar;
  }

  // Establishing Active metabalic rate
  if (user.user_AMR === 0) {
    user.BMR = user.BMR * 1.2;
  } else if (user.user_AMR === 1) {
    user.BMR = user.BMR * 1.375;
  } else if (user.user_AMR === 2) {
    user.BMR = user.BMR * 1.55;
  } else if (user.user_AMR === 3) {
    user.BMR = user.BMR * 1.725;
  } else if (user.user_AMR === 3) {
    user.BMR = user.BMR * 1.9;
  }

  user.BMR = Math.floor(user.BMR);

  let diets = [
    {
      string: "Gain Weight: ",
      data: `${user.BMR + 300}cal`,
    },
    {
      string: "Maintain Weight: ",
      data: `${user.BMR}cal`,
    },
    {
      string: "Mild Weight Loss: ",
      data: `${user.BMR - 250}cal`,
    },
    {
      string: "Weight Loss: ",
      data: `${user.BMR - 500}cal`,
    },
    {
      string: "Extreme Weight Loss: ",
      data: `${user.BMR - 1000}cal `,
    },
  ];

  setDisplay(diets);
};
