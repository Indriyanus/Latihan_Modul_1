/*
1. Write a code to find area of rectangle.
○ Example : length = 5, width = 3 → 15
*/
let length = 5
let width = 3

console.log(length * width)

/*
2. Write a code to find perimeter of rectangle.
○ Example : length = 5, width = 3 → 16
*/
let length2 = 5
let width2 = 3

console.log(2* (length+width))

/*
3. Write a code to find diameter, circumference and area of a circle.
○ Example : radius = 5
○ Output : diameter = 10, circumference = 31.4159, area = 78.539
*/
let radius = 5
console.log(radius+radius) //diameter
console.log(2*Math.PI*radius) //keliling
console.log(Math.PI*radius*radius) //luas lingkaran

/*
4. Write a code to find angles of triangle if two angles are given.
○ Example : a = 80, b = 65 → 35
*/
let sudut1 = 80
let sudut2 = 65
let sudut3 = 180 - sudut1 - sudut2

console.log("sudut ketiga segitiga adalah: " + sudut3 + " derajat")

/*
5. Write a code to get difference between dates in days.
○ Example : date1 = 2022-01-20, date2 = 2022-01-22 → 2
*/
let date1 = new Date("2022-01-22")
let date2 = new Date("2022-01-20")

let result = (date1 - date2) / ( 1000 * 60 * 60  *24 )

console.log(result)

/*
6. Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
○ Example : 400 days → 1 year, 1 month, 5 days
○ Example: 366 days → 1 year, 0 month, 1 day
*/
let days = 400

let year = Math.floor(days / 365)
let yearLeft = days % 365
let month = Math.floor (yearLeft / 30)
let daysLeft = (days % 365) % 30

console.log(year,"years",month,"months",daysLeft,"days")