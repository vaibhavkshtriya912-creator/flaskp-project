# 🚀 Flask + Express Full Stack App Deployment

This repository demonstrates deploying a **Flask backend** and **Express frontend** across multiple levels of AWS EC2 configurations.

---

## 🧩 LEVEL 1 – Both on a Single EC2

### 🎯 Objective
Deploy both Flask and Express together on a single EC2 instance.

### 🌐 Deployment Details
- **Frontend:** [http://13.201.81.207:3000/]
- **Backend (Internal):** http://localhost:5000

✅ Works using `localhost` internally  
✅ Only port **3000** open publicly

---

## 🧩 LEVEL 2 – Separate EC2 Instances

### 🎯 Objective
Deploy Flask and Express on two different EC2 instances.  
The frontend connects to the backend using its **private IP**.

### ⚙️ Setup
| Component | EC2 | Port | Access |
|------------|------|------|--------|
| Backend (Flask) | Public EC2 | 5000 | 
| Frontend (Express) | Public EC2 | 3000 | Public browser access |

### 🌐 Deployment Details
- **Frontend:** [http://13.200.237.218:3000]
- **Backend Private IP:** '172.31.14.84'
- **Repository:** [https://github.com/vaibhavkshtriya912-creator/flaskp-project](https://github.com/vaibhavkshtriya912-creator/flaskp-project)

✅ Backend secured inside VPC  
✅ Frontend connects using private IP  
✅ Successful 2-instance communication  

---

# 🐳 Level 3 – Docker + ECR + ECS (Fargate) in VPC

**Images (ECR)**
- 147989073616.dkr.ecr.ap-south-1.amazonaws.com/flask-backend:latest
- 147989073616.dkr.ecr.ap-south-1.amazonaws.com/express-frontend:latest

**ECS (Fargate)**
- Cluster: `flask-express-cluster` (default VPC, public subnets)
- Task definition: `flask-express-task`
  - Containers in one task:
    - express-frontend → port 3000 (public)
    - flask-backend → port 5000 (internal)
  - Frontend → Backend via `http://localhost:5000`

**URL**
- http://43.205.217.186:3000/

✅ Containers run serverlessly on AWS Fargate  
✅ Images from ECR  
✅ No EC2 management, clean VPC networking


## 💰 Cost Control
Stop both instances after testing to save Free Tier usage:
```bash
pkill -f server.js || true
pkill -f app.py || true
