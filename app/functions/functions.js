function check_data_range(date, start_date, end_date, comparation) {

    if (comparation == "and") {
        return (date >= start_date && date <= end_date)
    } else if (comparation == "or") {
        return (date >= start_date || date <= end_date)
    }
}

function return_zodiac_sign(signs, date) {

    let year = date.getFullYear()

    for (const sign of signs) {

        let start_date_sign = new Date(year + "-" + sign["StartDate"] + " 00:00:00")
        let end_date_sign = new Date(year + "-" + sign["EndDate"] + " 23:59:59")

        let comparation = sign["StartDate"] == "12-22" ? "or" : "and"

        if (check_data_range(date, start_date_sign, end_date_sign, comparation)) {
            return sign["Name"]
        }

    }
}

export default return_zodiac_sign