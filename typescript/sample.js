//Function
var app = /** @class */ (function () {
    function app() {
    }
    app.prototype.test = function () {
        console.log("Test Function");
    };
    return app;
}());
var a1 = new app();
a1.test();
//Array
var data = ['Neel', 'Rahul', 'Vikas'];
//Adding new value In Array
data.push("Mr_Neel");
console.log(data);
/*
-->  [Any] is used for any datatype in object
Ex = let user:any ={
*/
var user = {
    name: 'VIKAS',
    age: 21,
    address: 'USA'
};
console.log(user);
//Union Types
var data1 = "Vikas";
data1 = 30;
//data1 = true
console.log(data1);
var user1 = {
    fname: "Vikas",
    Age: 21,
    Myfunction: function () {
        return "Neel";
    }
};
console.log(user1.Myfunction());
// Normal Function
function cal() {
    return 10 + 10;
}
console.log(cal());
//Classed 
var App = /** @class */ (function () {
    function App() {
        this.name = "Vikas Sen";
    }
    App.prototype.getName1 = function () {
        console.log(this.name);
    };
    return App;
}());
var a1 = new App();
a1.getName1();
