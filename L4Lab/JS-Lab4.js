function getRange(start, end, step = 1) {
    var result = [];
    if (start <= end) {
        for (let i = start; i <= end; i += step) {
            result.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            result.push(i);
        }
    }
    return result;
}
console.log(getRange(1, 10));    



function reverse(str) {
    var result = "";
    for (let i = str.length - 1; i >= 0; i-- ) {
        result += str[i];
    }
    return result;
}
console.log(reverse("123456789"))


function maskCard(card, mask = "X") {
  var s = String(card);
  return s.slice(0, 6) + mask.repeat(s.length - 10) + s.slice(-4);
}
console.log(maskCard("1234567890123456"));     