
export default function dateHelper( dateString ) {
    //would be better if it also would be possible to use "" (empty string)
    let replaceChar = arguments[1] || "xx";
    let seperator = arguments[2] || ".";
    let mode = arguments[3] || "ger";
    let dateArr = dateString.split("-");
    let date = "";

    switch(mode) {
        case "ger":
            if (replaceChar.trim() === "") {
                date = (dateArr[2]!=="00"?dateArr[2] + seperator : replaceChar  ) + (dateArr[1]!=="00"?dateArr[1] + seperator : replaceChar  ) + dateArr[0];
            } else {
                date = (dateArr[2]!=="00"?dateArr[2] : replaceChar  ) + seperator + (dateArr[1]!=="00"?dateArr[1] : replaceChar  ) + seperator + dateArr[0];
            }
            break;
        default:
        if (replaceChar.trim() === "") {
            date = dateArr[0] + (dateArr[1]!=="00"?dateArr[1] + seperator : replaceChar  ) + (dateArr[2]!=="00"?dateArr[2] + seperator : replaceChar  );
        } else {
            date = dateArr[0] + seperator + (dateArr[1]!=="00"?dateArr[1] : replaceChar  ) + seperator + (dateArr[2]!=="00"?dateArr[2] : replaceChar  );
        }
    }
    
    
    
    return date;
}   