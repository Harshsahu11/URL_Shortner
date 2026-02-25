🔗 URL Shortener

A scalable and efficient URL Shortener that converts long URLs into short, shareable links and redirects users to the original destination.

📌 Features

🔐 Generate unique short URLs

⚡ Fast redirection

📊 Track click count (optional feature)

🗃️ Persistent storage (Database support)

🌐 REST API support

🛡️ Input validation and error handling

🛠️ Tech Stack

Modify this section according to your implementation.

Backend

Java / Spring Boot / Node.js / Express

Database

MySQL / PostgreSQL / MongoDB

Other Tools

Maven / Gradle / npm

Docker (optional)

🏗️ System Design Overview
Client → REST API → Service Layer → Database
                        ↓
                   Short URL Generator
Flow:

User submits a long URL.

Server generates a unique short code.

Short URL is stored in the database.

When accessed, it redirects to the original URL.
