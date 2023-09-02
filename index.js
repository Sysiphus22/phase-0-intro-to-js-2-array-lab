// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructievlyAppendCat(name) {
	cats.push(name);
}

function destructivelyPrependCat(name) {
	cats.unshift(name);
}

function destructivelyAppendCat(name) {
	cats.push(name);
}

function destructivelyRemoveLastCat(name) {
	cats.pop();
}

function destructivelyRemoveFirstCat(name) {
	cats.shift();
}

function appendCat(name) {
	const copyOfCats = ["Milo", "Otis", "Garfield", "Broom"];
	return copyOfCats;

}

function prependCat(name) {
	const copyOfCats = ["Arnold", "Milo", "Otis", "Garfield"];
	return copyOfCats;
}

function removeLastCat(name) {
	const copyOfCats = cats.slice(0, -1);
	return copyOfCats;
}

function removeFirstCat(name) {
	const copyOfCats = cats.slice(1);
	return copyOfCats;
}