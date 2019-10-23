// this gives a nodelist, not an array
const inputs = document.querySelectorAll(".controls input")

function handleUpdate(){
	// console.log(this.value)
	const suffix = this.dataset.sizing || ""
	// console.log(suffix)
	
	// select entire css doc with root
	// console.log(name) // --> this will get the names in html
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => {
	input.addEventListener("change", handleUpdate)
})
// // this will just show changes being made when you put your mouse over it
// inputs.forEach(input => {
// 	input.addEventListener("mousemove", handleUpdate)
// })