(function() {
    let string = 'SDFD koasdfjk oipajsd fpaisd890u0daf asjdfh809ausd f0awjhk;l';
    console.log(urlIfy(string));
})();

function urlIfy(string) {
    let regex = / /g;

    string = string.replace(regex, '%20');

    return string;
}