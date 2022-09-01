//                             typesript 3 boolean and string , number

//                              ----------------------------------------------

//                              -----------Simple Typec-----------


//                              when creating a variable,there are two main ways Typescript asign a type:
//                              -Explicit
//                              -implicit


//                             Explicit Ex

//                              let a:string ="hello frind my name anil";
//                              a= 12;  Error in type Assignment value only assing alow string
//                              document.write(a);




//                             implicit Ex
//                              let b = "not assing type"
//                              b = 12;  error TS2322: Type 'number' is not assignable to type 'string'.
//                              document.write(b);
 
//                              ---------------------------------------------------
//                             Implicit any as json.parse doesn't know what type of data it can be "any" thing..

//                              const json = JSON.parse("5")
//                              document.write(typeof json);


//                              let a = (false)
//                              document.write(typeof a)

//                              ----------------------------------

//                              ----------------Special Types -----------

//                              * Type :any * 

//                              any is a type that disablr tye checking and effectively allows all types to be    used.

//                              thw examople below does not use any ell throw an error:

//                              let u= true;
//                              u = "string";
//                              Math.round(u);


//                              output :Error


//                             using any type 

//                              let u:any = "sing"; type is string 
//                              u = 12;  type is number nut not gevin Error 
//                              any type is all type allow types

//                              document.write(u);

//                              unknown is a similar, but safer alternative to any
//                             typeSctipt will prevent unknown types from being used,as shwon in the below 

//                             Ex
//                             let p:unknown = 1;
//                             p = "string";
//                             console.log(p)

//                            never 

//                            never effectively throws an error whernever it is defined.


//                             let x:never =true;   / /ype 'boolean' is not assignable to type 'never'.


//                             undefined & null 

//                            undefined and null are types that refer to the javaScript primitives undefined and null respectively.

//                             let y:undefined = undefined;
//                             document.write(typeof y);  output undefined 
//                             document.write(" ")
//                             let z:null = null
//                             document.write(typeof z); object


//                             --------TypeScript Arrays -----------
//                             ----------------------------------------


//                             let namel:string[] = [];
//                             namel.push("anil");
//                             namel.push(12) Argument of type 'number' is not assignable to parameter of type 'string'.


//                             console.log(namel)


//                             let namel:any[] = [];
//                             namel.push("anil");
//                             namel.push(12);
//                             console.log(namel);


//                            Readonly 

//                             the readonly keyword can prevent arrays from being change

//                             let namle:readonly any[] = ["anil"]
//                             namle.push("jj") Property 'push' does not exist on type 'readonly any[]'.
//                             console.log(namle);


//                             type infernce 

//                            typeScript can infer the of an Array if it has values.

//                             const num = [1,2,3];
//                             num.push(4);
//                             num.push('1')Argument of type 'string' is not assignable to parameter of type 'number'.

//                             console.log(num);
//                             let hed:number = num[1];
//                             console.log(hed);

//                             ..........................typeScript Tuples.....
 

//                              A tuple is a typed array.with a pre-defined length and types for each index.

//                              Tuples are great because ther allow each element in the Array to be a known type of value.

//                              To define a tuple,Specify the each Element in the array


//                             let ourTupl:readonly [number,boolean,string];
//                             ourTupl = [8,false,'di'];
//                             ourTupl.push(5) Property 'push' does not exist on type 'readonly [number, boolean, string]'.

//                              ourTupl = [8,false,'di',4,'55',true];  error TS2322: Type '[number, false, string, number, string, true]' is not assignable to type '[number, boolean, string]'.
//                              console.log(ourTupl);
  


//                              let ou: [number,boolean,string];
//                              ou = [false ,'coffie',5];
//                              console.log(ou);



//                             Type 'boolean' is not assignable to type 'number'.
//                              Type 'string' is not assignable to type 'boolean'.
//                             Type 'number' is not assignable to type 'string'.


//                            const p: readonly [number,boolean,string] = [5 ,true,"this real "];

//                            console.log(p);

//                           const h: [x:number,y:number] = [55.5, 12.4];
//                           console.log(h)

//                          second methos 
//                          const graph: [number,number] = [55.2, 41.5];
//                          const [x ,y ] = graph;

//                          const u = x+y;
//                          console.log(u);


//                         -----------TypeScript Object types---------
                        
//                          TypeScript has specifi systax for typing objets

