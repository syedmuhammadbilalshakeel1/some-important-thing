let create_list = document.querySelector(".create_list");

let object = {
  parent_name: "father",
  child1: "Sumair",
};
let array = [
  "Hamza",
  "Shahbaz",
  "Jahanzaib",
  "Junaid",
  "Tabish",
  "Ahtisham",
  "Asghar",
];

object.child2 = array[0];
object.child3 = array[1];
object.child4 = array[2];
object.child5 = array[3];
object.child6 = array[4];
object.child7 = array[5];
object.child8 = array[6];


console.log(object);

let pr_browser= JSON.stringify(object)
document.write(`${pr_browser}`)