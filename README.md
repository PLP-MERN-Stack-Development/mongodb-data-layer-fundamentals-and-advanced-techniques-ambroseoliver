# MongoDB Data Layer Fundamentals & Advanced Techniques - Week 1

## Overview

This assignment focuses on MongoDB fundamentals and advanced techniques, including:

- Setting up MongoDB (local or Atlas)
- Creating and connecting to databases and collections
- Performing CRUD operations (Create, Read, Update, Delete)
- Writing queries with filtering, projection, and sorting
- Using aggregation pipelines to analyze data
- Implementing indexes for performance optimization

---

## Setup Instructions

Before you begin, ensure you have the following installed:

1. **MongoDB Community Edition** - [Installation Guide](https://www.mongodb.com/docs/manual/administration/install-community/)
2. **MongoDB Shell (mongosh)** - included with MongoDB Community Edition
3. **Node.js** - [Download here](https://nodejs.org/)
4. **npm** (comes with Node.js)

### Node.js Package Setup

In your assignment directory, run:

```bash
# Initialize package.json
npm init -y

# Install MongoDB Node.js driver
npm install mongodb

## Database Setup

```bash
# Install MongoDB locally or set up a free MongoDB Atlas cluster

# Create a new database called plp_bookstore
# (this happens automatically when you insert data into a collection)

# Create a collection called books
# (this also happens automatically on first insert)

# Use the provided insert_books.js script to populate the collection with sample data
node insert_books.js


This will render in Markdown as a **code block**, showing the commands clearly for anyone reading the README.  

If you want, I can **update your full README.md** with all sections like this in proper code blocks for commands and instructions. Do you want me to do that?
