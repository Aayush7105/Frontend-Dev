"use strict";

function demo(a, b) {
 

    let total = 10;

    try {
        delete total; 
    } catch (err) {
        console.log("Error:", err.message);
    }
}

demo(5, 10);
