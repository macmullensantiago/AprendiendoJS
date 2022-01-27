const names = ['Justin', 'Burke', 'Sarah'];


console.log('-- while loop --');
let whileIndex = 0; 
while (whileIndex < names.length) {
  const name = names[whileIndex];
  console.log(name);
  whileIndex++;
}

console.log('-- for loops--');
for (let forIndex = ; forIndex < names.length; forIndex++) {
  const name = names[forIndex];
  console.log(name);
  
  console.log('-- for ... of --');
  for (const name of names) {
    console.log(name);
