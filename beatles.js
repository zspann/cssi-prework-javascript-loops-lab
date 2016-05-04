'use strict';
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var together = [];
  for (var i = 0; i < musicians.length; i++){
    var sentence = musicians[i] + " plays " + instruments[i];
    together.push(sentence);
  }
return together;
}


function johnLennonFacts(facts){
  var i = 0;
  var excitedFacts = [];
  while (i < facts.length){
    excitedFacts.push(facts[i] + "!!!");
    i++;
  }
  return excitedFacts;
}

function iLoveTheBeatles(num){
  var i = 0
  var beatleMania = []
  do {
    beatleMania.push("I love the Beatles!")
    i++;
  } while (i <num && i<10);
  return beatleMania;
}
