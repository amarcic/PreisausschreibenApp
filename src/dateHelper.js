
export default function dateHelper( dateString ) {
    let dateArr = dateString.split("-");
    let date = (dateArr[2]!=="00"?dateArr[2] : "xx"  ) + "." + (dateArr[1]!=="00"?dateArr[1] : "xx"  ) + "." + dateArr[0];
    
    return date;
}   