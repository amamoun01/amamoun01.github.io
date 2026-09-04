# Projects & Engineering Highlights

This selection combines public open-source projects with professional platform-engineering work. Public repositories demonstrate how I approach architecture, automation, security and operational quality; client work is intentionally presented at a confidentiality-safe level.

## Open-Source Projects

### :material-kubernetes: [KubeLens](https://github.com/amamoun01/kubelens)

A lightweight Kubernetes topology dashboard and internal developer platform that helps teams understand workloads, services and networking relationships directly from the cluster control plane.  
**Technical highlights**

* Automatic local and in-cluster Kubernetes context discovery.
* Least-privilege access through dedicated ServiceAccounts and RBAC.
* DevSecOps quality gates covering linting, static analysis, IaC checks and container-image scanning.

<div class="tech-stack" style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;"> <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" alt="Kubernetes"> <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" alt="Django"> <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"> <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white" alt="GitHub Actions"> <img src="https://img.shields.io/badge/Trivy-1904DA?style=for-the-badge&logo=trivy&logoColor=white" alt="Trivy"> </div>

[:octicons-mark-github-16: Explore KubeLens on GitHub](https://github.com/amamoun01/kubelens){ .md-button .md-button--secondary target="_blank" rel="noopener" }

---

### :simple-apacheairflow: [Multi-Tenant Airflow](https://github.com/amamoun01/multi-tenant-airflow)

An automated platform for provisioning multiple isolated Apache Airflow environments while sharing core PostgreSQL, Redis and routing infrastructure.  
**Technical highlights**

* Declarative tenant provisioning from YAML configuration.
* Tenant isolation across databases, Celery channels and HTTP routes.
* Automated validation of source code, configuration and generated Docker Compose infrastructure.

<div class="tech-stack" style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;"> <img src="https://img.shields.io/badge/Apache_Airflow-017CEE?style=for-the-badge&logo=apacheairflow&logoColor=white" alt="Apache Airflow"> <img src="https://img.shields.io/badge/Docker_Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker Compose"> <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL"> <img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" alt="Redis"> <img src="https://img.shields.io/badge/Traefik-24A1C1?style=for-the-badge&logo=traefikproxy&logoColor=white" alt="Traefik"> </div>

[:octicons-mark-github-16: Explore Multi-Tenant Airflow on GitHub](https://github.com/amamoun01/multi-tenant-airflow){ .md-button .md-button--secondary target="_blank" rel="noopener" }

---

### :material-robot-outline: [Opsie](https://github.com/amamoun01/opsie)

A cloud-native ChatOps engine that receives operational requests from Discord and processes them through an asynchronous FastAPI service with multi-model LLM routing.  
**Technical highlights**

* Decoupled, containerised Discord bot and backend API services.
* Dynamic model-provider routing through LiteLLM.
* Structured telemetry and automated CI quality and security checks.

<div class="tech-stack" style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;"> <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI"> <img src="https://img.shields.io/badge/Discord.py-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord.py"> <img src="https://img.shields.io/badge/LiteLLM-000000?style=for-the-badge&logo=lightning&logoColor=white" alt="LiteLLM"> <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"> <img src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white" alt="OpenAI"> <img src="https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white" alt="Gemini"> </div>

[:octicons-mark-github-16: Explore Opsie on GitHub](https://github.com/amamoun01/opsie){ .md-button .md-button--secondary target="_blank" rel="noopener" }

---

### :material-microscope: [Anatomopathology & Cancer Diagnostics](https://github.com/amamoun01/Deep-clustering-for-the-medical-diagnosis-of-cancer)

A Deep Learning project developed in collaboration with the [**University Cancer Institute of Toulouse (IUCT-Oncopole)**](https://www.iuct-oncopole.fr/), focused on **unsupervised analysis of microscopy images for cancer diagnosis**.  
**Technical highlights**

* Designed feature-transfer and domain-adaptation approaches for microscopy image analysis.
* Built unsupervised Deep Learning workflows for clustering and classification of medical images.
* Developed reproducible Machine Learning pipelines with Python, TensorFlow, Keras, and Scikit-learn.
* Containerised the development environment with Docker for consistent and portable experimentation.

<div class="tech-stack" style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;"> <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python"> <img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" alt="TensorFlow"> <img src="https://img.shields.io/badge/Keras-D00000?style=for-the-badge&logo=keras&logoColor=white" alt="Keras"> <img src="https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikitlearn&logoColor=white" alt="Scikit-learn"> <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"> <img src="https://img.shields.io/badge/Unsupervised%20Learning-555555?style=for-the-badge" alt="Unsupervised Learning"> <img src="https://img.shields.io/badge/Medical%20Imaging-555555?style=for-the-badge" alt="Medical Imaging"> </div>

[:octicons-mark-github-16: Explore A.C.D on GitHub](https://github.com/amamoun01/Deep-clustering-for-the-medical-diagnosis-of-cancer){ .md-button .md-button--secondary target="_blank" rel="noopener" }
