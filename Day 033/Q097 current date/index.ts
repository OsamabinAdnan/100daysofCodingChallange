// This function formats the current date as DD-MM-YYYY
function getCurrentDateFormatted(): string {
    const now = new Date();
    const day = String(now.getDate()).padStart (2, "0");
    // Ensures the day is two digits
    const month = String(now.getMonth() + 1).padStart(2, "0"); 
    // Adds 1 because months are 0-indexed
    const year = now.getFullYear();
    const hour = String(now.getHours()).padStart(2,"0")
    const minutes = String(now.getMinutes()).padStart(2,"0")
    const seconds = String(now.getSeconds()).padStart(2,"0")
    return `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`;
  }
  
  console.log(getCurrentDateFormatted());
// Outputs the current date in DD-MM-YYYY format
// Shows today's date, neatly formatted.

