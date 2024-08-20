# Movie Microservices

This project implements a set of microservices for managing a movie database. It consists of four separate services for Creating, Reading, Updating, and Deleting movie information.

## Project Structure

movie-microservices/
│
├── add-movie/
│   ├── index.js
│   ├── package.json
│   └── Dockerfile
│
├── update-movie/
│   ├── index.js
│   ├── package.json
│   └── Dockerfile
│
├── read-movie/
│   ├── index.js
│   ├── package.json
│   └── Dockerfile
│
├── delete-movie/
│   ├── index.js
│   ├── package.json
│   └── Dockerfile
│
├── docker-compose.yml
└── README.md
## Services

1. **add-movie**: Handles POST requests to add new movies to the database.
2. **update-movie**: Handles PUT requests to update existing movie information.
3. **read-movie**: Handles GET requests to retrieve movie information.
4. **delete-movie**: Handles DELETE requests to remove movies from the database.

## Prerequisites

- Node.js (v14 or later)
- Docker
- Docker Compose

## Setup

1. Clone the repository:
 git clone https://github.com/rnayan123/movie-microservices.git
cd movie-microservices
2. **Create a `.env` file in each service directory with your MongoDB connection string:**
3. **Build and start the services using Docker Compose:**
   docker-compose up --build

Certainly! I'll create a comprehensive README.md file for your microservices project. This README will explain the project structure, setup instructions, and how to use the microservices. Here's the content for your README.md file:
markdownCopy# Movie Microservices

This project implements a set of microservices for managing a movie database. It consists of four separate services for Creating, Reading, Updating, and Deleting movie information.

## Project Structure
movie-microservices/
│
├── add-movie/
│   ├── index.js
│   ├── package.json
│   └── Dockerfile
│
├── update-movie/
│   ├── index.js
│   ├── package.json
│   └── Dockerfile
│
├── read-movie/
│   ├── index.js
│   ├── package.json
│   └── Dockerfile
│
├── delete-movie/
│   ├── index.js
│   ├── package.json
│   └── Dockerfile
│
├── docker-compose.yml
└── README.md
Copy
## Services

1. **add-movie**: Handles POST requests to add new movies to the database.
2. **update-movie**: Handles PUT requests to update existing movie information.
3. **read-movie**: Handles GET requests to retrieve movie information.
4. **delete-movie**: Handles DELETE requests to remove movies from the database.

## Prerequisites

- Node.js (v14 or later)
- Docker
- Docker Compose

## Setup

1. Clone the repository:
git clone https://github.com/your-username/movie-microservices.git
cd movie-microservices
Copy
2. Create a `.env` file in each service directory with your MongoDB connection string:
MONGODB_URI=your_mongodb_connection_string
Copy
3. Build the services
docker build -t add-movie-api:v1.0 -f Dockerfile .
4. Run the service
   docker run -d -p 3001:3001 update-movie-api:v1.0
similarly do it for all the services
Copy
## API Endpoints

### Add Movie
- **URL**: http://localhost:3001/movies
- **Method**: POST
- **Body**:
```json
{
 "title": "Inception",
 "director": "Christopher Nolan",
 "year": 2010,
 "genre": "Sci-Fi",
 "rating": 8.8
}

**Update Movie
URL: http://localhost:3002/movies/:id
Method: PUT**

Read Movies
URL: http://localhost:3003/movies
Method: GET

Read Specific Movie
URL: http://localhost:3003/movies/:id
Method: GET

Delete Movie
URL: http://localhost:3004/movies/:id
Method: DELETE
   
