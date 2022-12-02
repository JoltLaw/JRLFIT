// !Accurate Percentages still being tested!

// Ultra Heavy = 95%

// Heavy = 87%

// Moderate = 80%

// light = 75%

/* 3 Sets: Moderate Weight  8reps, Heavy Weight  5reps, Moderate Weight  8reps
   4 Sets: Moderate Weight  8reps, Heavy Weight  5reps, Heavy Weight  5reps, Moderate Weight  8reps
   5 Sets: Moderate Weight  8reps, Heavy Weight  5reps, Ultra Heavy Weight  2reps ,Heavy Weight 5reps, Moderate Weight  8reps
   6 Sets: Light Weight 10reps, Moderate Weight  8reps, Heavy Weight  5reps, Ultra Heavy Weight  2reps ,Heavy Weight 5reps, Moderate Weight  8reps
   7 Sets: Light Weight 10reps, Moderate Weight  8reps, Heavy Weight  5reps, Ultra Heavy Weight  2reps ,Heavy Weight 5reps, Moderate Weight  8reps, Light Weight 10reps */

const weightCal = (setType, oneRep, MS) => {
  switch (setType) {
    case 0:
      return {
        string: "Light weight",
        data: [(reps = `10 Repetitions`), (weight = ` ${oneRep * 0.75} ${MS}`)],
      };
    case 1:
      return {
        string: "Moderate weight",
        data: [(reps = `8 Repetitions`), (weight = ` ${oneRep * 0.8} ${MS}`)],
      };
    case 2:
      return {
        string: "Heavy weight",
        data: [(reps = `5 Repetitions`), (weight = ` ${oneRep * 0.87} ${MS}`)],
      };
    case 3:
      return {
        string: "Ultra heavy weight",
        data: [(reps = `3 Repetitions`), (weight = ` ${oneRep * 0.95} ${MS}`)],
      };
  }
};

const calculateSets = (setType, oneRep, MS) => {
  const Scheme = [];
  if (setType === 0) {
    let setOne = weightCal(1, oneRep, MS);
    let setTwo = weightCal(2, oneRep, MS);
    let setThree = weightCal(1, oneRep, MS);
    Scheme.push(setOne, setTwo, setThree);
  } else if (setType === 1) {
    let setOne = weightCal(1, oneRep, MS);
    let setTwo = weightCal(2, oneRep, MS);
    let setThree = weightCal(2, oneRep, MS);
    let setFour = weightCal(1, oneRep, MS);
    Scheme.push(setOne, setTwo, setThree, setFour);
  } else if (setType === 2) {
    let setOne = weightCal(1, oneRep, MS);
    let setTwo = weightCal(2, oneRep, MS);
    let setThree = weightCal(3, oneRep, MS);
    let setFour = weightCal(2, oneRep, MS);
    let setFive = weightCal(1, oneRep, MS);
    Scheme.push(setOne, setTwo, setThree, setFour, setFive);
  } else if (setType === 3) {
    let setOne = weightCal(0, oneRep, MS);
    let setTwo = weightCal(1, oneRep, MS);
    let setThree = weightCal(2, oneRep, MS);
    let setFour = weightCal(3, oneRep, MS);
    let setFive = weightCal(2, oneRep, MS);
    let setSix = weightCal(1, oneRep, MS);
    Scheme.push(setOne, setTwo, setThree, setFour, setFive, setSix);
  } else if (setType === 4) {
    let setOne = weightCal(0, oneRep, MS);
    let setTwo = weightCal(1, oneRep, MS);
    let setThree = weightCal(2, oneRep, MS);
    let setFour = weightCal(3, oneRep, MS);
    let setFive = weightCal(2, oneRep, MS);
    let setSix = weightCal(1, oneRep, MS);
    let setSeven = weightCal(0, oneRep, MS);
    Scheme.push(setOne, setTwo, setThree, setFour, setFive, setSix, setSeven);
  }
  return Scheme;
};

pyr_cal_form.onsubmit = function (e) {
  e.preventDefault();

  let factors = {
    MS: document.getElementById("user_measurement_systems").value,
    Movment: document.getElementById("user_Movement").value,
    ORP: document.getElementById("user_ORP").value,
    NOS: document.getElementById("numberOfSets").value,
  };

  const sets = parseInt(factors.NOS);


  const Scheme = calculateSets(sets, factors.ORP, factors.MS);
  

  setDisplay(Scheme);

  // console.log(factors);
};
