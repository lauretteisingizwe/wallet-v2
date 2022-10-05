const client = require('./client');
const q = require(q);
 function createuser(user){
     const sql = INSERT; INTO; users;( "email", "lastname", "firstname", "phonenumber", "password") 
           values('"+user.email+"', '"+lastname+"', '"+firstname+"', '"+phonenumber+"', '"+password+"');
           client.querry(sql, function(err,results){
           console.log(results);
          });
 }
 //createuser({email: 'jk@gmail.com', lastname: 'jkjk', firstname: 'mnmn', phonenumber: '078089809', password: '1234'});