🍬 Sweet Shop Management System
Dear Viewer,

Due to my ongoing academic examinations, I was able to partially complete this project within the given time frame.

📌 Project Status

✅ Frontend: Mostly completed

UI design

Routing

Sweets grid

Images

Login & Register pages

Frontend UI: ~80% complete

✅ Backend: Fully functional and tested

APIs

Authentication

Database operations

Backend: ~90% complete

⚠️ Integration:

Frontend and backend integration is partially complete

🛠 Tech Stack

Frontend: React, CSS

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT▶️ How to Run the Frontend on Your Machine

Follow the steps below to run the frontend part of the Sweet Shop Management System locally.

✅ Prerequisites

Make sure the following are installed on your system:

Node.js (v16 or above recommended)
👉 Download from: https://nodejs.org

npm (comes with Node.js)

A code editor like VS Code

To verify installation, run:

node -v
npm -v

📁 Step 1: Clone the Repository
git clone <your-repository-url>


Navigate into the frontend folder:

cd sweet-shop-frontend


(Use the correct folder name if different.)

📦 Step 2: Install Dependencies
npm install


This will install all required packages listed in package.json.

▶️ Step 3: Start the Frontend Server
npm start


or (if using Vite):

npm run dev

🌐 Step 4: Open in Browser

Once the server starts, open your browser and visit:

http://localhost:3000


(or the port shown in the terminal, usually 5173 for Vite)

🔗 Backend Connection (Important)

Ensure the backend server is running before using full functionality.

API base URL is configured in the frontend (e.g., http://localhost:5000).

If needed, update API URLs inside:

services/

api/

or .env file

Example .env:

REACT_APP_API_URL=http://localhost:5000

⚠️ Common Issues & Fixes

Port already in use → Close other running servers

API not working → Check backend is running

Blank page → Run npm install again and restart

📌 Note

Frontend integration with backend is partially completed due to academic time constraints. UI components and routing are functional.
