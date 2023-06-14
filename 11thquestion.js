//Q. Create an object called restaurnt with properties like name, menu and rating write function to add items to
//the menu remove items from the menu and calculate the average rating of the restaurnt.

var restaurnt = {
  name: "dhaba",
  menu: ["Roti dal", "Sbzi", "Karhi Panner", "ChickenButter masala"],
  rating: [5, 3, 3.5, 2.1],
  adding: function (foodYouWantToAdd) {
    this.menu.push(foodYouWantToAdd);
    return `${this.menu}`;
  },
  remove: function (a, b) {
    this.menu = this.menu.splice(a, b);
    return;
  },
  avg: function () {
    var totalSum = 0;
    for (var i = 0; i < this.rating.length; i++) {
      totalSum += this.rating[i];
    }
    var averageOfRating = totalSum / this.rating.length;
    console.log(averageOfRating);
    //return averageOfRating;
  },
};
console.log(restaurnt.adding("Abc"));
console.log(restaurnt);
restaurnt.avg();
