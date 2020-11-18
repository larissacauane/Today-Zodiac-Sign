import signs_collection from './data/data.js'
import return_zodiac_sign from './functions/functions.js'

let date_app = new Date();

const name_sign = return_zodiac_sign(signs_collection, date_app);

console.log("Today's zodiac sign is: " + name_sign);