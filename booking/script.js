const name = [document.getElementById("name-input"), document.getElementById("name-placeholder")];
const art = [document.getElementById("artform-input"), document.getElementById("artform-placeholder")];
const amount = [document.getElementById("amount-input"), document.getElementById("amount-placeholder")];
const details = [document.getElementById("details-input"), document.getElementById("details-placeholder")];

const all_inputs = [name, art, amount, details];

all_inputs.forEach((i) => {
  const [f, p] = i;
  if (f.value !== "") {
    p.style.display = "none";
  }
  f.addEventListener("focusin", (e) => {
    if (f.value === "") {
      p.style.display = "none";
    }
  });

  f.addEventListener("focusout", (e) => {
    if (f.value === "") {
      p.style.display = "block";
    } else {
      p.style.display = "none";
    }
  });

  f.addEventListener("change", (e) => {
    if (f.value === "") {
      p.style.display = "block";
    } else {
      p.style.display = "none";
    }
  });
});

const faq1 = document.getElementById("faq-1");
const faq2 = document.getElementById("faq-2");
const faq1_arrow = document.getElementById("faq-1-arrow");
const faq2_arrow = document.getElementById("faq-2-arrow");
const faq1_p = document.getElementById("faq-1-p");
const faq2_p = document.getElementById("faq-2-p");

let faq1_open = false;
let faq2_open = false;

faq1_p.style.height = "0px";
faq1_p.style.display = "none";
faq1_p.style.opacity = "0";

faq1.addEventListener("click", (e) => {
  if (faq1_open) {
    faq1_arrow.setAttribute("transform", "rotate(0)");
    faq1_arrow.animate([{
        transform: 'rotate(180deg)'
      },
      {
        transform: 'rotate(360deg)'
      }
    ], 200);

    faq1_p.style.height = "0px";
    faq1_p.style.display = "none";
    faq1_p.style.opacity = "0";
    faq1_open = false;
  } else {
    faq1_arrow.setAttribute("transform", "rotate(180)");
    faq1_arrow.animate([{
        transform: 'rotate(0deg)'
      },
      {
        transform: 'rotate(180deg)'
      }
    ], 200);


    faq1_p.style.display = "block";
    faq1_p.style.height = "46px";
    faq1_p.style.opacity = "1";
    faq1_open = true;
  }
});



faq2_p.style.height = "0px";
faq2_p.style.display = "none";
faq2_p.style.opacity = "0";
faq2.addEventListener("click", (e) => {
  if (faq2_open) {
    faq2_arrow.setAttribute("transform", "rotate(0)");
    faq2_arrow.animate([{
        transform: 'rotate(180deg)'
      },
      {
        transform: 'rotate(360deg)'
      }
    ], 200);

    faq2_p.style.height = "0px";
    faq2_p.style.display = "none";
    faq2_p.style.opacity = "0";
    faq2_open = false;
  } else {
    faq2_arrow.setAttribute("transform", "rotate(180)");
    faq2_arrow.animate([{
        transform: 'rotate(0deg)'
      },
      {
        transform: 'rotate(180deg)'
      }
    ], 200);


    faq2_p.style.display = "block";
    faq2_p.style.height = "46px";
    faq2_p.style.opacity = "1";
    faq2_open = true;
  }
});
