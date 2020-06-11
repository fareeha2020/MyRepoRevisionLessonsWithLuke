let pets = [
    {
        name: "Rex",
        age: 1,
        species: "Dog",
        id: "20ad7703-8350-47e3-95c1-6c1de12d1338",
        ownerId: "d4558c2f-9cda-4ae6-8aef-9ceb9eaefa2d",
    }, {
        name: "Rome",
        age: 5,
        species: "Cat",
        id: "91c02184-534f-4bcf-aba0-4103171d5e92",
        ownerId: "d4558c2f-9cda-4ae6-8aef-9ceb9eaefa2d",
    }, {
        name: "Lucky",
        age: 3,
        species: "Dog",
        id: "2356e9cb-e07d-4c7e-8754-3faf68477fd7",
        ownerId: "913ad967-3199-4f53-a228-79f0615b37af",
    }, {
        name: "Roach",
        age: 7,
        species: "Dog",
        id: "23ad3350-bcae-4153-b79c-4a77d9343956",
        ownerId: "913ad967-3199-4f53-a228-79f0615b37af",
    }, {
        name: "Mair",
        age: 1,
        species: "Goldfish",
        id: "76712e6e-8554-4a94-8990-a5b53a87cef5",
        ownerId: "913ad967-3199-4f53-a228-79f0615b37af",
    }, {
        name: "Hurst",
        age: 1,
        species: "Goldfish",
        id: "604bfac3-c0e4-41c1-ad4f-69081b1c2e3e",
        ownerId: "913ad967-3199-4f53-a228-79f0615b37af",
    }, {
        name: "Hurst",
        age: 2,
        species: "Goldfish",
        id: "9e5384b0-07bb-4067-8a33-6028c89fc155",
        ownerId: "460dca95-df25-4673-8593-905c673efc9e",
    }
];

let owners = [
    {
        firstName: "Mitchell",
        lastName: "Bradshaw",
        id: "d4558c2f-9cda-4ae6-8aef-9ceb9eaefa2d"
    }, {
        firstName: "Sofija",
        lastName: "Byrd",
        id: "913ad967-3199-4f53-a228-79f0615b37af"
    }, {
        firstName: "Erika",
        lastName: "Mcgill",
        id: "460dca95-df25-4673-8593-905c673efc9e"
    }
];

// Q1 - Write a function that returns a pet given its id
// Q2 - Write a function that returns an owner given its id
// Q3 - Write a function that returns the all the pets for an owner
// Q4 - Write a function that returns the number of pets for each owner: return array should be an object with property ownerId and numberOfPets
// Q5 - Write a function that returns all the names of the pets in order of their owner's last name

function findPet(byId) {
    return pets.find(p => p.id == byId);

}
let pet = findPet("604bfac3-c0e4-41c1-ad4f-69081b1c2e3e");
console.log(pet);//hurst 1 goldfish
function findOwner(byId) {
    return owners.find(o => o.id == byId);
}
let owner = findOwner("913ad967-3199-4f53-a228-79f0615b37af");
console.log(owner);//sofija
function allPetbyOwner(byId) {
    return pets.filter(p => p.ownerId == byId);
}
//let allPets=allPetbyOwner("460dca95-df25-4673-8593-905c673efc9e");//hurst2
let allPets = allPetbyOwner("d4558c2f-9cda-4ae6-8aef-9ceb9eaefa2d");//rome and rex
console.log(allPets);
console.log("number of pets for each owner");
//urn array should be an object with property ownerId and numberOfPets
function numberOfPetsByOwner() {
    function allPetsForOwner(owner) {//passing in owner object
        let result = {};//result is empty object with propert no of pets and owner ID
        result.ID = owner.id;
        result.numPets = allPetbyOwner(owner.id).length;
        return result;
    }
    return owners.map(allPetsForOwner);// from owner object
};
let numberPets = numberOfPetsByOwner();
console.log(numberPets);
// console.log(`${numberPets.ownerId}`);


function ownerLastName(o1, o2) {
    let owner1 = o1.lastName.toLowerCase();
    let owner2 = o2.lastName.toLowerCase();
    if (owner1 < owner2) {
        return -1;
    }
    if (owner1 < owner2) {
        return 1;
    } else
        return 0;
}

function sortByOwnerLastName() {
    return owners.sort(ownerLastName);
}
let sorted = sortByOwnerLastName();
console.log(sorted);