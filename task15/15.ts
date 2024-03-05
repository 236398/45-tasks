let guest_list = ['Essa','Taha', 'Sufiyan', 'Abdullah',];
 for(let i = 0; i < guest_list.length; i++){
    console.log(' Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on a dinner tomorrow.\nThank You\n');
 }
let not_present = 'Abdullah';
let new_guest = 'Ibrahim';
guest_list[3] = new_guest;
for(let i = 0; i < guest_list.length; i++){
    console.log(' Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on a dinner tomorrow.\nThank You\n');
}
console.log(`Mr. ${not_present} will not coming tomorrow dinner `)