---
layout: post
title:  "typescript"
date:   2017-04-07 14:39:51 +0800
categories: jekyll update
---

### error function

```
var sumAll = function(...nums: number[]):void{
  var sum = nums.reduce((a,b) => a + b,0);
  console.log(sum);
}


sumAll(1,2,3,4)
```

### class

```
 


// typescript 可以用箭头函数

class Animal {
  public favFood: string = 'cuixiao';
  private test: number = 200;
  
  static numOfAnimals: number = 0;

  constructor(private name: string,private owner: string){
    Animal.numOfAnimals++;
  }

  ownerInfo(){
    console.log(  this.test  + this.favFood)
  }

  static howManyAnimals():number{
    return Animal.numOfAnimals;
  }
  
  private _weight: number;
  
  get weight(): number{
    return this._weight;
  }

  set weight(weight:number){
    this._weight = weight;
  }
}

  var spot = new Animal("spot","Doug");
  console.log(spot.favFood);

  spot.ownerInfo();

  spot.weight = 100;
  
  console.log(spot.weight);
  
  console.log('# of Animals: ' +  Animal.howManyAnimals())

  inherite
  
  
  class Dog extends Animal{
      constructor(name:string,owner: string){
        super(name,owner);
        Dog.numOfAnimals++;
      }

  }


  var grover = new Dog("Grover","Jimmy");
  
  console.log(grover)
  for (var prop  of grover){
    console.log('prop' + grover[prop])
  }

  console.log(Dog.howManyAnimals())

    
  console.log('#dog of Animals: ' + Dog.howManyAnimals());
  
  console.log(grover.favFood);
  console.log(grover.test);
  console.log('is a dog an Animal ：' + 
             grover instanceof Animal)
  
  console.log('does grover have a name ' + ('name' in grover))
  
  
  
  interface Vehicle{
    drive(): any;
  }


  class Car implements Vehicle{
    
    constructor(private wheel:number){ }
    
    drive(): void{
      console.log(this.wheel)
    }
    
    
  }


  class Bicycle implements Vehicle{
    
    constructor(private wheel:number){}

    
     drive():void{
       console.log('Bicycle' + this.wheel)
     }
  }

  var car = new Car(2);

  var bike = new Bicycle(4);
  
car.drive();
bike.drive();
  
  

```
