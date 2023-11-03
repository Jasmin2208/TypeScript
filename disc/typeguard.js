"use strict";
const favHobbies = (hobbies) => {
    if (Array.isArray(hobbies)) {
        hobbies.map((h) => {
            console.log(h);
        });
    }
    else {
        console.log(hobbies);
    }
};
favHobbies("game");
favHobbies(["game", "codeing"]);
