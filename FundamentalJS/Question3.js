// Which of the following console.log messages will print? Why?

if (0) console.log('#1 zero is true') //yes

if ("0") console.log('#2 zero is true') //no  //THIS PRINTS because "0" is a string, not zero

if (null) console.log('null is true') //no

if (-1) console.log('negative is true') //no  //THIS PRINTS becuase -1 is a none-zero number, meaning true

if (1) console.log('positive is true') //yes  //THIS PRINTS becuase positive number (any numbers other than 0 is true)
