var btnvar1 = document.getElementById("btnh1");
var btnvar2 = document.getElementById("btnh2");
var btnvar3 = document.getElementById("btnh3");

function Toggle1() {
  //função dos botões like
  if (btnvar1.style.color == "red") {
    btnvar1.style.color = "black";
  } else {
    btnvar1.style.color = "red";
  }
}
function Toggle2() {
  if (btnvar2.style.color == "red") {
    btnvar2.style.color = "black";
  } else {
    btnvar2.style.color = "red";
  }
}
function Toggle3() {
  if (btnvar3.style.color == "red") {
    btnvar3.style.color = "black";
  } else {
    btnvar3.style.color = "red";
  }
}

const addValuesToTable = (object) => {
  //adiciona o objeto na tabela
  const initialTable = document.querySelector(".initial-table");
  object.forEach((i) => {
    let tr = document.createElement("tr"); //crio o elemento TR

    const cell1 = tr.insertCell(0); //adiciono 4 células dentro do elemento tr
    const cell2 = tr.insertCell(1);
    const cell3 = tr.insertCell(2);
    const cell4 = tr.insertCell(3);

    cell1.innerHTML = i.taste; // adiciono nas células os valores de dentro do objeto
    cell2.innerHTML = `R$${i.sixParts}`;
    cell3.innerHTML = `R$${i.eightParts}`;
    cell4.innerHTML = `${i.validDays}`;

    initialTable.appendChild(tr);
  });
};

// adiciono os objetos
(function () {
  const fixedValues = [
    //são os valores fixos
    {
      taste: "Sabor",
      sixParts: "1 Hambúrguer",
      eightParts: "2 Hambúrgueres",
      validDays: "Dias válidos",
    },
  ];

  let initialValues = [
    //valores que já estarão como exemplo
    {
      taste: "X-Tudo",
      sixParts: "20,99",
      eightParts: "22,99",
      validDays: "Seg a Dom",
    },
    {
      taste: "X-Bacon",
      sixParts: "20,00",
      eightParts: "22,00",
      validDays: "Ter a Dom",
    },
    {
      taste: "X-Salada",
      sixParts: "18,99",
      eightParts: "20,99",
      validDays: "Ter a Dom",
    },
    {
      taste: "X-Egg",
      sixParts: "17,99",
      eightParts: "19,99",
      validDays: "Seg a Dom",
    },
  ];

  addValuesToTable(fixedValues);
  addValuesToTable(initialValues);
})();

// function validar() {
//   var taste = document.getElementById("taste");
//   var sixparts = document.getElementById("six-parts");
//   var eightparts = document.getElementById("eight-parts");
//   var validdays = document.getElementById("valid-days");

//   if (taste.value == "") {
//     alert("Sabor não informado");
//     taste.focus();
//     return;
//   }

//   if (sixparts.value == "") {
//     alert("Valor de 1 Hambúrguer não informado");
//     taste.focus();
//     return;
//   }

//   if (eightparts.value == "") {
//     alert("Valor de 2 Hambúrgueres não informado");
//     taste.focus();
//     return;
//   }

//   if (validdays.value == "") {
//     alert("Dias não informados");
//     taste.focus();
//     return;
//   }

//   alert("Formulário enviado!");
//   formulario.submit();
// }

//Função do botão Enviar
(function enviar() {
  const submitBtn = document.querySelector("#submit");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const taste = document.querySelector("#taste").value;
    const sixParts = document.querySelector("#six-parts").value;
    const eightParts = document.querySelector("#eight-parts").value;
    const validDays = document.querySelector("#valid-days").value;

    if (!taste || !sixParts || !eightParts || !validDays) {
      alert("Sabor não informado");
    }

    if (taste && sixParts && eightParts && validDays) {
      addValuesToTable([{ taste, sixParts, eightParts, validDays }]);
    }
  });
})();
