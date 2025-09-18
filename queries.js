Restaurant Queries:

1.  db.restaurants.find()  // 1. Show all documents in the collection

2.  db.restaurants.find({}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1})  // 2. Show only restaurant_id, name, borough and cuisine
 
3.  db.restaurants.find({}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0})  // 3. Show only restaurant_id, name, borough and cuisine without _id

4.  db.restaurants.find({}, {restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1, _id: 0}) // 4. Show only restaurant_id , name , borough and zipcode without _id

5.  db.restaurants.find({borough: "Bronx"}) // 5. Show all restaurants in the Bronx

6.  db.restaurants.find({borough: "Bronx"}).limit(5) // 6. Show the first 5 restaurants in the Bronx

7.  db.restaurants.find({borough: "Bronx"}).skip(5).limit(5) // 7. Show the next 5 restaurants in the Bronx after skipping the first 5 restaurants

8.  db.restaurants.find({"grades.score": {$gt: 90}}) // 8. Show all restaurants with a score greater than 90

9.  db.restaurants.find({"grades.score": {$gt: 80, $lt: 100}}) // 9. Show all restaurants with a grade score between 80 and 100

10. db.restaurants.find({"address.coord.0": {$lt: -95.754168}}) // 10. Show all restaurants that are located in the longitude less than -95.754168

11. db.restaurants.find({cuisine: {$ne: "American"}, "grades.score": {$gt: 70}, "address.coord.0": {$lt: -65.754168}}) // 11.Show all restaurants that do not prepare American cuisine and have a score greater than 70 and longitude less than -65.754168

12. db.restaurants.find({cuisine: {$ne: "American"}, "grades.score": {$gt: 70}, "address.coord.0": {$lt: -65.754168}, borough: {$ne: "Brooklyn"}}) // 12. Show all restaurants that do not prepare American cuisine and have a score greater than 70 and longitude less than -65.754168 and do not belong to the borough Brooklyn

13. db.restaurants.find({cuisine: {$ne: "American"}, "grades.score": {$gt: 70}, "address.coord.0": {$lt: -65.754168}, borough: {$ne: "Brooklyn"}}).sort({cuisine: -1}) // 13. Show all restaurants that do not prepare American cuisine and have a score greater than 70 and longitude less than -65.754168 and do not belong to the borough Brooklyn sorted by cuisine in descending order

14. db.restaurants.find({name: /^Wil/}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0}) // 14. Show all restaurants that start with the name 'Wil'

15. db.restaurants.find({name: /ces$/}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0}) // 15. Show all restaurants that end with the name 'ces'

16. db.restaurants.find({name: /Reg/}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0}) // 16. Show all restaurants that contain the name 'Reg'

17. db.restaurants.find({borough: "Bronx", cuisine: {$in: ["American", "Chinese"]}}) // 17. Show all restaurants in the Bronx that prepare American cuisine or Chinese cuisine
