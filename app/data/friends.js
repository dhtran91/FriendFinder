function Friend(name, photo, scores){
    this.name = name,
    this.photo = photo,
    this.scores = scores;
}
//Empty array to hold an instance of Friend
let friends = [];

//Dummy data
friends.push(new Friend("Meghan", "https://s24193.pcdn.co/wp-content/uploads/2017/07/rachel-zane-suits-entity-meghan-markle-1320x720.png", [5,5,3,3,3,3,3,3,3,3]))
friends.push(new Friend("Obama", "https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg", [1,1,1,1,1,1,1,1,2,2]))

module.exports = friends;
module.exports.newFriend = Friend;