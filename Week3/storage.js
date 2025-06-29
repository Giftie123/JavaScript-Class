//browser storage usually for cookies etc
//localStorage/* stores data until you clear it manually

localStorage.setItem("name", "John Doe"); //setItem
localStorage.getItem("name"); //getItem
localStorage.clear(); //clear all items
localStorage.removeItem("name"); //remove specific item

let user = {
    name: "Jane Doe",
    age: 30,

}
localStorage.setItem("user", JSON.stringify(user)); //store/saving data
let data = JSON.parse()



//sessionStorage/* stores data fr the duration of the page session. The data is lost when the tab or browser is closed.
sessionStorageStorage.setItem("sessionName", "John Doe"); //setItem
sessionStorageStorage.getItem("sessionName"); //getItem
sessionStorageStorage.clear(); //clear all items
sessionStorage.removeItem("sessionName"); //remove specific item

//cookiesStorage
//indexedDatabase

JSON.stringify(localStorage); //convert localStorage to JSON string