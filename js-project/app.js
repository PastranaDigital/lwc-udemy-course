// //? Sets
// const students = new Set(['John', 'Bob']);
// console.log(students);
// students.add('Jill');

// console.log(students);
// console.log('Jill? ', students.has('Jill'));
// console.log('jill? ', students.has('jill'));

// students.delete('Bob');

// console.log(students);

// const studentArray = Array.from(students);

// console.log(studentArray);
// studentArray.push('Jill');
// console.log(studentArray);

//? Maps
const sections = new Map([
  ['A201', ['Amy', 'Ben']],
  ['B201', ['Ben', 'Candice']],
]);

console.log(sections);

const students = sections.get('A201');
console.log(students);

sections.set('B101', ['Amy', 'Candice', 'Darren']);
console.log(sections);

//* will override the existing values for the key
// sections.set('A201', []);
// console.log(sections);

console.log(sections.keys());
console.log(sections.values());
console.log(sections.entries());

!sections.has('A201') && sections.set('A201', []);
console.log(sections);
