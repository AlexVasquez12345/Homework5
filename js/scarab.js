/*Links:
    https://stackoverflow.com/questions/10842471/how-to-remove-all-values-of-a-certain-class-from-the-dom
    https://www.coderrocketfuel.com/article/generate-a-random-letter-from-the-alpha-using-javascript
    
*/
//Global Variables
var my_score = 0;
var my_total_score = 0;
var word_combo = 0;
//Array that contains all of the scrabble variables
var scrabble_tiles = [] ;
scrabble_tiles["A"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9  } ;
scrabble_tiles["B"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
scrabble_tiles["C"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
scrabble_tiles["D"] = { "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4  } ;
scrabble_tiles["E"] = { "value" : 1,  "original-distribution" : 12, "number-remaining" : 12 } ;
scrabble_tiles["F"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
scrabble_tiles["G"] = { "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3  } ;
scrabble_tiles["H"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
scrabble_tiles["I"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9  } ;
scrabble_tiles["J"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1  } ;
scrabble_tiles["K"] = { "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1  } ;
scrabble_tiles["L"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
scrabble_tiles["M"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
scrabble_tiles["N"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
scrabble_tiles["O"] = { "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8  } ;
scrabble_tiles["P"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
scrabble_tiles["Q"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1  } ;
scrabble_tiles["R"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
scrabble_tiles["S"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
scrabble_tiles["T"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
scrabble_tiles["U"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
scrabble_tiles["V"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
scrabble_tiles["W"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
scrabble_tiles["X"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1  } ;
scrabble_tiles["Y"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
scrabble_tiles["Z"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1  } ;
scrabble_tiles["_"] = { "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2  } ;

//creates new values for the scrabble board
function new_bric() {
    var values = document.getvaluesByClassName("letter");
    //gets rid of all the letters currently
    //on the list
    while (values[0]) {
        values[0].parentNode.removeChild(values[0]);
    }
    var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //creates random letters
    var rep1 = alpha[Math.floor(Math.random() * alpha.length)];
    var rep2 = alpha[Math.floor(Math.random() * alpha.length)];
    var rep3 = alpha[Math.floor(Math.random() * alpha.length)];
    var rep4 = alpha[Math.floor(Math.random() * alpha.length)];
    var rep5 = alpha[Math.floor(Math.random() * alpha.length)];
    var rep6 = alpha[Math.floor(Math.random() * alpha.length)];
    var rep7 = alpha[Math.floor(Math.random() * alpha.length)];
    //actual creation of new brics
    var new_brics = '<img data-letter="' + rep1 + '"id="first_letter" class="letter" src="graphics_data/Scrabble_Tiles/Scrabble_Tile_' + rep1 + '.jpg"><img data-letter="' + rep2 + '"id="second_letter" class="letter" src="graphics_data/Scrabble_Tiles/Scrabble_Tile_' + rep2 + '.jpg"><img data-letter="' + rep3 + '" id="third_letter" class="letter" src="graphics_data/Scrabble_Tiles/Scrabble_Tile_' + rep3 + '.jpg"><img data-letter="' + rep4 + '"id="fourth_letter" class="letter" src="graphics_data/Scrabble_Tiles/Scrabble_Tile_' + rep4 + '.jpg"><img data-letter="' + rep5 + '"id="fifth_letter" class="letter" src="graphics_data/Scrabble_Tiles/Scrabble_Tile_' + rep5 + '.jpg"><img data-letter="' + rep6 + '"id="sixth_letter" class="letter" src="graphics_data/Scrabble_Tiles/Scrabble_Tile_' + rep6 + '.jpg"><img data-letter="' + rep7 + '"id="seventh_letter" class="letter" src="graphics_data/Scrabble_Tiles/Scrabble_Tile_' + rep7 + '.jpg">';
    var my_holder = document.getElementById('my_holder');
    my_holder.innerHTML = new_brics;
    //should allow you to drag letters
    $(".letter").draggable({
        revert: 'invalid'
    });
}

function next_word() {
    if (word_combo == 0) {
        my_total_score += my_score;
    } else if (word_combo == 1) {
        my_total_score = my_total_score + my_score * 2;
 
    } else if (word_combo == 2) {
        my_total_score = my_total_score + my_score * 4;
    }
    //reset global variables
    my_score = 0;
    word_combo = 0;
    //update the display
    var display = "Total Score:" + my_total_score;
    var my_new_total_score = document.getElementById('my_total_score');
    var word_score = document.getElementById('my_score');
    word_score.innerHTML = "Word Score:";
    my_new_total_score.innerHTML = display;
    new_bric();
}

function start_over() {
    //should restart the whole webpage
    my_total_score = 0;
    my_score = 0;
    word_combo = 0;
    var word_score = document.getElementById('my_score');
    var total_score = document.getElementById('my_total_score');
    word_score.innerHTML = "Word Score:";
    total_score.innerHTML = "Total Score: ";
    new_bric();


}



