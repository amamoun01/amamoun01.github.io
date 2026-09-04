# Projets & Réalisations Techniques

Cette sélection réunit mes projets open source et des réalisations professionnelles en Platform Engineering. Les dépôts publics illustrent mon approche de l'architecture, de l'automatisation, de la sécurité et de la qualité opérationnelle. Les missions clients sont volontairement présentées à un niveau compatible avec la confidentialité.

## Projets Open Source

### :material-kubernetes: [KubeLens](https://github.com/amamoun01/kubelens)

Dashboard léger de topologie Kubernetes et plateforme interne permettant de comprendre les relations entre workloads, services et ressources réseau directement depuis le plan de contrôle du cluster.  
**Points techniques clés**

* Détection automatique du contexte Kubernetes local ou *in-cluster*.
* Accès selon le principe du moindre privilège avec ServiceAccounts dédiés et RBAC.
* Contrôles DevSecOps couvrant le linting, l'analyse statique, l'IaC et le scan des images de conteneurs.

<div class="tech-stack" style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;"> <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" alt="Kubernetes"> <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" alt="Django"> <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"> <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white" alt="GitHub Actions"> <img src="https://img.shields.io/badge/Trivy-1904DA?style=for-the-badge&logo=trivy&logoColor=white" alt="Trivy"> </div>

[:octicons-mark-github-16: Voir Kublens sur Github](https://github.com/amamoun01/kubelens){ .md-button .md-button--secondary target="_blank" rel="noopener" }

---

### :simple-apacheairflow: [Multi-Tenant Airflow](https://github.com/amamoun01/multi-tenant-airflow)

Plateforme automatisée permettant de provisionner plusieurs environnements Apache Airflow isolés tout en mutualisant PostgreSQL, Redis et l'infrastructure de routage.  
**Points techniques clés**

* Provisionnement déclaratif des tenants à partir d'une configuration YAML.
* Isolation des bases, des canaux Celery et des routes HTTP par tenant.
* Validation automatisée du code, de la configuration et de l'infrastructure Docker Compose générée.

<div class="tech-stack" style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;"> <img src="https://img.shields.io/badge/Apache_Airflow-017CEE?style=for-the-badge&logo=apacheairflow&logoColor=white" alt="Apache Airflow"> <img src="https://img.shields.io/badge/Docker_Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker Compose"> <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL"> <img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" alt="Redis"> <img src="https://img.shields.io/badge/Traefik-24A1C1?style=for-the-badge&logo=traefikproxy&logoColor=white" alt="Traefik"> </div>

[:octicons-mark-github-16: Voir Multi-Tenant Airflow sur Github](https://github.com/amamoun01/multi-tenant-airflow){ .md-button .md-button--secondary target="_blank" rel="noopener" }

---

### :material-robot-outline: [Opsie](https://github.com/amamoun01/opsie)

Moteur ChatOps cloud-native recevant des demandes opérationnelles depuis Discord et les traitant via une API FastAPI asynchrone avec routage multi-modèles LLM.  
**Points techniques clés**

* Services Discord et API backend découplés et conteneurisés.
* Routage dynamique entre fournisseurs de modèles via LiteLLM.
* Télémétrie structurée et contrôles CI automatisés de qualité et de sécurité.

<div class="tech-stack" style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;"> <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI"> <img src="https://img.shields.io/badge/Discord.py-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord.py"> <img src="https://img.shields.io/badge/LiteLLM-000000?style=for-the-badge&logo=lightning&logoColor=white" alt="LiteLLM"> <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"> <img src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white" alt="OpenAI"> <img src="https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white" alt="Gemini"> </div>

[:octicons-mark-github-16: Voir Opsie sur Github](https://github.com/amamoun01/opsie){ .md-button .md-button--secondary target="_blank" rel="noopener" }

---

### :material-microscope: [Anatomopathologie et Diagnostic du Cancer](https://github.com/amamoun01/Deep-clustering-for-the-medical-diagnosis-of-cancer)

Un projet de Deep Learning développé en collaboration avec l'[**Institut Universitaire du Cancer de Toulouse (IUCT-Oncopole)**](https://www.iuct-oncopole.fr/), axé sur l'**analyse non supervisée d'images de microscopie pour le diagnostic du cancer**.  
**Points clés techniques**

* Conception d'approches de transfert de caractéristiques et d'adaptation de domaine pour l'analyse d'images de microscopie.
* Développement de workflows de Deep Learning non supervisés pour le clustering et la classification d'images médicales.
* Création de pipelines de Machine Learning reproductibles avec Python, TensorFlow, Keras et Scikit-learn.
* Containerisation de l'environnement de développement avec Docker pour garantir des expérimentations constantes et portables.

<div class="tech-stack" style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;"> <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python"> <img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" alt="TensorFlow"> <img src="https://img.shields.io/badge/Keras-D00000?style=for-the-badge&logo=keras&logoColor=white" alt="Keras"> <img src="https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikitlearn&logoColor=white" alt="Scikit-learn"> <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"> <img src="https://img.shields.io/badge/Apprentissage%20Non%20Supervis%C3%A9-555555?style=for-the-badge" alt="Apprentissage non supervisé"> <img src="https://img.shields.io/badge/Imagerie%20M%C3%A9dicale-555555?style=for-the-badge" alt="Imagerie médicale"> </div>

[:octicons-mark-github-16: Voir A.D.C sur GitHub](https://github.com/amamoun01/Deep-clustering-for-the-medical-diagnosis-of-cancer){ .md-button .md-button--secondary target="_blank" rel="noopener" }
