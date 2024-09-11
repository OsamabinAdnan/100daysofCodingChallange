/**************************
 * CLASS TYPE ANNOTATIONS *
 **************************/

class Product {
    // Property type annotations
    id:number;
    name:string;
    price:number;

    constructor(id:number, name:string, price:number){
         // Constructor parameter type annotations
        this.id = id;
        this.name = name;
        this.price = price;
    }
     // Method type annotations
    getProductInfo ():string {
        return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}`
    }
}
// Create an instance of the Product class
const product1 = new Product(1, 'Watch', 100);
// Access class properties and call a method
console.log(product1.getProductInfo());

/***************************
 * CLASS ACCESS MODIFIERS: *
 ***************************/
//@@@ Public @@@
class MyClassPublic {
    public name:string;

    constructor(name:string){
        this.name =name
    }
}
const instancePublic = new MyClassPublic("Osama")
console.log(instancePublic.name);

//@@@ Private @@@
class MyClassPrivate {
    private secret:string;

    constructor(secret:string){
        this.secret =secret
    }
    revealSecret(){
        console.log(this.secret);        
    }
}
const instancePrivate = new MyClassPrivate("My secret")
instancePrivate.revealSecret()

//@@@ Protected @@@

class Parent {
    protected familyName: string;

    constructor(name: string) {
        this.familyName = name;
    }
}

class Child extends Parent {
    introduceFamily() {
        console.log(`Our family name is ${this.familyName}`);
    }
}

const parentEx = new Parent("Smith");
const childEx = new Child("Johnson");

childEx.introduceFamily()

/*******************
 * CLASS ACCESSORS *
 *******************/

class ProductExAccessors {
    private _price:number; // 'private' property

    constructor (private id:number, private name:string){
        this._price = 0
    }

     // 'public' getter for price
    get price():number{
        return this._price
    }
     // 'public' setter for price
    set price(newPrice:number){
        if (newPrice > 0){
            this._price = newPrice
        } else {
            console.log(`Price cant be negative`);            
        }
    }
    getProductInfo():string{
        return `ID: ${this.id}, Name: ${this.name}, Price: ${this._price}`
    }
}

// Create an instance of the ProductExAccessors class
const productEx = new ProductExAccessors (1, "Wiget")
console.log(productEx.getProductInfo());

// Use the 'setter' to update the price
productEx.price = 20.0
console.log(productEx.getProductInfo());

// Attempting to set a negative price triggers the setter logic
productEx.price = -20.0 // Price cannot be negative.

/************************
 * CLASS STATIC MEMBERS *
 ************************/

class ProductStaticMembers {
    private static nextID:number = 1

    constructor (private id:number, private name:string){
    }
    static generateNextID():number{
        return ProductStaticMembers.nextID++;
    }
    getProductInfo ():string{
        return `ID: ${this.id}, Name: ${this.name}`
    }
}

const product1static =  new ProductStaticMembers (
    ProductStaticMembers.generateNextID(),"Widget"
)

const product2static =  new ProductStaticMembers (
    ProductStaticMembers.generateNextID(),"Gadget"
)

const product3static =  new ProductStaticMembers (
    ProductStaticMembers.generateNextID(),"Watch"
)

console.log(product1static.getProductInfo());
console.log(product2static.getProductInfo());
console.log(product3static.getProductInfo());


/*****************************
 * CLASS IMPLEMENT INTERFACE *
 *****************************/

class ProductImplementInterface {
    // 'private' property
    private static nextId: number = 1;
  
    constructor(private id: number, private name: string) {}
  
    static generateNextId(): number {
      return ProductImplementInterface.nextId++;
    }
  
    getProductInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}`;
    }
  }
  
  // Generate unique IDs for products using the static method
  const product1implement = new ProductImplementInterface(
    ProductImplementInterface.generateNextId(),
    "Widget"
  );
  const product2implement = new ProductImplementInterface(
    ProductImplementInterface.generateNextId(),
    "Gadget"
  );
  
  console.log(product1implement.getProductInfo()); // ID: 1, Name: Widget
  console.log(product2implement.getProductInfo()); // ID: 2, Name: Gadget

/********************************
 * ABSTRACT CLASSES AND MEMBERS *
 ********************************/

abstract class AbstractItem {
    private static nextID:number = 1

    constructor (public id:number, protected name:string){}

    static generatNextID():number {
        return AbstractItem.nextID++
    }

    abstract getItemInfo ():string
}
class Item extends AbstractItem {
    constructor(id:number, name:string){
        super (id, name)
    }
    getItemInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}`
    }    
}
const item1:AbstractItem = new Item(AbstractItem.generatNextID(), "Wallet")
const item2:AbstractItem = new Item(AbstractItem.generatNextID(), "Pen")

console.log(item1.getItemInfo());
console.log(item2.getItemInfo());

/**********************************
 * POLYMORPHISM & METHOD OVERRIDE *
 **********************************/

// Define an abstract class
abstract class AbstractEntity {
    private static nextId: number = 1;
    protected constructor(public id: number, protected name: string) {} // Change 'private' to 'protected'
    static generateNextId(): number {
      return AbstractEntity.nextId++;
    }
    abstract getEntityInfo(): string;
  }
  
  // Create a concrete subclass
  class Entity extends AbstractEntity {
    constructor(id: number, name: string) {
      super(id, name);
    }
    getEntityInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}`;
    }
  }
  
  // Create another concrete subclass
  class AnotherEntity extends AbstractEntity {
    constructor(id: number, name: string) {
      super(id, name);
    }
    getEntityInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}, Additional Info: ...`;
    }
  }
  
  // Generate unique IDs for entities using the static method
  const entity1: AbstractEntity = new Entity(
    AbstractEntity.generateNextId(),
    "Widget"
  );
  const entity2: AbstractEntity = new AnotherEntity(
    AbstractEntity.generateNextId(),
    "Gadget"
  );
  
  // Polymorphism: Call 'getEntityInfo' method on different concrete subclasses
  console.log(entity1.getEntityInfo()); // ID: 1, Name: Widget
  console.log(entity2.getEntityInfo()); // ID: 2, Name: Gadget, Additional Info: ...