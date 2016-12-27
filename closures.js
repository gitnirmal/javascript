/*
	Defination of closures
	A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain. 
	The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), 
	it has access to the outer function's variables, and it has access to the global variables.
*/
//increment the counter
var add = (function(){
	var counter = 0;
  console.log('hi im here');
  return function(){
  	counter++;
  	return counter;
  }
})();

console.log(add());
console.log(add());
console.log(add());

//addition of two values
var add = (function(){
	var counter = 0;
  console.log('hi im here');
  return function(a, b){
  	var s = parseInt(a)+parseInt(b);
  	return s;
  }
})();

console.log(add(3,4));
console.log(add(5,6));
console.log(add(2,4));