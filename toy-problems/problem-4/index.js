// Create a function that displays the person's name by which hobby is passed in 

function findHobbyists(hobbies, hobby) {
  var arr = Object.keys(hobbies);
  for(i = 0; i < arr.length; i++) {
    var arr1 = hobbies[arr[i]]
    for(j = 0; j < arr1.length; j++) {
      if(arr1[j] === hobby) {
        return arr[i];
      }
    }
  }
}

var hobbies = {
  "John": ["Piano", "Puzzles", "Yoga"],
  "Adam": ["Drama", "Fashion", "Pets"],
  "Mary": ["Magic", "Pets", "Reading"]
}


console.log(findHobbyists(hobbies, 'Yoga'));
// => "John"

