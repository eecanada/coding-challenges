// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #

// my first solution //
let hashTag = "# # # #"
let space = " "

for(let i = 0; i < 4; i++){
  console.log(space + hashTag)
  for(let j = 0; j < 1; j++){
    console.log(hashTag + space)
  }
}

// used nested for loops, the inner for loops will run for every iteration, while the outer for loop while run too, but only go up in value once the inner for loop is done //


// alternate solution // 
let hashTag = "#"
let space = " "

for(let i = 0; i < 8; i++){
  var string = '';
  for(let j = 0; j < 4; j++){
    if(i % 2 === 0) {
      string += space + hashTag;
    } else {
      string += hashTag + space;
    }
  }
  console.log(string);
}



