/*
	Defination of Lexical scoping
	Lexical scoping (sometimes known as static scoping ) is a convention used with many programming languages 
	that sets the scope (range of functionality) of a variable so that it may only be called (referenced) 
	from within the block of code in which it is defined.

	Lexical scoping: Variables declared outside of a function are global variables and are visible everywhere in a 
	JavaScript program. Variables declared inside a function have function scope and are visible only to code 
	that appears inside that function.
*/

//Example 1 
var outerFunction  = function(){
 
   if(true){
      var x = 5;
      //console.log(y); //line 1, ReferenceError: y not defined
   }
 
   var nestedFunction = function() {
 
      if(true){
         var y = 7;
         console.log(x); //line 2, x will still be known prints 5
      }
 
      if(true){
         console.log(y); //line 3, prints 7
       }
   }
   return nestedFunction;
}
 
var myFunction = outerFunction();
myFunction();

//Example 2
var scope = "I am global";
function whatismyscope(){
   scope = "I am just a local";
   function func() {return scope;}
   return func;
}

console.log(whatismyscope()());