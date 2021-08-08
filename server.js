const readline = require("readline");
const EventEmitter = require("events");
const eventEmitter = new EventEmitter;


const readline1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

var books = ["book1","book2","book3"];

eventEmitter.on("option_1",() => {
    books.forEach((el) => {
        console.log(el);
    })
});

function book() {
readline1.question("Choose an option:1, 2, or 3",input => 
{
    if(`${input}` == 1){
        eventEmitter.emit("option_1");
        book();
    } 
    
    if(`${input}` == 2){
        readline1.question("Add a book", bookname => {
            books.push(bookname);
            console.log("done");
            book();
        })
    }
    
    if(`${input}` == 3){
        readline1.question("Are you sure,you want to quit?",quit => {
            if(`${quit}` == "Y") {
                console.log("Bye Bye");
                readline1.close()
            }
        })    
    }
})       

}

book();


   


