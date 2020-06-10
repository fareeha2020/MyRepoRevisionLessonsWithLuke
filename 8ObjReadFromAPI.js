const dogBreeds = {
    message: {
        affenpinscher: [],
        african: [],
        airedale: [],
        akita: [],
        appenzeller: [],
        australian: ['shepherd'],
        basenji: [],
        beagle: [],
        bluetick: [],
        borzoi: [],
        bouvier: [],
        boxer: [],
        brabancon: [],
        briard: [],
        buhund: ['norwegian'],
        bulldog: ['boston', 'english', 'french'],
        bullterrier: ['staffordshire'],
        cairn: [],
        cattledog: ['australian'],
        chihuahua: [],
        chow: [],
        clumber: [],
        cockapoo: [],
        collie: ['border'],
        coonhound: [],
        corgi: ['cardigan'],
        cotondetulear: [],
        dachshund: [],
        dalmatian: [],
        dane: ['great'],
        deerhound: ['scottish'],
        dhole: [],
        dingo: [],
        doberman: [],
        elkhound: ['norwegian'],
        entlebucher: [],
        eskimo: [],
        finnish: ['lapphund'],
        frise: ['bichon'],
        germanshepherd: [],
        greyhound: ['italian'],
        groenendael: [],
        havanese: [],
        hound: [
            'afghan', 'basset',
            'blood', 'english',
            'ibizan', 'plott',
            'walker'
        ],
        husky: [],
        keeshond: [],
        kelpie: [],
        komondor: [],
        kuvasz: [],
        labrador: [],
        leonberg: [],
        lhasa: [],
        malamute: [],
        malinois: [],
        maltese: [],
        mastiff: ['bull', 'english', 'tibetan'],
        mexicanhairless: [],
        mix: [],
        mountain: ['bernese', 'swiss'],
        newfoundland: [],
        otterhound: [],
        ovcharka: ['caucasian'],
        papillon: [],
        pekinese: [],
        pembroke: [],
        pinscher: ['miniature'],
        pitbull: [],
        pointer: ['german', 'germanlonghair'],
        pomeranian: [],
        poodle: ['miniature', 'standard', 'toy'],
        pug: [],
        puggle: [],
        pyrenees: [],
        redbone: [],
        retriever: ['chesapeake', 'curly', 'flatcoated', 'golden'],
        ridgeback: ['rhodesian'],
        rottweiler: [],
        saluki: [],
        samoyed: [],
        schipperke: [],
        schnauzer: ['giant', 'miniature'],
        setter: ['english', 'gordon', 'irish'],
        sheepdog: ['english', 'shetland'],
        shiba: [],
        shihtzu: [],
        spaniel: [
            'blenheim',
            'brittany',
            'cocker',
            'irish',
            'japanese',
            'sussex',
            'welsh'
        ],
        springer: ['english'],
        stbernard: [],
        terrier: [
            'american', 'australian',
            'bedlington', 'border',
            'dandie', 'fox',
            'irish', 'kerryblue',
            'lakeland', 'norfolk',
            'norwich', 'patterdale',
            'russell', 'scottish',
            'sealyham', 'silky',
            'tibetan', 'toy',
            'westhighland', 'wheaten',
            'yorkshire'
        ],
        vizsla: [],
        waterdog: ['spanish'],
        weimaraner: [],
        whippet: [],
        wolfhound: ['irish']
    },
    status: 'success'
}

// console.log(dogBreeds.message.terrier);

// Declares the counter to keep track of how many breeds with sub-breeds we have found
let numOfBreedsWithSubBreed = 0;

// Iterates through all the properties of dogBreeds.message
for (const breedName in dogBreeds.message) {
    // breedName is the key of the object. To get the value we use
    // the square bracket syntax and assign it to the variable called breed
    let breed = dogBreeds.message[breedName];
    // Check if the breed (which is an array) doesn't have a length of zero
    if (breed.length != 0) {
        // Add 1 to the number of breeds with sub-breeds we have found
        numOfBreedsWithSubBreed++;
    }
}

console.log(numOfBreedsWithSubBreed);