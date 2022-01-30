function balancedParens(string){
	return ![...string].reduce((previous,char) => {
    if(previous < 0) {return previous}
    if (char == '(') {return previous + 1}
    if (char == ')') {return previous - 1}
    return previous
  },0)


}

balancedParens('()())()))))))))))')