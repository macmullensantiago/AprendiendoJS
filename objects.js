// Dot Notation
console.log(book2.author);
book2.author = "G.Orwell";
console.log(book2);

// Brackets Notation
console.log(book2["author"]);
book2["author"] = "G.Orwell";
console.log(book2);

// Let's talk about "this"
const bookObj = {
  checkIn: function() {
    return this;
  }
}
console.log("\n\nthis is: ", bookObj.checkIn());
console.log(bookObj.checkIn() === globalThis);

function anotherCheckIn();
  return this;
}

console.log("\n\nthis is: ", antoherCheckIn());
console.log(antoherCheckIn() === globalThis);
