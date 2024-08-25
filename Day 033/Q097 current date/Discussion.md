
@@@@@@@@@@@@@@@ const now = new Date() @@@@@@@@@@@@@@@

new Date() is a constructor for the Date object in JavaScript.
When called without arguments, it creates a Date object representing the current date and time, based on the system's clock.

* Properties and Methods:

The Date object provides various methods to extract date and time components, such as:
now.getFullYear(): Returns the four-digit year (e.g., 2024).
now.getMonth(): Returns the month (0-based index, so January is 0, February is 1, ..., December is 11).
now.getDate(): Returns the day of the month (1 through 31).
now.getHours(), now.getMinutes(), now.getSeconds(): Return the hours, minutes, and seconds, respectively.
now.toString(): Returns a string representation of the date and time


@@@@@@@@@@@@@@@ const day = now.getDate().toString().padStart(2, '0'); @@@@@@@@@@@@@@@
1) now.getDate():
This method of the Date object returns the day of the month (1 through 31) as a number.
For example, if today is August 25th, now.getDate() would return 25.

2) .toString():
Converts the number returned by now.getDate() to a string.
For instance, 25 becomes "25".

3) .padStart(2, '0'):
This method pads the string representation of the day with leading zeros to ensure it has at least two characters.
The 2 specifies that the string should be at least 2 characters long.
The '0' is the padding character to use if the string is shorter than 2 characters.
If the day is 5, toString() converts it to "5", and padStart(2, '0') pads it to "05". If it's already "25", no padding is needed.
This ensures that single-digit days are always displayed with two digits, conforming to the DD-MM-YYYY format.

@@@@@@@@@@@@@@@ const month = (now.getMonth() + 1).toString().padStart(2, '0'); @@@@@@@@@@@@@@@

1) now.getMonth():
Returns the month as a zero-based index (where January is 0, February is 1, ..., December is 11).
For August, this would return 7.

2) + 1:
Since getMonth() is zero-based, you add 1 to convert it to a one-based index, which is what we commonly use (January is 1, February is 2, etc.).
For August (which is 7), adding 1 makes it 8.

3) .toString():
Converts the resulting month number to a string.
For example, 8 becomes "8".

4) .padStart(2, '0'):
Pads the string with leading zeros if it's less than 2 characters long.
If the month is 8, toString() converts it to "8", and padStart(2, '0') pads it to "08". If the month is 10, it stays "10" because it's already 2 characters long.
This ensures that single-digit months are formatted with two digits.

@@@@@@@@@@@@@@@ const year = now.getFullYear() @@@@@@@@@@@@@@@

1) now.getFullYear():
Returns the four-digit year (e.g., 2024).
This does not need any formatting since it's already four digits.

@@@@@@@@@@@@@@@ Summary @@@@@@@@@@@@@@@
Day: Ensure it's always two digits by padding single-digit days with a leading zero.
Month: Convert from zero-based index to a one-based index and pad single-digit months with a leading zero.
Year: Directly use the four-digit year
