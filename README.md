📄 **Description - Exercise Statement**

This repository contains a set of MongoDB queries developed as part of a Level 1 exercise.  
The goal of this exercise is to practice querying a MongoDB collection, including filtering, projection, and retrieving specific data based on different criteria.

---

💻 **Technologies Used**

- MongoDB (Compass or shell)
- JavaScript (for query scripts)
- Visual Studio Code (IDE)

  ---

📋 **Requirements**

- MongoDB installed (version 4.0+ recommended)
- Node.js (if executing JS scripts)
- Basic understanding of MongoDB queries and collections
- Exported collection file: `miCollection.json` (or your collection JSON)

  ---

🛠️ **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/Andrescalvo22/S2.04.MongoDB-queries.Nivell1.git
2. Navigate to the project folder:
   ```bash
   cd S2.04.MongoDB-queries.Nivell1
3. Import the JSON collection into MongoDB compass or using 'Mongo import':
 ```bash
mongoimport --db <your_db_name> --collection <your_collection_name> --file miCollection.json --jsonArray

```

---

▶️ **Execution**

Open MongoDB Compass or your MongoDB shell.

Execute the queries written in queries.js to test different retrieval scenarios.

Modify the database and collection names in the script if necessary.

---

🌐 **Deployment**

This is a learning exercise; deployment is not required.

For production usage, ensure MongoDB is running and accessible on your server and update connection strings accordingly.

---

🤝 **Contributions**

Contributions are welcome for improving queries or adding new exercises.

Fork the repository, make changes, and create a pull request.

Keep the code and queries clean and well-documented.
