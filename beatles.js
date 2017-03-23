'use strict';

function johnLennonFacts(facts){
  var excitingFacts = []
  var counter = 0
  while (counter < facts.length){
    excitingFacts.push(facts[counter] + "!!!");
    counter = counter + 1;
  }
  return excitingFacts
}

function theBeatlesPlay(musicians, instruments){
  var roles = []
  for(var i = 0; i < musicians.length; i = i + 1){
    roles.push(musicians[i] + " plays " + instruments[i])
  }
  return roles
}

function iLovetheBeatles(num){
  var finalString = []
  if(num < 10 && num > 0){
    var i = 0
    do{
      finalString.push("I love the Beatles!");
      i = i + 1;
    } while (i < num)
  }
}
