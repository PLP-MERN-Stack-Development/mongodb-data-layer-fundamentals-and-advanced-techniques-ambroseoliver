/**
 * queries.js
 * 
 * This file contains ALL MongoDB queries required for:
 * - CRUD operations
 * - Advanced filtering
 * - Projection
 * - Sorting
 * - Pagination
 * - Aggregation pipelines
 * - Indexing and performance analysis
 *
 * Use inside MongoDB Shell (mongosh) or MongoDB Compass.
 */

//////////////////////////////////////
// 1. BASIC CRUD OPERATIONS
//////////////////////////////////////

// 1.1 Find all books in a specific genre
db.books.find({ genre: "Fiction" });

// 1.2 Find books published after a certain year
db.books.find({ published_year: { $gt: 2000 } });

// 1.3 Find books by a specific author
db.books.find({ author: "George Orwell" });

// 1.4 Update the price of a specific book
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 14.99 } }
);

// 1.5 Delete a book by its title
db.books.deleteOne({ title: "The Catcher in the Rye" });



//////////////////////////////////////
// 2. ADVANCED QUERIES
//////////////////////////////////////

// 2.1 Find books that are both in stock AND published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
});

// 2.2 Projection: return ONLY title, author, and price
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
);

// 2.3 Sort books by price (ascending)
db.books.find().sort({ price: 1 });

// 2.4 Sort books by price (descending)
db.books.find().sort({ price: -1 });

// 2.5 Pagination — 5 books per page
// Page 1:
db.books.find().skip(0).limit(5);

// Page 2:
db.books.find().skip(5).limit(5);



//////////////////////////////////////
// 3. AGGREGATION PIPELINES
//////////////////////////////////////

// 3.1 Average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" }
    }
  }
]);

// 3.2 Find the author with the MOST books
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      count: { $sum: 1 }
    }
  },
  {
    $sort: { count: -1 }
  },
  {
    $limit: 1
  }
]);

// 3.3 Group books by publication decade
db.books.aggregate([
  {
    $group: {
      _id: {
        decade: { $floor: { $divide: ["$published_year", 10] } }
      },
      totalBooks: { $sum: 1 }
    }
  },
  {
    $sort: { "_id.decade": 1 }
  }
]);



//////////////////////////////////////
// 4. INDEXING
//////////////////////////////////////

// 4.1 Create an index on title
db.books.createIndex({ title: 1 });

// 4.2 Create a compound index on author + published_year
db.books.createIndex({ author: 1, published_year: -1 });

// 4.3 Use explain() to show performance improvements
db.books.find({ title: "1984" }).explain("executionStats");

db.books.find({ author: "George Orwell" }).explain("executionStats");



//////////////////////////////////////
// END OF FILE
//////////////////////////////////////