//                          const car :{type:string,model:string,year:number}
//                          = {
//                              type:"Toyota ",
//                              model:"b-d",
//                              year:2001
//                          };

//                         console.log(car);

//                         type inference --
//                         const car :{type:string,model:string,year:number}
//                         = {
//                             type:"Toyota ",
//                             model:"b-d",
//                             year:2001
//                         };
//                         car.type = "Honda" not Error
//                         car.year = 45 not Error
//                         car.type = 45   Type 'number' is not assignable to type 'string'.

//                         console.log(car);




//                       const car:{type:string ,/* mileage:number */ mileage ?: number } = {
//                           type:"honda",
//                           mileage:124  withot insert out side insert
//                       }

//                       car.mileage = 200;  Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'. 

//                       console.log(car)



//                      const names : { [index:string]:number} = {};

//                      names.p = 5;
//                      names.o = "fh"  Type 'string' is not assignable to type 'number'. 
//                      console.log(names)



//                     /* TypeScript Enums -----

//                     An enum is a special "class" that represents a group of Constants (unchangeable variables)

//                     Enums come in two flavors string and numeric  .lets start with  numeric

//                     Numeric Enums by default,enums will initialize the first value to 0 and add 1 to each addtional value


//                    enum cars {
//                        a,
//                        b,
//                        c,
//                        d,
//                        g
//                    };

//                    let carsl  = cars.g;
 




//                     console.log(cars)
//                    console.log(carsl)



//                   enum st {
//                       notfl = 10 ,
//                       Succ = 20,
//                       Acce = 202,

//                   }

//                   console.log(st.notfl)
//                   console.log(st.Succ)
//                   out put 10


//                   String Enums

//                   Enums can also contain string. this is more common than numeric enums ,because of their readability and intent.

//                  enum vl {
//                      ni = 'ma',
//                      ea = 'dd',
//                      cc = 'cc',
//                      ff ='ff'

//                  };

//                  console.log(vl.ni)


//                  TypeScript type Aliases and interface
 
//                 Ty creating a new Car using the alias provided
//                 type CarYear = number
//                 type CarType = string
//                 type CarModle = string
//                 type Car  ={
//                     year: CarYear,
//                     type:CarType,
//                     model: CarModle
//                 }


//                 const carYear:CarYear = 2001
//                 const carType:CarType = "Honda"
//                 const carModel:CarModle = "jjj"
//                  const car: Car = {
//                     year:carYear,
//                     type:carType,
//                     model:carModel
//                  };


//                 const paer:CarYear = 2002
//                 const ptype:CarType = "non"
//                 const pmodel:CarModle ="xyz"
//                 const pa:Car ={
//                     year:paer,
//                     type:ptype,
//                     model:pmodel
  
//                 }
//                  console.log(pa)
//                  console.log(car)


//                interface Rec {
//                    he:number
//                    width:number
//                }

//                const xys: Rec={
//                    he:20,
//                    width:10

//                }

//                console.log(xys)


//               interface Re {
//                   height:number,
//                   width:number
//               }

//               interface col extends Re{
//                   co:string
//               }

//               const vv :col ={
//                   height:20,
//                   width:45,
//                   co:"blue"
//               }

//               console.log(vv);



//               /* TypeScript Union Types-------------

//              Union types are used when a value can be more then a single type.

//              Such as when a property would be string or number


//             Using the  we are saying our parameter is a String or number
//             const pp = (c:string | number) =>{
//             console.log(`my status code is ${c}.`)
//             }

//             pp(444);
//             pp('000');

//             const  ll = (c:string|number) =>{
//                 console.log(`my status code is ${c.toUpperCase}.`) Property 'toUpperCase' does not exist on type 'string | number'.
   

//             } 

//             console.log(101)

//            function getTime() :number{
//                return new Date().getTime();
//            }

//            console.log(getTime());

//            1648464745471  return out put number


//            Void Return Type 
 
//           the type void can be used to indicate a function does not  return any value

//          function pp():void {
//              console.log(false);
//          }
//          pp();

//         Function paramenters are typed  woth a similar synatx as variable declarations.


//         const mm = (a:number, b:number)=>{
//             return a * b;
//         }

//         console.log(mm(1,5))


//         Optional  Parameters 
//         by default typeScript will assume all parameters are required, but they can be explocitly marked as OptionalEffectTiming


