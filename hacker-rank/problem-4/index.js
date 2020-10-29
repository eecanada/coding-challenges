// Complete the staircase function below.

//regular staircase
function staircase(n) {
  let empty = " "
  let hash = "#"
  for(let i = 0; i < n ; i++){
    // console.log(hash)
    for(let j = 0; j < 1; j++){
      console.log(empty = empty + hash )
    }
  }
}

staircase(6)

// align right staircase
function staircase(n){
  for (let i = 1; i <= n; i++) {
  console.log("#".repeat(i).padStart(n));
  }
}
staircase(6)
