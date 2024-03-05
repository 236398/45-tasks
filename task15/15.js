var guest_list = ['Essa', 'Taha', 'Sufiyan', 'Abdullah',];
for (var i = 0; i < guest_list.length; i++) {
    console.log(' Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on a dinner tomorrow.\nThank You\n');
}
var not_present = 'Abdullah';
var new_guest = 'Ibrahim';
guest_list[3] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log(' Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on a dinner tomorrow.\nThank You\n');
}
console.log("Mr. ".concat(not_present, " will not coming tomorrow dinner "));
