function toCase(text) {
  // write your code here
	let car = text.toLowerCase()+"-"+text.toUpperCase();
	return car;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
