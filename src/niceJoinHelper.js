
export default function niceJoinHelper( arr ) {

    let finalSeperator = arguments[1] || " und ";

    let nicelyJoined = "";
    let length=arr.length;
    if (length>1) {
        
        nicelyJoined=arr.slice(0,length-1).join(", ") + finalSeperator + arr[length-1];
    } else {
        nicelyJoined=arr;
    }
    
    return nicelyJoined;
}   