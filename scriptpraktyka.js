
var uczenButton = document.getElementById("uczen-button");
var dziennikButton = document.getElementById("dziennik-button");
var podsumowanieButton = document.getElementById("podsumowanie-button");


uczenButton.addEventListener("click", function() {
  window.location.href = "index.html"; 
});

dziennikButton.addEventListener("click", function() {
  window.location.href = "cos.html"; 
});

podsumowanieButton.addEventListener("click", function() {
  window.location.href = "jjjj.html"; 
});


const submitButton = document.querySelector(".submit-buttons");
const studentsContainer = document.querySelector(".students-container");
const namesSummary = document.querySelector(".namesSummary");
const schoolSummary = document.querySelector(".schoolSummary");
const companySummary = document.querySelector(".companySummary");
const dateSummary = document.querySelector(".dateSummary");

let students = [];

// dziala
submitButton.addEventListener("click", function() {
    const names = namesSummary.value;
    const school = schoolSummary.value;
    const company = companySummary.value;
    const date = dateSummary.value;

    
    studentsContainer.innerHTML += `
        <p>Imiona: ${names}</p>
        <p>Szkoła: ${school}</p>
        <p>Firma: ${company}</p>
        <p>Data: ${date}</p>
    `;

    
    students.push({ names, school, company, date });
});


function addStudent() {
    const nameInput = document.querySelector("#name");
    const surnameInput = document.querySelector("#surname");
    const classInput = document.querySelector("#class");
    const yearInput = document.querySelector("#year");
    const companyInput = document.querySelector("#company");
    const startInput = document.querySelector("#start");
    const finishInput = document.querySelector("#finish");

    const student = {
        name: nameInput.value,
        surname: surnameInput.value,
        class: classInput.value,
        year: yearInput.value,
        company: companyInput.value,
        start: startInput.value,
        finish: finishInput.value,
    };

    students.push(student);

    namesSummary.innerHTML = 'Imię i nazwisko: ' + nameInput.value + " " + surnameInput.value;
    schoolSummary.innerHTML = 'Klasa ' + classInput.value + ", rok: " + yearInput.value;
    companySummary.innerHTML = 'Firma: ' + companyInput.value;
    dateSummary.innerHTML = 'Termin od: ' + startInput.value + " do: " + finishInput.value;

    nameInput.value = "";
    surnameInput.value = "";
    classInput.value = "";
    yearInput.value = "";
    companyInput.value = "";
    startInput.value = "";
    finishInput.value = "";
}

function showSummary() {
    const mySummary = document.getElementById("summary");
    const myForms = document.getElementById("forms");
    const displaySetting = mySummary.style.display;
    const summaryButton = document.getElementsByClassName("submit-buttons");

    if(displaySetting == 'block'){
        mySummary.style.display = 'none';
        myForms.style.display = 'block';
        summaryButton.innerHTML = 'Zatwierdź';
    }else{
        mySummary.style.display = 'block';
        myForms.style.display = 'none';
    }
}

submitButton.addEventListener("click", addStudent);


$(document).ready(function() {
    $("#praktykiForm").submit(function(event) {
      event.preventDefault();
  
      var dataPraktyk = $("#dataPraktyk").val();
      var dzialPraktyk = $("#dzialPraktyk").val();
      var opisDnia = $("#opisDnia").val();
  
      var danePraktykHTML = "<p><strong>Data praktyk:</strong> " + dataPraktyk + "</p>" +
                            "<p><strong>Dział praktyk:</strong> " + dzialPraktyk + "</p>" +
                            "<p><strong>Opis dnia:</strong> " + opisDnia + "</p>";
  
      
      $("#danePraktyk").append(danePraktykHTML);
  
      
      $("#praktykiForm")[0].reset();
    });
  });

