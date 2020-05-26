let brands = [{id:1,name:'Maruthi Suzuki'},{id:2,name:'Suzuki NEXA'},
    {id:3,name:'TATA Motors'},{id:4,name:'Hyndai Motors'}];

let models = [{car_id:1,name:'Swift'},{car_id:1,name:'Brezza'},{car_id:1,name:'Dezire'},
    {car_id:1,name:'Ertiga'},{car_id:2,name:'NEXA Baleno'},{car_id:2,name:'NEXA Ignis'},
    {car_id:2,name:'NEXA CIAZ'},{car_id:2,name:'NEXA SCross'},{car_id:3,name:'TATA Tiago'},
    {car_id:3,name:'TATA HEXA'},{car_id:3,name:'TATA Safari'},{car_id:3,name:'TATA Harrier'},
    {car_id:4,name:'Hyndai Verna'},{car_id:4,name:'Hyndai Grand i20'},{car_id:4,name:'Hyndai Creta'},
    {car_id:4,name:'Hyndai Grand i10'}];

// get the html elements
let brandSelect = document.querySelector('#brand-select');
let modelSelect = document.querySelector('#model-select');

let brandOptions = `<option value="">Select a Brand</option>`;
for(let brand of brands){
    brandOptions += `<option value="${brand.id}">${brand.name}</option>`;
}
brandSelect.innerHTML = brandOptions;

// change event on brand select box
brandSelect.addEventListener('change',function() {
    let selectedId = Number.parseInt(brandSelect.value);
    let selectedModels = models.filter(function(model) {
        return model.car_id === selectedId;
    });
    console.log(selectedModels);
    let modelOptions = `<option value="">Select a model</option>`;
    for(let model of selectedModels){
        modelOptions += `<option>${model.name}</option>`;
    }

    modelSelect.innerHTML = modelOptions;
})