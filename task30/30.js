var userNames = ["admin", "Essa", "Aman", "Labina", "Alwisha"];
for (var _i = 0, userNames_1 = userNames; _i < userNames_1.length; _i++) {
    var users = userNames_1[_i];
    if (users === "admin") {
        console.log("hello admin would you like to see the status report");
    }
    else {
        console.log("hello ", users);
    }
}
