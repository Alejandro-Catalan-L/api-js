const btnAgregar = document.getElementById("btnAgregar");
const inputTarea = document.getElementById("inputTarea");
const spanTotal = document.getElementById("spanTotal"); 
const spanRealizadas = document.getElementById("spanRealizadas"); 
const divList = document.getElementById("divList");

let contadorID = 4;
let tareas = [
    { id: 1, descripcion: "Hacer el aseo de la casa", realizada: true },
    { id: 2, descripcion: "Hacer deportes", realizada: false },
    { id: 3, descripcion: "Hacer el baño", realizada: false }
];

    let agregar = () => {
        if(inputTarea.value != ''){
            tareas.push({
                id: contadorID, descripcion: inputTarea.value , realizada: false
            });
            contadorID++
            inputTarea.value = "";
            list();
        }else{
            alert("Debes describir una tarea");
            inputTarea.value = "";
        }
    };

    let list = () => {
        let tablaHTML = '<table>';
        tablaHTML += `
            <tr>
                <th>ID</th>
                <th>Tareas</th>
            </tr>`;
        tareas.forEach(tarea => {
        tablaHTML += `
            <tr>
                <td>${tarea.id}</td>
                <td>${tarea.descripcion}</td>
                <td><input type="checkbox" ${tarea.realizada ? 'checked' : ''} data-id="${tarea.id}" onchange="actualizarCheck(event)"></td>
                <td><button onclick="borrar(${tarea.id})">x</button></td>
            </tr>`;
        });
        tablaHTML += '</table>';
        spanTotal.innerHTML = tareas.length;
        checkMarcados();
        divList.innerHTML = tablaHTML;
    }

    function borrar(id) {
        tareas.splice(tareas.findIndex(tarea => tarea.id === id), 1);
        list();
    }

    function actualizarCheck(e) {
        const id = parseInt(e.target.dataset.id);
        const tarea = tareas.find(tarea => tarea.id === id);
        tarea.realizada = e.target.checked;
        checkMarcados();
    }

    function checkMarcados() {
        let contador = 0;
        tareas.forEach(tarea => {
                if (tarea.realizada) {contador++;}
            });
        return spanRealizadas.innerHTML = contador;
    }

btnAgregar.addEventListener("click", agregar);