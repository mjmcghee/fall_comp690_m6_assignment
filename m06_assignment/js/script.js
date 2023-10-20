const init = () => {
    const empForm = document.getElementById("empForm");
    empForm.addEventListener("submit", (event) => {
      event.preventDefault();
      for (let i = 0; i < (empForm.length - 1); i++) {
        console.log(`${empForm.elements[i].name}: ${empForm.elements[i].value}`);
      };
    }
  )};

init();