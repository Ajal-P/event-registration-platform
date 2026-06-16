# Event Registration Platform

A full-stack Event Registration Platform built using React.js and Django REST Framework.

## Features

* User Registration
* JWT Authentication
* User Login & Logout
* Event Listing
* Event Details
* Event Registration
* Prevent Duplicate Registration
* My Registrations
* Responsive UI

## Tech Stack

### Frontend

* React.js
* React Router
* Axios
* Bootstrap

### Backend

* Django
* Django REST Framework
* JWT Authentication

### Database

* SQLite

## Live Demo

Frontend:
[https://your-frontend-url.vercel.app](https://event-registration-platformfinal.vercel.app/login)

Backend:
[https://your-backend-url.onrender.com](https://event-registration-platform-zkg1.onrender.com)


## Installation Instructions

### Clone Repository

git clone https://github.com/your-username/event-registration-platform.git

cd event-registration-platform

### Backend Setup

cd backend

python -m venv venv

### Activate Virtual Environment

Windows:

venv\Scripts\activate


### Install Dependencies

pip install -r requirements.txt

### Run Migrations

python manage.py migrate

### Start Backend

python manage.py runserver

Backend runs at:

http://127.0.0.1:8000

### Frontend Setup

cd frontend

npm install

npm run dev

Frontend runs at:

http://localhost:5173

## Database Setup Instructions

This project uses SQLite.

Database file:

db.sqlite3

Run migrations:

python manage.py makemigrations

python manage.py migrate

Create Superuser:

python manage.py createsuperuser

Open Admin Panel:

http://127.0.0.1:8000/admin/

Seed Sample Events:

python manage.py shell

from events.models import Event

Event.objects.create(
title="React Workshop",
description="Learn React",
date="2026-07-20T10:00:00Z",
location="Kochi"
)



## Author

Ajal P
