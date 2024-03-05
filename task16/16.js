var guest_list = ['Essa', 'Taha', 'Sufiyan', 'Abdullah',];
//  for(let i = 0; i < guest_list.length; i++){
//     console.log(' Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on a dinner tomorrow.\nThank You\n');
//  }
var not_present = 'Abdullah';
var new_guest = 'Ibrahim';
guest_list[3] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log(' Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on a dinner tomorrow.\nThank You\n');
}
guest_list.unshift('Ali', 'Daniyal', 'Huzaifa');
for (var i = 0; i < guest_list.length; i++) {
    console.log(' Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on a dinner tomorrow. we found big table so we decide to invite 3 more guests \nThank You\n');
}
