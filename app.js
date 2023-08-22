const studentname = ['Ali', 'Hamza', 'Arfa', 'Hasseb', 'Irtiza', 'Annie'];
studentname.push('anny');
studentname.pop();
studentname.unshift('noman','ibad', 'hayat');
studentname.shift();
let classes = studentname.slice( 1, 8);
studentname.splice(0,  1, 'jhanzaib' , 'jhon');

console.log(studentname);
console.log(classes);



const num = + (document.getElementById('number').value);
document.write(num);

