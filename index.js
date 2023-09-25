const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name);
}

function destructivelyPrependCat(name){
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}

function appendCat(name){
    const appendedCats = [...cats,name];
    return appendedCats
}

function prependCat(name){
    const prependedCats = [name,...cats,];
    return prependedCats
}

function removeLastCat(){
    const missingLast = cats.slice(0,cats.length-1)
    return missingLast
}

function removeFirstCat(){
    const missingFirst = cats.slice(1);
    return missingFirst
}
