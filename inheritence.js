class Student 
{
    constructor(name)
    {
        this.name = name
    }
    print()
    {
        console.log(`Student name is ${this.name}`);
    }
}

class Marks extends Student {
    constructor (name, mark)
    {
        super(name)
        this.mark = mark
    }
    printMark()
    {
        console.log(`Student name is ${this.name} and marks are ${this.mark}`);
    }
}

const abc = new Marks("Hamid Rafique", 100)
abc.printMark();


//remember always make object of last class 
//super key word use for to access parent class properties