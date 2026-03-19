//Immediately Invoked Function Expression (IIFE)
//They don't need to be called. 

(function status(status){
    console.log(status);
})(10);

//Arrow Function
((status) => (console.log(status))
)(20);