// genera l'HTML
const corpo = document.getElementById("corpo");
const contenitore = document.createElement("div");
corpo.appendChild(contenitore);
contenitore.classList.add('container-fluid');
const head = document.createElement("h1");
head.classList.add('row', 'pt-2', 'ps-3')
contenitore.appendChild(head);
head.innerHTML = "FontIcons";

const filtro = document.createElement("div");
filtro.classList.add('row', 'text-center', 'filtro', 'justify-content-center');
contenitore.appendChild(filtro);
const label = document.createElement("h3");
label.innerHTML = "FILTRA PER TIPO";
label.classList.add('text-white', 'pt-4', 'col-3', 'text-end')
filtro.appendChild(label);
const select = document.createElement("select");
select.classList.add('col-1');
const option1 = document.createElement("option");
option1.value = "All";
option1.innerHTML = "All";
const option2 = document.createElement("option");
option2.value = "vegetable";
option2.innerHTML = "vegetable";
const option3 = document.createElement("option");
option3.value = "animal";
option3.innerHTML = "animal";
const option4 = document.createElement("option");
option4.value = "user";
option4.innerHTML = "user";
select.append(option1, option2, option3, option4);
filtro.appendChild(select);