var words = ["ground", "control", "to", "major", "tom"];

function map(array, callback) {
  var mappedArray = [];
    var word = [];
  for (i in words) {
    var word = words[i];
    callback(word);
  }
}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});