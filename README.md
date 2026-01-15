# 👥 Employee Management System (Fullstack)

A comprehensive Fullstack application for managing employee records, built with a **React** frontend and a **Java Spring Boot** backend.

## 🏗️ Architecture Overview
The application follows a decoupled architecture:
* **Frontend**: React SPA (Single Page Application) using Hooks and Axios.
* **Backend**: Java Spring Boot REST API with Spring Data JPA.
* **Database**: PostgreSQL .

---

## 🚀 Features
* **CRUD Operations**: Create, Read, Update, and Delete employee records.
* **Data Validation**: Server-side validation for employee details (Email, Name, etc.).
* **Responsive UI**: Modern interface built with Bootstrap or Tailwind CSS.
* **RESTful API**: Clean separation of concerns between client and server.

---

## 🛠️ Tech Stack

### Frontend
* **React.js**
* **Axios** (API Requests)
* **React Router Dom** (Navigation)
* **CSS Framework**: Bootstrap 5 / Tailwind

### Backend
* **Java 17+**
* **Spring Boot** (Web, DevTools)
* **Spring Data JPA** (ORM)
* **Database**: PostgreSQL

---

## ⚙️ Setup & Installation

### 1. Backend (Java Spring Boot)
1. Navigate to the backend folder: `cd employee-backend`
2. Update `src/main/resources/application.properties` with your database credentials.
3. Run the application using Maven:
   ```bash
   ./mvnw spring-boot:run