//        const add = (a:number ,b:number , c?:number)=>
//        {
//            return a+b+ (c || 0) ;  default 0 leve 

//        }

//        console.log(add(2,5))


//        default Parameters 

//        const pp = (va:number,ec:number = 20) =>{
//            return va * ec;
//        }

//        console.log(pp(11))



//       const  divide  = ({d1,d2}:{d1:number,d2:number}) =>{

//           return d1/d2;

//       }

//       console.log(divide({d1:5,d2:8}));


//      Rest Parameters 
//      Reat Parameters can be types like normal parameters,but the  type must be ... multiple value insert and count 

//      const add = (a:number ,b:number,...rest :number[]) =>{

//          return a+b + rest.reduce((i,c)=> i + c, 0);
 
//      }




//      console.log(add(10,10,10,10))

//     type Nagate = (value:number) => number;

//     const nn:Nagate = (value) => value * -1;
//     console.log(nn(10));


//       10 * -1
//      out put -10



//    ------------------ Casting With as 

//    let x:unknown = 'anil';
//    console.log((x as string).length)
//    console.log((<string>x).length) 


//    both are workin


//     let x:unknown = 4;
//     console.log((x as string).length) not show put put

//     let x = 'hello anil';
//     console.log(((x as unknown) as number).length);

//     ------TypeScript Calsses-------

//     TypeScrip t adds types and visibility modifiers to javaScript classes.

//    class Person {
//        name:string;
//    }

//    const person = new Person();
//    person.name ="hi anil";

//    console.log(person);

//   class Per {
//       name:string;

//   }
//   const per = new Per();
//   per.name = "hello typescript";
//   console.log(per)

//   --Members :visibility

//   class members also given special modifiers which affect visiblity

//   there are three main visibility modifiers in TypeScript

//   1) public - default allows access to class member from anywhere
//   2) private - only allows access to the class member from within the class
//   3) -allows access to the class member from itself  and  any  classes  that inherit interface, which is civered in the inheritance section below


//  class Pe {
//      private name:string;

//      public constructor(name:string){
//          this.name = name;
//      }
//      public getName(): string{
//          return this.name;
//      }
//  }

//  const per  =new Pe('hi anil');
//  console.log(per.getName());

//  class Person {
//      public  constructor(private name:string){

//      }

//      public getName():string{
//          return this.name;

//      }
//  }

//  const person = new Person("anil bhil");
//  console.log(person.getName());

//  class Person {
//      private readonly name:string;

//      public constructor(name:string){
//          this.name = name;
//      }

//      public getName():string{
//          return this.name;

//      }

//  }


//  const person = new Person("anil");
//  console.log(person.getName());


//  interface Shape {
//      getArea: () => number;
//  }

//  class Re implements Shape{
//      public constructor(protected readonly width:number, protected readonly height:number)
//      {}


//      public getArea ():  number{
//          return this.width * this.height;
//      }
//  }

//  const my = new Re( 10 , 20);
//  console.log(my.getArea());


//  interface Shape {
//      getArea: () => number;

//  }
//  class Rec implements Shape{
//      public constructor (protected readonly width:number, protected readonly height:number)
//      {}

//      public getArea(): number{
//          return this.width * this.height;
//      }

//      public toString(): string{
//          return `Rec[width=${this.width},height=${this.height}]`;
//      }
//  }

//  class Square extends Rec{
//      public constructor (width:number){
//          super(width,width);
//      }
//      public override toString(): string {
//          return `Square[width=${this.width}]`;
//      }
//  }

//  const mysq = new Square(20);
//  console.log(mysq.toString());


//  abstract class polygon {
//     public abstract getArea():number;


//     public toString():string{
//      return `polygon[area=${this.getArea()}]`;
//     }
//  }
//  class Re extends polygon{
//      public constructor (protected readonly width:number,protected readonly height:number)
//      {
//          super();
//      }
//      public getArea(): number {
//          return this.width *this.height;
//      }
//  }

//  const my = new Re(20,50);
//  console.log(my.getArea());


//  .....TypeScript basic genric 



//  function  cta <s,t> (v1:s ,v2:t) : [s,t]{
//      return [v1,v2];
//  }
//  console.log(cta<string,number>('helo',  45))

//  class NamedValue<T>{
//      private _value: T | undefined;


//      constructor (private name:string){

//      }

