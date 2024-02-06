// se declara las variales con las rutas
const rent = document.getElementById("renta11");
let ifSmokeRent, ifPetRent, templateRent = '';

// se Declara los arreglos con los objetos (Propiedades) para la Renta
const propertiesRents = [
    {
        picture: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        title: 'Apartment in the Downtown',
        description: 'This 2 bedroom apartment is located in the heart of the city, close to everything.',
        address: '456 Ocean Avenue, Seaside Town, CA 56789',
        room: 2,
        bath: 2,
        price: '2.000',
        smoke: false,
        pet: true
    },
    {
        picture: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        title: 'Bright apartment with sea view',
        description: 'This beautiful apartment offers a stunning sea view',
        address: '456 Ocean Avenue, Seaside Town, CA 56789',
        room: 3,
        bath: 3,
        price: '2.500',
        smoke: true,
        pet: true
    },
    {
        picture: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        title: 'Modern condominium in residential area',
        description: 'This elegant modern condominium is located in a quiet residential area',
        address: '123 Main Street, Anytown, CA 91234',
        room: 2,
        bath: 2,
        price: '2.200',
        smoke: false,
        pet: false
    }

]


for(const propertiesRent of propertiesRents){
    if(propertiesRent.smoke === true){
        ifSmokeRent = '<p class="text-success"><i class="fas fa-smoking"></i> Smoking Allowed </p>'
    }else{
        ifSmokeRent = '<p class="text-danger"><i class="fas fa-smoking-ban"></i> Smoking is Not Allowed </p>'
    }

    if(propertiesRent.pet === true){
        ifPetRent = '<p class="text-success"><i class="fas fa-paw"></i> Pets Permitted</p>'
    }else{
        ifPetRent = '<p class="text-danger"> <i class="fa-solid fa-ban"></i> Pets is Not Permitted</p>'
    }

    templateRent += `
    <div class="col-md-4 mb-4">
            <div class="card">
              <img src= ${propertiesRent.picture} class="card-img-top" alt="Imagen del departamento"/>
              <div class="card-body">
                <h5 class="card-title"> ${propertiesRent.title} </h5>
                <p class="card-text"> ${propertiesRent.description} </p>
                <p><i class="fas fa-map-marker-alt"></i> ${propertiesRent.address} </p>
                <p><i class="fas fa-bed"></i> ${propertiesRent.room} Habitaciones | <i class="fas fa-bath"></i> ${propertiesRent.bath} Baños</p>
                <p><i class="fas fa-dollar-sign"></i> ${propertiesRent.price}</p>
                ${ifSmokeRent}
                ${ifPetRent}
              </div>
            </div>
          </div>
    `
}
rent.innerHTML = templateRent;