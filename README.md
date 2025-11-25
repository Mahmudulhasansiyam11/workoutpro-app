## 📘 WorkoutPro – Fitness Planner (Client + Server)

WorkoutPro is a full-stack fitness management application built using Next.js, TailwindCSS, and Firebase Authentication.
Users can track workouts, explore diet plans, view trainers, subscribe to plans, and more.
This project includes both frontend UI and backend API routes deployed on Vercel.

## 🚀 Features

🔐 Firebase Authentication (Login/Register)

🧑‍🏫 Trainers Page with filters

🥗 Diet Plans with images

🏋️ Workout Plans (Daily, Weekly, Monthly, Yearly)

📝 Detailed Workout Pages

🎯 Fitness Goals

🧮 BMI Calculator

📅 Weekly Schedule

🍽️ Nutrition / Meal Plans

⚙️ Server-side API Routes (Next.js)


## 🛠️ Tech Stack

Next.js 14+ (App Router)

Tailwind CSS

Firebase Authentication

MongoDB (for workout data)

Vercel Deployment

React Icons

## 📥 Setup & Installation
Follow these steps to run the project locally:

## 1️⃣ Clone the repository
```bash
git clone https://github.com/Mahmudulhasansiyam11/workoutpro-app.git
cd workoutpro-app

```
## 2️⃣ Install dependencies
```bash
npm install

```
## 3️⃣ Create .env.local file
```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

MONGODB_URI=your_mongodb_url

```
## 4️⃣ Run the project locally
```bash
npm run dev

```
Project will start on:
👉 http://localhost:3000

## 5️⃣ Build for production
```bash
npm run build
npm start

```


## 🧭 Route Summary
Here is a quick overview of all routes used in the project:

## Main Routes
Route             -  	Description
/	              -     Homepage
/workouts         -	    All Workouts from MongoDB
/plans            - 	Workout Plans (Daily, Weekly, Monthly, Yearly)
/trainers         - 	View Trainers & Details
/profile          -     View profile details
/addWorkout       -     Add new workout
/manageWorkouts   -     Manage workout view and delete



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
