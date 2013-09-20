function addItem() {
	
	var texBox = document.getElementById('listInput');
	var val = texBox.value;
	var ele = texBox.id;
	texBox.value = "";
	var newItem = document.createElement("li"); //creating element "li" in html
	newItem.id = "listVal";
	var textNode = document.createTextNode(val); //creating a new variable that is taking the textbox value
    newItem.appendChild(textNode); //appending new item or the li element to the textNode variable
    document.getElementById('listItems').appendChild(newItem); //appending newItem variable to listItems ol
	var deleteBox = document.createElement('input');
	deleteBox.type = "checkbox";
	deleteBox.name = "item"
	newItem.appendChild(deleteBox); //appending deleteBox to newItem variable
	
};

function deleteItem() {
	var textItem = document.getElementsByName('item'); //grabbing the checkbox, name "item"
	for (i=textItem.length - 1; i>=0; i--) //loop through the checkbox
		{
		if(textItem[i].checked) //if it is checked
			{
			var remItem = textItem[i]; // creating a variable to reference textItem element to be removed
			var liItem = document.getElementById('listItems'); //
			remItem.parentNode.removeChild(remItem); //grabbing the parent of item element, which is the "li", and removing the child, which is the text box
			ol = document.getElementsByTagName('ol')[0]; //setting ol = to the html element tag 'ol' in the zero position??
			li = ol.getElementsByTagName('li'); //setting li = to the ol.li
			ol.removeChild(li[i]); //removing the ol child li[i] through the loop??
		}
		else{

		}
	};

function strikeThrough() {
	var del = document.getElementsByName('item');
	var delItem = document.getElementById('listVal');
	if (del.checked === true) 
		{
		delItem.Style.setProperty("text-decoration", "line-through");
		}
	else {

		}
	}
}

