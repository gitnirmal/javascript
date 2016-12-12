var User = function(name, age){
	this.name = name;
  	this.age = age;
};

User.prototype.print = function(){
	console.log('Parent call '+this.name+' ,  '+this.age);
};

//var obj = new User('Nirmal', 30);
//obj.print();

var Employee = function(name, age, salary){
	User.call(this, name, age);
  	//User.call(this);
  	//this.name = name;
  	//this.age = age;
  	this.salary = salary;
};

Employee.prototype = Object.create(User.prototype);
//Employee.prototype.constructor = Employee;

/*Employee.prototype.print = function(){
	console.log('Child call '+this.name+' , '+this.age+' , '+this.salary);
};*/

var obj = new Employee('Nirmal', 30, 3000);
obj.print();