/////////////////////////////////////////
//         Characters
/////////////////////////////////////////
const character = Object.create({});
character.init = function(name, health, atk, def){
    this.charName = name 
    this.charHealth = health
    this.charAtk = atk
    this.charDef = def  
};

const link = Object.create(character)
link.init("Link", 4, 2, 2);

const gannon = Object.create(character)
gannon.init("Gannon", 4, 1, 3);
/////////////////////////////////////////


/////////////////////////////////////////
//         Battle Type
/////////////////////////////////////////
const fight = Object.create({});
fight.init = function(infoObj){
    this.char1 = infoObj.char1;
    this.char2 = infoObj.char2;
}

const battleRoyale = Object.create(fight)
battleRoyale.init({
    char1: process.argv[2],
    char2: process.argv[3]
})
/////////////////////////////////////////



function combat(link, gannon){
    console.log(battleRoyale.char1,"VS", battleRoyale.char2);
    console.log('FIGHT!!!');
    let linkHealth = link.charHealth;
    let gannonHealth = gannon.charHealth;
    strikeLink = (link.charAtk + (Math.floor(Math.random() * 6) + 1)) - gannon.charDef;
    strikeLink = (gannon.charAtk + (Math.floor(Math.random() * 6) + 1)) - link.charDef;
    function combatLink() {
        if (battleRoyale.char1 === link.charName) {
            gannonHealth = strikeLink - gannonHealth;
            console.log('Link strikes!');
            if (gannonHealth > 0) {
                console.log(`Gannon has ${gannonHealth} health remaining`);
                gannonHealth = gannonHealth;
                combatLink(gannonHealth)
            } else if (gannonHealth <= 0) {               
                console.log('Gannon has been vanquished!');
            }
        }
    }  
    combatLink() 
}
combat(link, gannon)

