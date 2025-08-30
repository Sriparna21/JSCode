// var c = 300 

let a = 100

// block scope
if (true) {
    let a = 10;
    const b =20;
    var c = 30;

    // console.log ("Inner: ", a)

}

// Anything outside is global scope

// console.log (a)
// console.log (b)
// console.log (c)


function one (){
    const userName = "Sriparna"

    function two (){
        const website = "youtube"
        console.log(userName);
    }

    // console.log(website);

    two ()
}

// one ()


if (true){
     const userName = "Sriparna"
     if (userName === "Sriparna") {
        const website = "youtube"
        console.log(userName + " " + website);
     }

    //  console.log (website)
}

// console.log (userName);