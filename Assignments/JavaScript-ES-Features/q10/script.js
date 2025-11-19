"use strict";

function outer() {
    var count = 5;
    console.log("Outer count:", count);

    const inner = () => {
        console.log("Inner sees:", count);
        let count = 10; 
        console.log(count);
    };

    try {
        inner();
    } catch (err) {
        console.log("Error inside arrow inner():", err.message);
    }
}

outer();
