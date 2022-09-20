class Student{

    

   constructor(name,age,marks){

       this.name=name;

       this.age=age;

       this.marks=marks;

       

   }
   setPlacementAge(minPlacementAge){
    console.log(this);
    return (minMarks)=>{
        console.log('inside eligibleForCurrentCompany',this)
        if(this.marks>minMarks && this.age>minPlacementAge){
            console.log(this.name+ " is ready for placements")
        }else {
            console.log(this.name+" is not ready for placements")
        }
    }
 }
}
   const Anu=new Student('Anu',21,90);
   const Vamsi=new Student('Vamsi',22,35);
   //const Venky=new Student("Venky",24,60);
   //const Varuni=new Student("Varuni",23,50);
   //const Priya=new Student("Priya",28,20);

   Anu.setPlacementAge(18)(40);
   Vamsi.setPlacementAge(18)(40);


