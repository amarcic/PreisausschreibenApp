
export default function niceJoinHelper( arr, finalSeperator ) {

    finalSeperator = finalSeperator || " und ";

    let nicelyJoined = "";
    let length=arr.length;
    if (length>1) {
        
        nicelyJoined=arr.slice(0,length-1).join(", ") + finalSeperator + arr[length-1];
    } else {
        nicelyJoined=arr;
    }
    
    return nicelyJoined;
}   