let signs_collection = [
    {"Name": "Aquarius", "StartDate": "01-02", "EndDate": "02-18"},
    {"Name": "Pisces", "StartDate": "02-19", "EndDate": "03-20"},
    {"Name": "Aries", "StartDate": "03-21", "EndDate": "04-19"},
    {"Name": "Taurus", "StartDate": "03-21", "EndDate": "04-19"},
    {"Name": "Gemini", "StartDate": "05-21", "EndDate": "06-21"},
    {"Name": "Cancer", "StartDate": "06-22", "EndDate": "07-23"},
    {"Name": "Leo", "StartDate": "07-24", "EndDate": "08-22"},
    {"Name": "Virgo", "StartDate": "08-23", "EndDate": "09-22"},
    {"Name": "Libra", "StartDate": "09-23", "EndDate": "10-22"},
    {"Name": "Scorpio", "StartDate": "10-23", "EndDate": "11-21"},
    {"Name": "Sagittarius", "StartDate": "11-22", "EndDate": "12-21"},
    {"Name": "Capricorn", "StartDate": "12-22", "EndDate": "01-19"}
]

const check_data_range = (date, start_date, end_date, comparation) => {

    if (comparation == "and") {
        return (date >= start_date && date <= end_date)
    }else if (comparation == "or") {
        return (date >= start_date || date <= end_date)
    }
}

const return_zodiac_sign = (signs, date) => {
    
    let year = date.getFullYear()

    for ( const sign of signs ){

        let start_date_sign = new Date(year + "-" + sign["StartDate"] + " 00:00:00")
        let end_date_sign = new Date(year + "-" + sign["EndDate"] + " 23:59:59")

        let comparation = sign["StartDate"] == "12-22" ? "or" : "and"

        if (check_data_range(date, start_date_sign, end_date_sign, comparation)) {
            return sign["Name"]
        }

    }
}


let date_app = new Date();

const name_sign = return_zodiac_sign(signs_collection, date_app);

console.log("Today's zodiac sign is: " + name_sign);
