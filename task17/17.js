var guest_list = ['Essa', 'Taha', 'Sufiyan', 'Abdullah',];
//  for(let i = 0; i < guest_list.length; i++){
//  console.log(' Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on a dinner tomorrow.\nThank You\n');
//  }
var not_present = 'Abdullah';
var new_guest = 'Ibrahim';
guest_list[3] = new_guest;
// for(let i = 0; i < guest_list.length; i++){
//     console.log(' Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on a dinner tomorrow.\nThank You\n');
// }
guest_list.unshift('Ali', 'Daniyal', 'Huzaifa');
//  for(let i = 0; i < guest_list.length; i++){
//  console.log(' Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on a dinner tomorrow. we found big table so we decide to invite 3 more guests \nThank You\n');
//  }
console.log('\nunfortunately we cannot arrange big table , only two people allow.');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry Sir/Madam.".concat(remove_guest, " you are not invited for dinner"));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log(' Respected Sir/Madam ' + guest_list[i] + ',\nYes you are still invited on tomorrow dinner\nThank You\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
