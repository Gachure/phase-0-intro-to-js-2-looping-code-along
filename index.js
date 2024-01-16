// Code your solutions in this file
function writeCards(names, event) {
    const thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
  
  const names = ["Charlie", "Samip", "Ali"];
  const event = "birthday";
  const messages = writeCards(names, event);
  
  console.log(messages);
  function countDown(startingNumber) {
    while (startingNumber >= 0) {
      console.log(startingNumber);
      startingNumber--;
    }
  }
  
  countDown(5); // Replace 5 with any starting number you want
  