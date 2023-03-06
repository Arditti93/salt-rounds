const bcrypt = require("bcrypt");
const plainTextPassword1 = "DFGh5546*%^__90"; 

// When using `bcrypt`, it's critical to find the right balance between security and usability. 
// Increasing the cost factor increases computation time. 
// Where do password operations happen? How long are your users willing to wait? 


// Perform UX research to find what are acceptable user wait times for registration and authentication.
// If the accepted wait time is 1 second, tune the wait time of bcrypt for it to run in 1 second on your hardware.

// Analyze with your security team if the computation time is enough to mitigate and slow down attacks.

for (let saltRounds = 10; saltRounds < 21; saltRounds++) {
  console.time(`bcrypt | number of salt rounds: ${saltRounds}, time to hash`);
  let hash = bcrypt.hashSync(plainTextPassword1, saltRounds); // hash and hashSync perform the same operation and take the same arguments
  console.log("-------------")
  console.log(hash)
  console.timeEnd(`bcrypt | number of salt rounds: ${saltRounds}, time to hash`);
}