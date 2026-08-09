# Projects & Engineering Highlights

This selection combines public open-source projects with professional platform-engineering work. Public repositories demonstrate how I approach architecture, automation, security and operational quality; client work is intentionally presented at a confidentiality-safe level.

## Open-Source Projects


### :material-kubernetes: [KubeLens](https://github.com/amamoun01/kubelens)

A lightweight Kubernetes topology dashboard and internal developer platform that helps teams understand workloads, services and networking relationships directly from the cluster control plane.
**Engineering highlights**

* Automatic local and in-cluster Kubernetes context discovery.
* Least-privilege access through dedicated ServiceAccounts and RBAC.
* DevSecOps quality gates covering linting, static analysis, IaC checks and container-image scanning.

<div class="tech-stack" style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;"> <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" alt="Kubernetes"> <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" alt="Django"> <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"> <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white" alt="GitHub Actions"> <img src="https://img.shields.io/badge/Trivy-1904DA?style=for-the-badge&logo=trivy&logoColor=white" alt="Trivy"> </div>

[:octicons-mark-github-16: Explore KubeLens on GitHub](https://github.com/amamoun01/kubelens){ .md-button .md-button--secondary target="_blank" rel="noopener" }

---

### :simple-apacheairflow: [Multi-Tenant Airflow](https://github.com/amamoun01/multi-tenant-airflow)

An automated platform for provisioning multiple isolated Apache Airflow environments while sharing core PostgreSQL, Redis and routing infrastructure.
**Engineering highlights**

* Declarative tenant provisioning from YAML configuration.
* Tenant isolation across databases, Celery channels and HTTP routes.
* Automated validation of source code, configuration and generated Docker Compose infrastructure.

<div class="tech-stack" style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;"> <img src="https://img.shields.io/badge/Apache_Airflow-017CEE?style=for-the-badge&logo=apacheairflow&logoColor=white" alt="Apache Airflow"> <img src="https://img.shields.io/badge/Docker_Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker Compose"> <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL"> <img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" alt="Redis"> <img src="https://img.shields.io/badge/Traefik-24A1C1?style=for-the-badge&logo=traefikproxy&logoColor=white" alt="Traefik"> </div>

[:octicons-mark-github-16: Explore Multi-Tenant Airflow on GitHub](https://github.com/amamoun01/multi-tenant-airflow){ .md-button .md-button--secondary target="_blank" rel="noopener" }

---

### :material-robot-outline: [Opsie](https://github.com/amamoun01/opsie)

A cloud-native ChatOps engine that receives operational requests from Discord and processes them through an asynchronous FastAPI service with multi-model LLM routing.
**Engineering highlights**

* Decoupled, containerised Discord bot and backend API services.
* Dynamic model-provider routing through LiteLLM.
* Structured telemetry and automated CI quality and security checks.

<div class="tech-stack" style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;"> <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI"> <img src="https://img.shields.io/badge/Discord.py-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord.py"> <img src="https://img.shields.io/badge/LiteLLM-000000?style=for-the-badge&logo=lightning&logoColor=white" alt="LiteLLM"> <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"> <img src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white" alt="OpenAI"> <img src="https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white" alt="Gemini"> </div>

[:octicons-mark-github-16: Explore Opsie on GitHub](https://github.com/amamoun01/opsie){ .md-button .md-button--secondary target="_blank" rel="noopener" }
