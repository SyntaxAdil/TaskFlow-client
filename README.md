# TaskFlow ✅

A full-stack **Todo application** built with the MERN stack. Stay focused, ship faster, and get things done.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat&logo=mongodb)

---

## Features

- Add, edit, and delete tasks
- Mark tasks as done / pending
- Progress bar with live completion tracking
- Pie chart overview of done vs pending tasks
- Fully responsive — works on mobile and desktop
- Skeleton loading state

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + TypeScript + Vite |
| Styling | Tailwind CSS + DaisyUI |
| Charts | Recharts |
| Icons | Lucide React |
| Backend | Node.js + Express |
| Database | MongoDB + Mongoose |
| HTTP Client | Axios |

---

## Getting Started

### Prerequisites

- Node.js >= 18
- MongoDB Atlas account or local MongoDB

### Clone the repo

```bash
git clone https://github.com/your-username/taskflow.git
cd taskflow
```

### Backend setup

```bash
cd server
npm install
```

Create a `.env` file in `/server`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

```bash
npm run dev
```

### Frontend setup

```bash
cd client
npm install
```

Create a `.env` file in `/client`:

```env
VITE_API_URL=http://localhost:5000
```

```bash
npm run dev
```

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/todos` | Get all todos |
| POST | `/add-todo` | Create a new todo |
| PUT | `/todos/:id` | Update a todo |
| DELETE | `/todos/:id` | Delete a todo |

---

## Project Structure

```
taskflow/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Create.tsx
│   │   │   ├── AllTodos.tsx
│   │   │   ├── Charts/
│   │   │   │   ├── ChartContainer.tsx
│   │   │   │   └── TodoChartPie.tsx
│   │   │   └── loaders/
│   │   │       └── Skeleton.tsx
│   │   ├── contexts/
│   │   │   └── TodoContext.tsx
│   │   └── App.tsx
│   └── package.json
│
└── server/                 # Express backend
    ├── models/
    │   └── Todo.js
    ├── routes/
    │   └── todo.routes.js
    ├── index.js
    └── package.json
```

---

## Deployment

- **Frontend** — [Vercel](https://vercel.com) or [Netlify](https://netlify.com)
- **Backend** — [Render](https://render.com)
- **Database** — [MongoDB Atlas](https://www.mongodb.com/atlas)

> **Note:** Render free tier sleeps after 60s of inactivity. Use [cron-job.org](https://cron-job.org) to ping your server every 14 minutes to keep it alive.

---

## Author

**Abdur Rahman Adil**

---

