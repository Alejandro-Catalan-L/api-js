const btnConvertir = document.getElementById('btnConvertir');
const EntradaPCLP = document.getElementById('EntradaPCLP');
const seleccionmoneda = document.getElementById('seleccionmoneda');
const spanTotal = document.getElementById('spanTotal');
const ctx = document.getElementById('myChart');
const apiUrl = 'https://mindicador.cl/api/';
let myChart;

agregarOpcionDesdeAPI();
btnConvertir.addEventListener('click', convertir)


async function convertir(){
    if(EntradaPCLP.value != ''){
        const valorMoneda = await buscarMoneda(seleccionmoneda.value);
        let valorCovertido = (EntradaPCLP.value / valorMoneda).toFixed(1);
        spanTotal.innerHTML = `Resultado: $${valorCovertido}`;
    }else{
        alert("Debes ingresar un monto a convertir");
        EntradaPCLP.value = "";
    }
}

async function buscarMoneda(moneda) {
    try {
        const resConvertir = await fetch(`${apiUrl}${moneda}`);
        
        if (!resConvertir.ok) {
            throw new Error(`Error al obtener datos de la API: ${resConvertir.statusText}`);
        }
        
        const dataConvertir = await resConvertir.json();
        const { serie } = dataConvertir;
        const grafico = dataGrafico(serie.slice(0, 10).reverse());

        if (myChart) {
            myChart.data.labels = grafico.fechaGrafico;
            myChart.data.datasets = grafico.infoGrafico.map(({ label, borderColor, valorGrafico }) => ({
                label,
                borderColor,
                data: valorGrafico
            }));
            myChart.update();
        } else {
            renderGrafico(grafico);
        }

        const [{ valor: valorMoneda }] = serie;
        return valorMoneda;

    } catch (error) {
        alert(`Error al obtener datos de la API: buscarMoneda: ${error}`);
    }
}

async function agregarOpcionDesdeAPI() {
    try {

        const res = await fetch(apiUrl);
        const data = await res.json();

        for (const [codigo, info] of Object.entries(data)) {
            if (codigo && info.nombre) {
                const option = document.createElement('option');
                option.value = codigo;
                option.textContent = `${info.nombre}`;
                seleccionmoneda.appendChild(option);
            }
        }
    } catch (error) {
        alert('Error al obtener datos de la API: agregarOpcionDesdeAPI', error);
    }
}

function renderGrafico(grafico) {
    const configurar = {
        type: "line",
        data: {
            labels: grafico.fechaGrafico,
            datasets: grafico.infoGrafico.map(({ label, borderColor, valorGrafico }) => ({
                label,
                borderColor,
                data: valorGrafico
            }))
        }
    };

    if (myChart) {
        myChart.destroy();
    }
    ctx.style.backgroundColor = "whitesmoke";
    myChart = new Chart(ctx, configurar);
}

function dataGrafico(serie){
    const fechaGrafico = serie.map(({fecha}) => formatoFecha(fecha));
    const valorGrafico = serie.map(({valor}) => valor);
    const infoGrafico = [
        {
            label: "Historial",
            borderColor: "rgb(255, 99, 132)",
            valorGrafico
        },
    ];
    return {fechaGrafico, infoGrafico};
}


function formatoFecha(date){
    date = new Date(date);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return `${year}-${month}-${day}`;
}