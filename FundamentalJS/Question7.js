
/*
The following object represents a basketball game and keeps track of the score as the game progresses. 
a) Modify each of the methods so that they can be ‘chained’ together and the last line of the example code works - Ai: "return this" added to each method.
c) Add a new object property to keep track of the number of fouls and a method to increment it, similar but separate to the score. Include the foul count in the half time and full time console messages - Ai:Added.
*/

const basketballGame = {
    // score: 0,
    // freeThrow() {
    //     this.score++;
    // },
    // basket() {
    //     this.score += 2;
    // },
    // threePointer() {
    //     this.score += 3;
    // },
    // halfTime() {
    //     console.log('Halftime score is ' + this.score);
    // }

    score: 0,
    foul: 0,
    freeThrow() {
        this.score++;
        return this;
    },
    basket() {
        this.score += 2;
        return this;
    },
    threePointer() {
        this.score += 3;
        return this;
    },
    foulCount() {
        this.foul++;
        return this;
    },
    halfTime() {
        console.log('Halftime score is ' + this.score + ". Foul count is " + this.foul);
    },
    // b) Add a new method to print the full time final score 
    fullTime() {
        console.log('Fulltime score is ' + this.score + ". Foul count is " + this.foul);
    }
} //modify each of the above object methods to enable function chaining as below: 
// basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();

// d) Test your object by chaining all the method calls together in different combinations.
basketballGame.basket().foulCount().freeThrow().freeThrow().basket().threePointer().foulCount().fullTime();


