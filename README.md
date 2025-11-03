# Flask + Express Full Stack App (Single EC2 Deployment) ( 2 EC2 Deployment )

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


---

## 🌐 Deployment Details
- **Frontend URL:** http://13.201.81.207:3000/
- **Backend (Internal):** http://localhost:5000
- **Repository:** [https://github.com/vaibhavkshtriya912-creator/flaskp-project](https://github.com/vaibhavkshtriya912-creator/flaskp-project)

---

Level 1

✅ Flask + Express deployed on a single EC2 instance  
✅ Backend accessible internally through localhost  
✅ Only port 3000 open publicly  
✅ App successfully tested and code pushed to GitHub  

---

## 💰 Cost Control
To save free-tier usage when not testing:
```bash
pkill -f server.js || true
pkill -f app.py || true

---

# 🧩 Level 2 – Flask + Express on Separate EC2 Instances

This deployment separates the backend and frontend into two EC2 instances that communicate using the backend’s private IP.

---

## 🌐 Deployment Details
- **Frontend URL:** http://13.200.237.218:3000
- **Backend Private IP:** 172.31.14.84
- **Repository:** [https://github.com/vaibhavkshtriya912-creator/flaskp-project](https://github.com/vaibhavkshtriya912-creator/flaskp-project)

---

## ✅ Level 2 Completed
✅ Backend and frontend deployed on separate EC2s  
✅ Communication through backend’s private IP  
✅ Backend secured from public access  
✅ Both instances verified working

