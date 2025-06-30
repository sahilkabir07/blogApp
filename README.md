# 📝 BlogApp

A full-stack **Blog Website** built using **Next.js 15**, **MongoDB**, and **React-Quill/Mantine RTE** for rich text editing. Includes complete admin dashboard for creating, editing, and deleting blog posts.

---

## 🚀 Features

- ✍️ Create, edit, and delete blog posts (Rich Text support)
- 🔐 Admin panel (secured routes)
- 📄 SEO-friendly dynamic routing for each blog post
- 💾 MongoDB Atlas for database
- 🌐 API routes using Next.js (no separate backend)
- 🧠 Clean UI using Tailwind CSS
- ☁️ Deployed on Vercel

---

## 📂 Tech Stack

| Frontend     | Backend       | Database     |
|--------------|---------------|--------------|
| Next.js 15   | Next.js API routes | MongoDB Atlas |
| React Hooks  | Node.js Runtime | Mongoose ORM |
| Tailwind CSS |                |              |

---

## 🔧 Setup Instructions (Local)

1. **Clone the repo**
   ➡️bash
   ➡️git clone https://github.com/YOUR_USERNAME/blogApp.git
   ➡️cd blogApp
   
2. **Install dependencies**
   ➡️npm install

3.**Create .env.local file**
  ➡️MONGO_URI=your_mongodb_connection_string

4. **Run the development server**
   ➡️npm run dev

## 🛠 Folder Structure

blogApp/
│
├── pages/
│   ├── index.js               # Homepage
│   ├── posts/[slug].js        # Blog post detail page
│   └── admin/
│       ├── create-post.js     # Admin post creation
│       ├── edit/[slug].js     # Edit post
│       └── posts.js           # All posts dashboard
│
├── models/
│   └── Post.js                # Mongoose schema
│
├── pages/api/
│   └── posts/                 # All blog-related API routes
│
├── utils/                     # DB connection logic
├── styles/                    # Tailwind + global styles
└── public/                    # Static assets

## 🌍 Live Demo
👉 [Live Demo](https://blog-app-wheat-nine-58.vercel.app/)


## 💬 Author
Made with ❤️ by Sahil Akhtar


