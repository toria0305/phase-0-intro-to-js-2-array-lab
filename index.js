const cats = ["Milo","Otis","Garfield",];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}
function destructivelyRemoveLastCat() {
    cats.splice(-1);
    return cats;
}
function destructivelyRemoveFirstCat() {
    cats.shift(1);
    return cats;
}
function appendCat(name) {
    let appendCat;
    appendCat = [...cats, name];
    return appendCat;
}
function prependCat(name) {
    let prependCat;
    prependCat = [name, ...cats];
    return prependCat;
}
 function removeLastCat() {
    return cats.slice(0,cats.length -1);
 }
function removeFirstCat() {
    return cats.slice(1);
}