//      public  setValue(value: T){
//          this._value = value;
//      }

//      public getValue(): T | undefined {
//          return this._value;
//      }


//      public toString(): string{
//       return `${this.name}:${this._value}`;
//      }

//      public toSring():string{
//          return `${this.name}:${this._value}`;
//      }
//  }

//  let value = new NamedValue<number>('mynumebr');
//  value.setValue(10);
//  console.log(value.toString());

//  ---------------------------------
//  type Wrappedd<T> = {value: T}
//  const wa :Wrappedd<number> = {value :10}
//  console.log(wa)

//  ---------------------------------

//  class Namd<T = string>
//  {
//   private _value : T | undefined


//   constructor(private name:string){}

//   public setValue(value: T){
//      this._value = value;
//   }

//   public getValue(): T | undefined {
//       return this._value;
//   }
//   public toString():string{
//       return `${this.name}:${this._value}`;
//   }

//  }

//  let value = new Namd('myNumber');
//  value.setValue('myValue');
//  console.log(value.toString())


//  function cre <S extends string | Number , T extends string | number>(v1:S, v2:T):[S , T]
//  {
//      console.log(`creating pair: v1='${v1}',v2='${v2}'`)
//      return [v1 ,v2];
//  }


//  ----TypeScript utility Types 

// Partial 

//  Partial changes all the properties in an object to be optional.

//  interface Point{
//      x:number;
//      y:number;
//  }

//  let poin:Partial<Point> = {}; 
//  poin.x = 10
//  poin.y =20

//  console.log(poin)


//  interface car {
//      make:string;
//      model:string;
//      mileage?:number;
//  }

//  let Mycar:Required<car> = {
//      make:'foo',
//      model:'fos',
//      mileage:12000
//  };

//  console.log(Mycar);


//  const ma : Record<string ,number >= {
//      'hi':4,
//      'kk':5
//  };
//  console.log(ma)

// Omit

//  interface Person {
//      name:string;
//      age:number;
//      location ?:string;
//  }

//  const xyz : Omit<Person, 'age' | 'loaction' >= {
//      name : 'viihf'
//      remove object type age or loaction 
//  };

//  console.log(xyz)

//  === Pick 


//  pick removes all but the specified kys from an object type.

//  interface Pr {
//      name:string;
//      age:number;
//      location?:string;
//  }


//  const ll:Pick <Pr , 'name' >= { mention type proprty display 
//      name :'nimal'
//  };

//  console.log(ll)

//  +====Exclude
//  type primitive = string | number | boolean

//  const value:Exclude<primitive  ,string >  = true ;
//  console.log(typeof value)


//  Parameters

//  Parameters extracts the parameter types of a function type as an array.


//  type Point = (p: {x:number; y:number;}) => void ;

//  const point:Parameters<Point>[0] ={
//      x:10,
//      y:20
//  };

//  console.log(point);


//  interface Person {
//      name :string;
//      age:number;

//  }

//  function pa (person:Person, pro: keyof Person){
//      console.log(`Printing per ${pro}:"${person[pro]} "`)
//  }

//  let person = {
//      name : "Max",
//      age :27
//  };

//  pa(person,'name' )


//  type St = {
//      [key:string] :unknown
//  };

//  function pp(pro:keyof St , value:string):St{
//      return {[pro]:value}
//  }

//  console.log(pp);

//  let value: string | undefined | null = null;
//  console.log(typeof value);


//  value = 'hello';
//  console.log(typeof value);

//  value = undefined ;
//  console.log(value)

//  value = null;
//  console.log(value)


//  interface House {
//      sqft : number ;
//      yard ?:{
//          sqft:number;
//      };
//  }

//  function pp (house:House){
//      const yardSize  = house.yard?.sqft;
//      if(yardSize === undefined){
//          console.log('no yard');
//      }

//      else{
//          console.log(`Yard is ${yardSize} sqft`)
//      }
//  }

//  let home:House = {
//      sqft:500
//  };

//  pp(home);


//  function pp(mileage: number  | null | undefined){
//      console.log(`Mileage: ${mileage ?? ' not available'}`);

//  }

//  pp(null);
//  pp(0)


//  function getValue(): string | undefined{
//      return 'hello';

//  }

//  let value = getValue()
//  console.log('va length:' + value!.length);


// let array:number[] = [1,2,3,4];
// let value = array[2];
// console.log(typeof value)