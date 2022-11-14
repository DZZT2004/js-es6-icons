// array dati
const array = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// genera l'HTML
// header
const corpo = document.getElementById("corpo");
const contenitore = document.createElement("div");
corpo.appendChild(contenitore);
contenitore.classList.add('container-fluid');
const head = document.createElement("h1");
head.classList.add('row', 'pt-2', 'ps-3')
contenitore.appendChild(head);
head.innerHTML = "FontIcons";
// filtro
const filtro = document.createElement("div");
filtro.classList.add('row', 'text-center', 'filtro', 'justify-content-center');
contenitore.appendChild(filtro);
const label = document.createElement("h3");
label.innerHTML = "FILTRA PER TIPO";
label.classList.add('text-white', 'pt-4', 'col-3', 'text-end')
filtro.appendChild(label);
const select = document.createElement("select");
select.classList.add('col-1', 'selector');
const option1 = document.createElement("option");
option1.value = "all";
option1.innerHTML = "&#10003; All";
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
select.addEventListener('change', ()=>{
	console.log("iniziato");
	const x = document.querySelector(".selector");
	const arrAll = document.querySelectorAll(".carta");
	switch(x.value){
		case "all":
			console.log("all");
			arrAll.forEach(element => {
				element.classList.remove('d-none');
			});
			option1.innerHTML = '&#10003; all';
			option2.innerHTML = 'vegetable';
			option3.innerHTML = 'animal';
			option4.innerHTML = 'user';
			main.classList.remove('justify-content-between');
			main.classList.add('justify-content-start');
			break;
		case "vegetable":
			console.log("vegetable");
			arrAll.forEach(element => {
				if(element.classList.contains("animal") || element.classList.contains("user")){
					element.classList.add('d-none');
				}else{
					element.classList.remove('d-none');
				}
			});
			option1.innerHTML = 'all';
			option2.innerHTML = '&#10003; vegetable';
			option3.innerHTML = 'animal';
			option4.innerHTML = 'user';
			main.classList.remove('justify-content-start');
			main.classList.add('justify-content-between');
			break;
		case "animal":
			console.log("animal");
			arrAll.forEach(element => {
				if(element.classList.contains("vegetable") || element.classList.contains("user")){
					element.classList.add('d-none');
				}else{
					element.classList.remove('d-none');
				}
			});
			option1.innerHTML = 'all';
			option2.innerHTML = 'vegetable';
			option3.innerHTML = '&#10003; animal';
			option4.innerHTML = 'user';
			main.classList.remove('justify-content-between');
			main.classList.add('justify-content-start');
			break;
		case "user":
			console.log("user");
			arrAll.forEach(element => {
				if(element.classList.contains("vegetable") || element.classList.contains("animal")){
					element.classList.add('d-none');
				}else{
					element.classList.remove('d-none');
				}
			});
			option1.innerHTML = 'all';
			option2.innerHTML = 'vegetable';
			option3.innerHTML = 'animal';
			option4.innerHTML = '&#10003; user';
			main.classList.remove('justify-content-start');
			main.classList.add('justify-content-between');
			break;
	}

});

// main con tutte le icone
const main = document.createElement("div");
main.classList.add('row', 'icone', 'justify-content-start', 'p-4');
contenitore.appendChild(main);
array.forEach((element, index, array) => {
    var iconaContainer = document.createElement("div");
    iconaContainer.classList.add('col-2', 'row-column', 'carta', 'pt-4');
    var icona = document.createElement("i");
    icona.classList.add('icona', 'fa-solid', 'text-center', array[index].prefix + array[index].name)
	switch(array[index].color){
		case "orange":
			icona.classList.add('arancione');
			iconaContainer.classList.add('animal');
			break;
		case "green":
			icona.classList.add('green');
			iconaContainer.classList.add('vegetable');
			break;
		case "blue":
			icona.classList.add('blu');
			iconaContainer.classList.add('user');
			break;
	}
    iconaContainer.appendChild(icona);
    var nome = document.createElement("span");
    nome.innerHTML = array[index].name.toUpperCase();
    iconaContainer.appendChild(nome);
    main.appendChild(iconaContainer);
});