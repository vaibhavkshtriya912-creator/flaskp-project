# Flask + Express Full Stack App (Single EC2 Deployment)

This project demonstrates how to deploy a **Flask backend** and **Express frontend** on a single **AWS EC2** instance using the Free Tier.

---

## 🎯 Objective
Deploy both frontend and backend on a single EC2 instance so the frontend can communicate with the backend through `localhost`.

---

## ⚙️ Project Overview

### 🐍 Backend (Flask)
- Runs on **port 5000**
- Endpoints:
  - `GET /health` → returns `{status: "ok"}`
  - `POST /submit` → echoes back the received JSON
- Start command:
  ```bash
  cd backend
  python3 app.py
