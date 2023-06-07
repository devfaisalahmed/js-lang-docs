var mySet = new Set();
mySet.add("Bangladesh");
mySet.add("india");
mySet.add("Napel");
mySet.add("Bhotan");
mySet.add("india");
mySet.add("Srilanka");
mySet.add("Uk");
mySet.add("india");

console.log(mySet.values());
if (mySet.has("Srilanka")) {
  console.log("OK");
} else {
  console.log("no");
}
