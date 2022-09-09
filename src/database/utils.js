const fs = require("fs");

const saveToDatabase = (DB) => {
    fs.writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2), {
    encoding: "utf-8",
    });
};

const sortBy = (option) => {
    let isReversed = option.startsWith('-');
    if(!isReversed) {
        if(option == 'createdAt' || option == 'updatedAt') {
            return function (a, b) {
                return Number(new Date(a[option])) - Number(new Date(b[option]))
            }
        }
        if(option == 'name' || option == 'mode') {
            return function(a, b) {
                return a[option].localeCompare(b[option])
            }
        }
    } else {
        let optionKey = option.split('-')[1];
        if(optionKey == 'createdAt' || optionKey == 'updatedAt') {
            return function (a, b) {
                return Number(new Date(b[optionKey])) - Number(new Date(a[optionKey]))
            }
        }
        if(optionKey == 'name' || optionKey == 'mode') {
            return function(a, b) {
                return b[optionKey].localeCompare(a[optionKey])
            }
        }
    };
    
}

module.exports = { 
    saveToDatabase,
    sortBy,
 };