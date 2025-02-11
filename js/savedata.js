function saveDonate(){
    var input = Number(localStorage.getItem("value"));
    var partner = Number(localStorage.getItem("partner"));
    const form = document.getElementById('donate');
    const formData = new FormData(form);
    const selectedValue = formData.get('check-substitution-2');

    const name = formData.get('name');
    const email = formData.get('email');
    const number = formData.get('number');
    const message = formData.get('message');


    if (name == "" || selectedValue == null || email == "" || number == "" || message == "") {
        alert("Falta campos por llenar");
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      } else {
        alert("Email incorrecto");
        return false;
    }

    if (selectedValue) {
        document.getElementById('output')
            input = input + Number(selectedValue);

    }
    partner = partner + 1;
    localStorage.setItem("value", input);
    localStorage.setItem("partner", partner);
    alert("Se ha realizado la donación exitósamente");
}

function saveReward(){
    var input = Number(localStorage.getItem("value"));
    var partner = Number(localStorage.getItem("partner"));
    const form = document.getElementById('reward');
    const formData = new FormData(form);
    const selectedValue = formData.get('check-substitution-2');

    const name = formData.get('name');
    const email = formData.get('email');
    const number = formData.get('number');
    const message = formData.get('message');


    if (name == "" || selectedValue == null || email == "" || number == "" || message == "") {
        alert("Falta campos por llenar");
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      } else {
        alert("Email incorrecto");
        return false;
    }

    if (selectedValue) {
        document.getElementById('output')
            input = input + Number(selectedValue);

    }
    partner = partner + 1;
    localStorage.setItem("value", input);
    localStorage.setItem("partner", partner);
    alert("Se ha realizado la donación exitósamente");
}

function saveRoyalty(){
    var input = Number(localStorage.getItem("value"));
    var partner = Number(localStorage.getItem("partner"));
    const form = document.getElementById('royalty');
    const formData = new FormData(form);
    const selectedValue = formData.get('value');

    const name = formData.get('name');
    const email = formData.get('email');
    const number = formData.get('number');
    const message = formData.get('message');


    if (name == "" || selectedValue == 0 || email == "" || number == "" || message == "") {
        alert("Falta campos por llenar");
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      } else {
        alert("Email incorrecto");
        return false;
    }

    input = input + Number(selectedValue);

    partner = partner + 1;
    localStorage.setItem("value", input);
    localStorage.setItem("partner", partner);
    alert("Se ha realizado la donación exitósamente");
}

function saveForm(){
    const form = document.getElementById('form');
    const formData = new FormData(form);

    const name = formData.get('name');
    const email = formData.get('email');
    const number = formData.get('number');
    const message = formData.get('message');
    const description = formData.get('description');


    if (name == "" || email == "" || number == "" || message == "" || description == "") {
        alert("Falta campos por llenar");
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      } else {
        alert("Email incorrecto");
        return false;
    }
    alert("Se tomará en cuenta su solicitud!");
}