// Code your solutions in this file
// Function to return an array of thank you messages
function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  
  // Function to count down from a given number to zero, logging each number
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  
  // Make sure to export the functions for testing
  module.exports = {
    writeCards,
    countDown,
  };
  