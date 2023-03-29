// selectors
const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");
const modalChoiceBtn = document.getElementById("modal-choice-btns");
const declineBtn = document.getElementById("decline-btn");

// modal dispay after 3500 sec delay on web page...
setTimeout(function () {
  modal.style.display = "inline";
}, 3500);

// display modal
modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "";
});

// it swaps / toggle between two classes of one parent element using different CSS property
declineBtn.addEventListener("mouseenter", function () {
  modalChoiceBtn.classList.toggle("reverse");
});

// submit btn
consentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const consentFormData = new FormData(consentForm);
  const fullName = consentFormData.get("fullName"); // get the value from input field element named 'fullName'

  modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>`;

  setTimeout(function () {
    //      const uploadText = document.getElementById("upload-text"); // why not we declaring at the top becose it reads from top to bottom and we are creating the inner html in above line...
    //      uploadText.innerHTML = " Making the sale...";
    //      we can compress the above three lines  to one line....
    document.getElementById("upload-text").innerText = `
        Making the sale...`;
  }, 1500);

  setTimeout(function () {
    // same here...
    document.getElementById("modal-inner").innerHTML = `
        <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
    `;
    modalCloseBtn.disabled = false;
  }, 3000); // in ticks (``) we use {} to fill the values..
});

// to be pushed in readme file in github ⚠️
// - working on modal on webpage
// - played with postion
// - used setTimeout in js
// - preventdefault() in js
// - manipulated the html dome in js
// - ......
// - ......
