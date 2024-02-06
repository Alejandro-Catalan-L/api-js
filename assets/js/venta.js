// se declara las variales
const sale = document.getElementById("venta11");
let ifSmokeSale, ifPetSale, templateSale = '';

// se Declara los arreglos con los objetos (Propiedades) para la venta
const propertiesSales = [
    {
        picture: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        title: 'Luxury apartment in exclusive area',
        description: 'This luxury apartment is located in an exclusive area',
        address: '123 Luxury Lane, Prestige Suburb, CA 45678',
        room: 4,
        bath: 4,
        price: '5.000',
        smoke: false,
        pet: false
    },
    {
        picture: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        title: 'Cozy apartment in the mountains',
        description: 'This cozy apartment is located on top of a mountain with stunning views',
        address: '789 Mountain Road, Summit Peaks, CA 23456',
        room: 2,
        bath: 1,
        price: '1.200',
        smoke: true,
        pet:true
    },
    {
        picture: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        title: 'Luxury penthouse with panoramic terrace',
        description: 'This luxury penthouse offers a panoramic terrace with spectacular views',
        address: '567 Skyline Avenue, Skyview City, CA 56789',
        room: 3,
        bath: 3,
        price: '4.500',
        smoke: false,
        pet: true
    },
]

for(const propertiesSale of propertiesSales){
    if(propertiesSale.smoke === true){
        ifSmokeSale = '<p class="text-success"><i class="fas fa-smoking"></i> Smoking Allowed </p>'
    }else{
        ifSmokeSale = '<p class="text-danger"><i class="fas fa-smoking-ban"></i> Smoking is Not Allowed </p>'
    }

    if(propertiesSale.pet === true){
        ifPetSale = '<p class="text-success"><i class="fas fa-paw"></i> Pets Permitted</p>'
    }else{
        ifPetSale = '<p class="text-danger"> <i class="fa-solid fa-ban"></i> Pets is Not Permitted</p>'
    }

    templateSale += `
        <div class="col-md-4 mb-4">
            <div class="card">
              <img src= ${propertiesSale.picture} class="card-img-top" alt="Imagen del departamento"/>
              <div class="card-body">
                <h5 class="card-title"> ${propertiesSale.title} </h5>
                <p class="card-text"> ${propertiesSale.description} </p>
                <p><i class="fas fa-map-marker-alt"></i> ${propertiesSale.address} </p>
                <p><i class="fas fa-bed"></i> ${propertiesSale.room} Habitaciones | <i class="fas fa-bath"></i> ${propertiesSale.bath} Baños</p>
                <p><i class="fas fa-dollar-sign"></i> ${propertiesSale.price}</p>
                ${ifSmokeSale}
                ${ifPetSale}
              </div>
            </div>
        </div>
    `
}
    sale.innerHTML = templateSale;