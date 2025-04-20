# Thasmai Starlife - Meditation Platform

A comprehensive meditation platform that enables users to participate in guided meditation sessions with integrated payment processing and user management system.

## Features

- User authentication and session management
- Secure payment processing
- Real-time meditation session participation
- Admin dashboard for user management
- Multi-channel communication (Email & SMS)
- Geographical data management
- User referral system
- File upload and processing

## Tech Stack

### Backend
- Node.js
- Express.js
- MySQL
- Redis
- Sequelize ORM

### Integrations
- Razorpay (Payment Processing)
- Firebase (Authentication & Real-time Database)
- MSG91 (SMS Services)
- Socket.io (Real-time Communication)
- Nodemailer (Email Services)

### Security
- Bcrypt (Password Hashing)
- Express-session (Session Management)
- Express-validator (Request Validation)

## Prerequisites

- Node.js (v14 or higher)
- MySQL
- Redis
- npm or yarn

## Installation

1. Clone the repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
DB_HOST=your_db_host
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
REDIS_URL=your_redis_url
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
FIREBASE_CONFIG=your_firebase_config
```

4. Start the development server
```bash
npm run dev
```

## Project Structure

```
src/
├── controller/     # Route controllers
├── model/         # Database models
├── router/        # Route definitions
├── services/      # Business logic
├── config/        # Configuration files
└── utils/         # Utility functions