const moment = require('moment-timezone');

function consoleLoader(
  text = "",
  chars = ["⠙", "⠘", "⠰", "⠴", "⠤", "⠦", "⠆", "⠃", "⠋", "⠉"],
  delay = 100
) {
  let x = 0;

  return setInterval(function() {
      process.stdout.write("\r" + chars[x++] + " " + text);
      x = x % chars.length;
  }, delay);
}

module.exports = {
  
  consoleLoader,

  dateToUnix: (date) => {
    let unix = null
    try {
  
      if (date) {

        unix = moment(date, ["MM-DD-YYYY", "YYYY-MM-DD", "YYYY/MM/DD", "DD/MM/YYYY", 'YYYY-MM-DD HH:mm:ss']).unix() * 1000
        
        if (isNaN(unix)) {
          return null
        } else {
          return unix
        }
        
      } else {
        return null
      }
  
  
    } catch (error) {
      console.log('date error', error);
      return unix
    }
  }
}