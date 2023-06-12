var students = ["ram", "shyam", "mohan"];

function add(name) {
  students = students.push(name);
  console.log(students);
  return students;
}

function remove(a, b) {
  students = students.splice(a, b);
  return students;
}

function show() {
  console.log(`list of students ${students}`);
}

console.log(remove(1, 2));
