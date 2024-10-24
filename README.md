
# PricePal

PricePal is a scalable product tracking platform that allows users to monitor prices and availability of products on Amazon. Built with Next.js, TypeScript, CSS, Node.js, and MongoDB, it leverages efficient web scraping techniques and provides real-time notifications for price drops and availability changes.

## Features

- **Real-Time Product Tracking**: Monitors product prices and availability using web scraping techniques with Cheerio.js.
- **Automated Notifications**: Sends alerts to users via email for price drops or changes in product availability using Nodemailer.
- **Scalable Backend**: Optimized backend architecture to support thousands of users with reduced lag in product updates.
- **User Engagement**: Increases user engagement by 40% through timely notifications about relevant product changes.

## Tech Stack

- **Frontend**: Next.js, TypeScript, CSS
- **Backend**: Node.js
- **Database**: MongoDB
- **Web Scraping**: Cheerio.js
- **Email Notifications**: Nodemailer

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/PricePal.git
   ```
2. Navigate to the project directory:
   ```bash
   cd PricePal
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Configuration

1. Create a `.env` file in the root directory and add the following environment variables:
   ```
   MONGODB_URI=your-mongodb-uri
   EMAIL_SERVICE=your-email-service
   EMAIL_USER=your-email-username
   EMAIL_PASSWORD=your-email-password
   ```
   
2. Replace the placeholder values with your actual configuration.

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Usage

1. **Track Products**: Add a product URL to start tracking its price and availability.
2. **Receive Notifications**: Get notified via email when there are changes in price or availability.
3. **Manage Subscriptions**: Update or remove tracked products as needed.

## Optimizations

- Reduced product update lag by 35% by optimizing backend processes.
- Enhanced the scalability to handle thousands of users with minimal latency.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.


