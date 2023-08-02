function validate(evt) {
  var theEvent = evt || window.event;

  // Handle paste
  if (theEvent.type === "paste") {
    key = event.clipboardData.getData("text/plain");
  } else {
    // Handle key press
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
  }
  var regex = /[0-9]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

//form
const getName = document.getElementById("name");
const getNpm = document.getElementById("Npm");
const getEmail = document.getElementById("email");
const getHandphone = document.getElementById("handphone");
const getSemester = document.getElementById("semester");
const getIpk = document.getElementById("Ipk");
const getBeasiswa = document.getElementById("beasiswa");
const getFile = document.getElementById("fileInput");
const form = document.getElementById("form");
const btndaftar = document.querySelector("form button[type='submit']");
const btnbatal = document.getElementById("btnbatal");

// Add an event listener to monitor changes in the IPK value
getIpk.addEventListener("input", () => {
  const ipkValue = parseFloat(getIpk.value);
  if (ipkValue < 3) {
    btndaftar.disabled = true;
  } else {
    btndaftar.disabled = false;
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const npmValue = getNpm.value;

  // Check if the NPM already exists in sessionStorage
  if (sessionStorage.getItem("myNpm") === JSON.stringify(npmValue)) {
    alert("NPM already exists. Cannot add duplicate data.");
    return; // Stop processing the form submission
  }

  sessionStorage.setItem("myName", JSON.stringify(getName.value));
  sessionStorage.setItem("myNpm", JSON.stringify(getNpm.value));
  sessionStorage.setItem("myEmail", JSON.stringify(getEmail.value));
  sessionStorage.setItem("myHandphone", JSON.stringify(getHandphone.value));
  sessionStorage.setItem("mySemester", JSON.stringify(getSemester.value));
  sessionStorage.setItem("myIpk", JSON.stringify(getIpk.value));
  sessionStorage.setItem("myBeasiswa", JSON.stringify(getBeasiswa.value));
  sessionStorage.setItem("myFile", JSON.stringify(getFile.files[0].name));

  const users = JSON.parse(sessionStorage.getItem("myUser")) || [];
  users.push({
    myName: getName.value,
    myNpm: getNpm.value,
    myEmail: getEmail.value,
    myHandphone: getHandphone.value,
    mySemester: getSemester.value,
    myIpk: getIpk.value,
    myBeasiswa: getBeasiswa.value,
    myFile: getFile.files[0].name,
  });
  sessionStorage.setItem("myUser", JSON.stringify(users));

  window.location.href = "nextpage.html";
});

btndaftar.addEventListener("click", () => {
  const ipkValue = parseFloat(getIpk.value);
  if (ipkValue < 3) {
    alert("Mohon maaf, IPK Minimum yang dibutuhkan adalah senilai 3");
    // Prevent form submission if IPK is below 3
    event.preventDefault();
  }
});

btnbatal.addEventListener("click", () => {
  window.location.href = "https://www.google.com";
});
