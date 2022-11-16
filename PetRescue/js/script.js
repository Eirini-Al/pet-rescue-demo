var statusButton = document.querySelector("button");
var petListElement = document.querySelector("ul");

function CreatePet(name, species) {
    const pet = {
        name: name,
        species: species,
        isTired: 5,
        sleep: function () {
            this.isTired = 1;
            //console.log(`${this.name} needs nap. Zzzzz....`);
            return `${this.name} needs nap. Zzzzz....`;
        },
        play: function () {
            if (this.isTired === 10)
                //console.log("Too tired to play");
                return "Too tired to play";
            else {
                //console.log(`Yay! ${this.name} loves to play!`);
                this.isTired += 1;
                return `Yay! ${this.name} loves to play!`;
            }
        }
    };

    return pet;
}

const baxter = CreatePet("Baxter", "dog");
const sioux = CreatePet("Sioux", "cat");
const papa = CreatePet("Papageno", "parrot");
var petList = [baxter, sioux, papa];


function ShowPetList() {
    statusButton.hidden = true;
    petList.forEach(animal => {
        var li = document.createElement("li"); //create the list element
        var my_text = `Name: ${animal.name}<br> Species: ${animal.species}<br> Level of Tiredness: ${animal.isTired}`; //create the text
        var li_text = document.createElement("p");
        var li_status_text = document.createElement("p");
        li_text.innerHTML = my_text;
        var li_sleepButton = document.createElement("button"); //create the buttons
        li_sleepButton.innerHTML = "Sleep";
        function UpdateSleep(){
            li_status_text.innerHTML = animal.sleep();
            li_text.innerHTML = `Name: ${animal.name}<br> Species: ${animal.species}<br> Level of Tiredness: ${animal.isTired}`; //update the text
        }
        li_sleepButton.addEventListener("click", UpdateSleep);
        var li_playButton = document.createElement("button");
        li_playButton.innerHTML = "Play";
        function UpdatePlay(){
            li_status_text.innerHTML = animal.play();
            li_text.innerHTML = `Name: ${animal.name}<br> Species: ${animal.species}<br> Level of Tiredness: ${animal.isTired}`; //update the text
        }
        li_playButton.addEventListener("click", UpdatePlay);
        petListElement.appendChild(li); //set the list as parent of the list element
        li.appendChild(li_text); //set the list text as child of the list element
        li.appendChild(li_playButton); //same with the buttons
        li.appendChild(li_sleepButton);
        li.appendChild(li_status_text);
    });
}

statusButton.addEventListener("click", ShowPetList);
