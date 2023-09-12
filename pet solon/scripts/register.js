//object literal
let salon = {
    name:"Paws & Claws",
    phone:"(702)555-5555",
    address:{
        street:"1638 Las Vegas Blvd",
        zip:"89052",
        number:"35A"
    },
     pets:[]
     
}   
 function pet(ownersName,ownersPhone,name,type,age,bread,service){
        this.ownersName=ownersName;
        this.ownersPhone=ownersPhone
        this.name=name;
        this.type=type
        this.age=age;
        this.bread=bread;
        this.service=service;

    }
    //inputs
    const inputOwnerName = document.getElementById('txtOwnerName')
    const inputOwnerPhone = document.getElementById('txtOwnerPhone');
    const inputName = document.getElementById('txtName');
    const inputType = document.getElementById('txtType');
    const inputAge = document.getElementById('txtAge');
    const inputBread = document.getElementById('txtBread');
    const inputService = document.getElementById('txtService');
function isValid(Pet){
    let validation =true;
     
    if (Pet.ownersName=''){
        validation=false;
        alert('Please enter your name!');
    }
     
    if (Pet.ownersPhone=''){
        validation=false;
        alert('Please enter your Phone number!')
    }

    if (Pet.name=''){
    validation=false;
    alert('Please add pet name!');

}
     if (Pet.type=''){
        validation=false;
        alert('please add type!');
     }
     if (Pet.age=''){
        validation=false;
        alert('Please add pet age!');
     }
     if (Pet.bread=''){
        validation=false;
        alert('Please enter bread!')
     }
     if (Pet.service=''){
        validation=false;
        alert('Please select a sevice!');
     }

return validation;
}
 function register(){
   
    let newPet = pet(inputOwnerName.value,inputOwnerPhoneNumber.value,inputName.value,inputType.value,inputAge.value,inputBread.value,inputService.value);
 
   if (salon.pet.push(newPet))
     console.log(solon.pet);
     clearInputs();
    if(isValid(newPet)==true)

    
    
    function clearInputs(){

        inputOwnerName.value='';
        inputOwnerPhone.value='';
        inputName.value='';
        inputType.value='';
        inputAge.value='';
        inputBread.value='';
        inputService.value='';
    
    }
 
}
    function init(){
        
        let pet1 = new pet("Bubby",7,'Pooddle','Groooming');
        let pet2 = new pet ("fraya",2,"Dane","vaccine");
        let pet3 = new pet ('sam',5,'cho cho','nails');
        let pet4 = new pet ('meow meow',9,'tabby',"vaccine");
        let pet5 = new pet ('koby',19,'cackatoo','dewinged');
        salon.pets.push(pet1,pet2,pet3,pet4,pet5)
    }
    window.onload=init;

//    display.js
function displayLi(){
    //traval the array
    for(let i=0;i<petSolon.pets;i++){
        let pet =petSalon.pets[i];
        console.log(pet.name);

    }
}