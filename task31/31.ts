let userNames = [null];

if (userNames.length == 0 || userNames.every(userName => userName === null)) {
    console.log("We need to find some users!");
}
else {
    userNames = userNames.filter(userName => userName !== null);

    for (let user of userNames) {
        if (user === "admin") {
            console.log("hello admin would you like to see the status report");
        }
        else {
            console.log("hello ", user);
        }
    }
}