# 📚 NLP Book Recommender

### Ever feel like...

- You're staring at Goodreads for hours but still can’t find *the* book?
- Every recommendation is either too popular, too niche, or just not "you"?
- You just want a **book that vibes with your tastes** without the endless scrolling?

We've got you. 💡  
Welcome to **NLP Book Recommender**, a smart little tool that finds books *you* might actually enjoy, using real NLP and machine learning magic.

---

## 💡 What is this?

This is a full-stack project that:
- Lets you type in a book you like 📝
- Uses a trained ML model to recommend similar books 🤖
- Shows it all in a clean React frontend with instant results ⚡

It’s kind of like having a book-loving AI friend who *gets* your reading taste.

---

## 🛠️ Tech Stack

| Layer        | Tech                      |
|--------------|---------------------------|
| Frontend     | React.js (with Axios)     |
| Backend      | Node.js + Express         |
| ML Microservice | Flask (Python)        |
| Model        | TF-IDF + KNN (Scikit-learn) |

---

## 🔧 How It Works

1. You type in a book you liked.
2. Your input goes to the Node.js backend.
3. The backend forwards it to the Python microservice.
4. The ML model finds similar books using text-based features.
5. The top matches are sent back to the frontend fast!

---


## ⚙️ Getting Started (Locally)

### 1. **Clone the repo**

```bash
git clone https://github.com/srewashimondal/NLP-Book-Recommendation.git
cd NLP-Book-Recommendation

```
### 2. **Start the microservice:**
```bash
cd ml_service
python -m venv venv
venv\Scripts\activate     # On Windows
pip install -r requirements.txt
python app.py
```

### 3. **Start the backend server:**
```bash
cd ../backend
npm install
node server.js
```
### 4. **Start the frontend server:**
```bash
cd ../frontend
npm install
npm start
```
