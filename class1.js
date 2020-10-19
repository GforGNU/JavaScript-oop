
 class Student{
    constructor (Id, Name, Email, mobile_number){
        this.Id = Id;
        this.Name = Name;
        this.Email = Email;
        this.mobile_number = mobile_number;
    }
    GetName(){
        return this.Name;
    }  
    GetNum (){
        return this.mobile_number;
    }    
}



let Student1 = new Student ("123443", "Sara" , "sara@orange.com" , "0777777777");
console.log(Student1);
export default class Student {}