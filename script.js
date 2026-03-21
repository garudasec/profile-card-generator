let form = document.querySelector("form");

let imgInput = document.querySelector("#img");
let nameInput = document.querySelector("#name");
let roleInput = document.querySelector("#role");
let infoInput = document.querySelector("#info");

let cardDisplay = document.querySelector("#card-display");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("card-appear");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src", imgInput.value);

    img.onerror = function() {
        img.src = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
    };

    let h3 = document.createElement("h3");
    h3.textContent = nameInput.value;
    let h5 = document.createElement("h5");
    h5.textContent = roleInput.value;
    let p = document.createElement("p");
    p.textContent = infoInput.value;

    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";

    delBtn.addEventListener("click", function() {
        card.remove();
    })

    profile.appendChild(img);
    card.appendChild(profile);
    
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    card.appendChild(delBtn);

    cardDisplay.appendChild(card);

    form.reset();
});