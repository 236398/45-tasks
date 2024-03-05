let current_users = ["Sufiyan", "Taha", "Ibrahim", "Mavia", "Ashir"];
let new_users = ["Taha", "Ibrahim", "Asad", "Hussain", "Shadab"];

function checkuserNames(current_users:string[], new_users:string[]){
    for (let new_user of new_users) {
        let lowercased_new_user: string = new_user.toLowerCase();
        let is_username_available: boolean = true;

        for (let current_user of current_users) {
            if (current_user.toLowerCase() === lowercased_new_user) {
                console.log(`The username '${new_user}' has already been used. Please enter a new username.`);
                is_username_available = false;
                break;
            }
        }

        if (is_username_available) {
            console.log(`The username '${new_user}' is available.`);
        }
    }
}

checkuserNames(current_users, new_users);