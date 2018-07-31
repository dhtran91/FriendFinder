function Friend(name, photo, scores){
    this.name = name,
    this.photo = photo,
    this.scores = scores;
}
//Empty array to hold an instance of Friend
let friends = [];

//Dummy data
friends.push(new Friend("Meghan", "https://s24193.pcdn.co/wp-content/uploads/2017/07/rachel-zane-suits-entity-meghan-markle-1320x720.png", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

module.exports = friends;
module.exports.newFriend = Friend;