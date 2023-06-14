var student = {
  rollnumber: 1,
  name: "Sourav Debnath",
  adderss: {
    place: "lpu",
    state: "punjab",
    country: "india",
  },
  printDetail: function () {
    console.log("StudentDetail", this.name);
    return;
  },
};

console.log(student.adderss.state);
console.log(student.printDetail());
