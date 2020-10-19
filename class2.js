import Student from './class1.js'

//let student = new Student()

class Teacher extends Student{
    constructor (Id, Name, Email, mobile_number, Salary, subjects){
        Super (Id,Name, Email, mobile_number )
        this.Salary = Salary;
        this.subjects = subjects;
    }
    GetSalary(){
        return this.Salary;
    }  
    GetSubjects (){
        return this.subjects;
    }  
 
}
var sub = ["English" , "Arabic" , "Math" , "Science"];
let Teacher1 = new Teacher ("96432", "Sadi" , "sadi@orange.com" , "0777788888", "800", sub);
console.log(Teacher1);