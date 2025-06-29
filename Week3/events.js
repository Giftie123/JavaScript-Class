//event
//event handling
//event listening (HTML element)
//element.addEventListener (eventType, handlerFunction)
//eventType(listen for a click, hoover, tap etc)
const button = document.getElementById("submitButton")
// element.addEventListener (eventType, handlerFunction)
function handleSubmit() {
    alert("your chick request has been submitted")
    console.log()
}
button.addEventListener("click", handleSubmit)
button.removeEventListener("click", handleSubmit)
document.addEventListener("click", function (event) {
    console.log(event.type)
})

