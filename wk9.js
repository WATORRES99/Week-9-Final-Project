

//This first creates the deck.  I made a suits and numbers array.  I added the proper cards where J,Q,K are worht 10 points, and A is 11 points. 
//I tried to keep the all as integers and then run another class to change the value of the card but could not get it to work.  This is why I 
//opted to submit this late, unfortunately.  I could not figure it out so I left all the values as numbers to make it easier.  This first class
//creates a deck with an array having two objects, the suits and the numbers.  Then it randomizes the deck.  I think added an introduce
//function to make sure i was getting the right output.  Which seemed to work well.  

class Deck {
    constructor (){
    this.suits = [`Diamond`, `Spade`, `Heart`, `Club`];
    this.numbers = [2,3,4,5,6,7,8,9,10,10,10,10,11];
    this.deck= []; 
    
    }

    getDeck(){
        for( let a = 0; a < this.suits.length; a++){
            
            for (let i = 0; i < this.numbers.length; i++){
               this.deck.push({ V: this.numbers[i], S: this.suits[a]});
             }
         }
         return this.deck;
     }
    
    randomize(){
        
        for (let i = this.deck.length - 1; i > 0; i--) { 
          let j = Math.floor(Math.random() * (i + 1)); 
          [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]]; 
        } 
        return this.deck;
 
    }
    introduce(){
        console.log (this.deck);

    }
}
let test1 = new Deck();
test1.getDeck();
test1.randomize();
test1.introduce();

d


//In this class, I created the players, called them "yoda" and "vader".  The function then divides the deck equally among both of the 
//players.  
class Players{
    constructor(){
        this.vader = [];
        this.yoda = [];
        this.random = new Deck();
        this.random.getDeck();
        this.random.randomize();
    }

    deal(){
     for (let i = 0; i < this.random.deck.length; i++){
        if ( i %2 == 0){
            this.vader.push(this.random.deck[i]);           
         }
         else{
             this.yoda.push(this.random.deck[i]);         
         }  
              
     }      

    }

}



//This class is the actual game.  I do a for loop for all the cards.  Then I do if, else if, else statment for player 1 win,
//versus player 2, versus tie.  If will then give an output of who won and add points to the player's score.  Here I call on 
//the first object of the player array which is the number, leaving the suit alone.  This compares the two numbers and follows
//the statement accodingly.  I called this part of the code, "showcard". Finally, "gamewinner" gives us the winner of the game and the final 
//scores for both.  
class Wargame{
    constructor(){
        this.theForce = new Players();
        this.theForce.deal();
        this.yodaPoints = 0;
        this.vaderPoints = 0;
        this.J = 10;
    }


    showCard(){
        for (let i = 0; i < this.theForce.yoda.length; i++){ 
            if (this.theForce.yoda[i].V > this.theForce.vader[i].V){
                
              console.log(`Yoda wins this round, Yoda gets 1 point.`);
                
              this.yodaPoints = this.yodaPoints + 1;
            }
            else if (this.theForce.yoda[i].V < this.theForce.vader[i].V) {
                
                 console.log(`Vader wins this round, Vader gets 1 point.`);
                
                 this.vaderPoints = this.vaderPoints + 1;
            }
             else { 
               
                  console.log(`The force is balanced this round, no points awarded`);
                
            }

        }
   

    }
    gameWinner(){
        if(this.yodaPoints > this.vaderPoints){
            
           return  console.log(`Yoda wins with a score of ${this.yodaPoints} to Vader's ${this.vaderPoints}.  The force has won this war!  Play again!`);
        
    }
    else if(this.yodaPoints < this.vaderPoints){
       
            return console.log(`Vader wins with a score of ${this.vaderPoints} to Yoda's ${this.yodaPoints}.  The Empire has won this war!  Play again!`);
        
    }
    else {
        
           return  console.log(`The scores were equal for both players with scores of ${this.yodaPoints}.  There was balance to the force!  Play again!`)
        
    }

    }
    
}
const game = new Wargame();
game.showCard();
game.gameWinner();








