(function() {
    let strTest = "THis is a test string";

    console.log(reverseWords(strTest))
})();

function reverseWords(str) {
    let strArray = str.split(" ");
    strArray.reverse();
    return strArray.join(" ");
}