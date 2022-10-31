// set display for calculator app resaults

setDisplay = function (array) {
  let dataArray = [];
  let i = 0;

  // generating displays for each of the pieces of content that need it
  while (i < array.length) {
    let dataSetName;
    let dataSetValue;
    let dataSet = document.createElement("li");
    // Adding classes
    dataSet.classList.add("calorie-set", "grid", "grid--2-cols");
    // Grabbing the content from the array being passed in
    dataSetName = array[i].string;
    dataSetValue = array[i].data;
    // Creating Nodes
    let datasetNameNode = document.createElement("h2");
    datasetNameNode.textContent = dataSetName;
    let dataSetValueNode = document.createElement("h2");
    // Appending nodes
    dataSetValueNode.textContent = dataSetValue;
    dataSet.append(datasetNameNode, dataSetValueNode);
    // Pushing to exported array
    dataArray.push(dataSet);
    i++;
  }
  // exporting array
  dataArray.forEach((data) => {
    resaults.appendChild(data);
  });

  inputForm.classList.add("fadeOut");
  setTimeout(() => {
    inputForm.classList.add("hidden");
    resaultsContainer.classList.remove("hidden");
    resaultsContainer.classList.add("fadeIn");

    setTimeout(() => {
      inputForm.classList.remove("fadeOut");
      resaultsContainer.classList.remove("fadeIn");
    }, 499);
  }, 499);
};

backToCal = function () {
  resaultsContainer.classList.add("fadeOut");
  setTimeout(() => {
    resaultsContainer.classList.add("hidden");
    inputForm.classList.remove("hidden");
    inputForm.classList.add("fadeIn");

    setTimeout(() => {
      resaultsContainer.classList.remove("fadeOut");
      inputForm.classList.remove("fadeIn");
    }, 499);
  }, 499);

  resaults.innerHTML = " ";
};
