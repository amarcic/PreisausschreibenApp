
export default function dateHelper( dateString ) {
    //would be better if it also would be possible to use "" (empty string)
    let replaceChar = arguments[1] || "xx";
    let dateArr = dateString.split("-");
    let date = "";
    if (replaceChar.trim() ==="") {
        date = (dateArr[2]!=="00"?dateArr[2] + "." : replaceChar  ) + (dateArr[1]!=="00"?dateArr[1] + "." : replaceChar  ) + dateArr[0];
    } else {
        date = (dateArr[2]!=="00"?dateArr[2] : replaceChar  ) + "." + (dateArr[1]!=="00"?dateArr[1] : replaceChar  ) + "." + dateArr[0];
    }
    
    
    return date;
}   