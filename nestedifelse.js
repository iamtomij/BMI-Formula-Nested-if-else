let myScore = 85;
let myFriendScore = 20;

if (myScore > 80) {
  if (myFriendScore > 80) {
    console.log("Go for lunch");
  } else if (myFriendScore >= 60) {
    console.log("next time");
  } else if (myFriendScore >= 50) {
    console.log("unseen message");
  } else {
    console.log("block my friend");
  }
} else {
  console.log("go to sleep and act sad");
}
