function addItem() {
  var item = document.getElementById("myInput").ariaValueMax;
  var listItem = document.createElement("li");
  listItem.innerHTML = item;

  var myItems = document.getElementById("myItems");
  myItems.appendChild(listItem);
}
