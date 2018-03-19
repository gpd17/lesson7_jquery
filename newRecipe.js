//displays and animates the next element after the current target
function display2(event) {
 $(event.currentTarget).next().animate( {height: 'toggle'}, "fast");
}//end of display2
//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display2);
