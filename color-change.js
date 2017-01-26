
console.log('selection');
var target = window.getSelection().anchorNode.parentElement;
console.log(target);
// .stlye.cssText = "background-color: white";
target.parentElement.style.cssText += "background-color: white";
target.style.cssText += "color: black"
