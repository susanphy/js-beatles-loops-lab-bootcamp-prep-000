function theBeatlesPlay(musicians, instruments) {
var array = [];
 for (var i = 0; i < musicians.length; i++) {
 array.push(musicians[i] + ' plays ' + instruments[i]);
}
return array;
}

function johnLennonFacts(array){
  var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
var count = 0;
while (count<facts.length){
  array.push(facts[count] + "!!!");

  return array;
}
}
