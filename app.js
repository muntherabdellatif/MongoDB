//jshibt esversion:6
// adding mongoose modules
const mongoose =require("mongoose");

// connecting to data base (fruitsDB)
mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser:true});

// definning the scheme and the model for data base 
const fruitSchema = new mongoose.Schema({
    name:{
        type:String ,
        required : [true] 
    },
    rating: {
        type: Number ,
        min : 0 ,
        max : 10 ,
    },
    review : String ,
});
const Fruit =mongoose.model("Fruit",fruitSchema);

// definning the scheme and the model for data base 
const personSchema = new mongoose.Schema({
    name:{
        type:String ,
        required : [true] 
    },
    age: {
        type: Number ,
        min : 0 ,
        max : 100 ,
    },
    favouriteFruit:fruitSchema
});
const Person =mongoose.model("person",personSchema);


// inserting element to data base
const person= new Person ({
    name :"Monther",
    age : 26 ,
});
// person.save();

// inserting element to data base
const fruit= new Fruit ({
    name :"Apple",
    rating : 5 ,
    review :" very good!" 
});
// fruit.save();

// adding many data to data base 
const banana= new Fruit ({
    name :"banana" , 
    rating : 6 ,
    review :" good!" 
});
const orange= new Fruit ({
    name :"orange" , 
    rating : 6 ,
    review :"not bad!" 
})
// Fruit.insertMany([banana,orange],function (err) {
//     if (err){
//         console.log(err);
//     }else{
//         console.log("successfully add to data base");
//     }
// })

//find element in data base
Fruit.find(function (error,fruits) {
    if (error){
        console.log(error);
    }else {
        fruits.forEach((e)=>{
            console.log(e.name);
        });
    }
});

let firstFruit=[] ;
//find element in data base
Fruit.find(function (error,fruits) {
    if (error){
        console.log(error);
    }else {
        firstFruit=fruits[0];
        console.log(firstFruit);
    }
});


// update data 
Fruit.updateOne({_id:"618e941f4fc8d5e57d035b2c"},{name:"peach"},function(er){
    if(er){
        console.log(er);
    }else {
        console.log("done");
    }
});

Person.updateOne({name:"Monther"},{favouriteFruit:firstFruit},function (e) {
    
});

//delete one 
Fruit.deleteOne({_id:"618e9472dde34ef2d131624d"},function(er){
    if(er){
        console.log(er);
    }else {
        // mongoose.connection.close();
        console.log("delete done");
    }
});
