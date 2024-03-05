
let userNames = ["admin", "Essa", "Aman", "Labina", "Alwisha"];

for(let users of userNames) {
    if(users === "admin") {
        console.log("hello admin would you like to see the status report");
    }
    else {
        console.log("hello ", users);
    }

}