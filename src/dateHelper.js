
export default function dateHelper( dateString, replaceChar) {
    replaceChar = replaceChar || "xx";
    let dateArr = dateString.split("-");
    let date = (dateArr[2]!=="00"?dateArr[2] : replaceChar  ) + "." + (dateArr[1]!=="00"?dateArr[1] : replaceChar  ) + "." + dateArr[0];
    
    return date;
}   