// function addItem() {
//   var item = document.getElementById("myInput").value;
//   var listItem = document.createElement("li");
//   listItem.innerHTML = item;

//   var myItems = document.getElementById("myItems");
//   myItems.appendChild(listItem);
// }
// addItem();

function addItem() {
  var item = document.getElementById("myInput").value;
  var listItem = document.createElement("li");
  listItem.innerHTML = item;

  var myItems = document.getElementById("myItems");
  myItems.appendChild(listItem);
}