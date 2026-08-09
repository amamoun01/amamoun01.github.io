# Projets & Réalisations d'Ingénierie

Cette sélection réunit mes projets open source et des réalisations professionnelles en Platform Engineering. Les dépôts publics illustrent mon approche de l'architecture, de l'automatisation, de la sécurité et de la qualité opérationnelle. Les missions clients sont volontairement présentées à un niveau compatible avec la confidentialité.

## Projets Open Source

### :material-kubernetes: [KubeLens](https://github.com/amamoun01/kubelens)

Dashboard léger de topologie Kubernetes et plateforme interne permettant de comprendre les relations entre workloads, services et ressources réseau directement depuis le plan de contrôle du cluster.

**Points techniques clés**

* Détection automatique du contexte Kubernetes local ou *in-cluster*.
* Accès selon le principe du moindre privilège avec ServiceAccounts dédiés et RBAC.
* Contrôles DevSecOps couvrant le linting, l'analyse statique, l'IaC et le scan des images de conteneurs.

<span class="tech-tag">Kubernetes</span> <span class="tech-tag">Python</span> <span class="tech-tag">Django</span> <span class="tech-tag">Docker</span> <span class="tech-tag">GitHub Actions</span> <span class="tech-tag">Trivy</span>

[:octicons-mark-github-16: Voir le dépôt](https://github.com/amamoun01/kubelens){ .md-button .md-button--primary }

### :simple-apacheairflow: __[Multi-Tenant Airflow](https://github.com/amamoun01/multi-tenant-airflow)__

---

Plateforme automatisée permettant de provisionner plusieurs environnements Apache Airflow isolés tout en mutualisant PostgreSQL, Redis et l'infrastructure de routage.

**Points techniques clés**

* Provisionnement déclaratif des tenants à partir d'une configuration YAML.
* Isolation des bases, des canaux Celery et des routes HTTP par tenant.
* Validation automatisée du code, de la configuration et de l'infrastructure Docker Compose générée.

<span class="tech-tag">Apache Airflow</span> <span class="tech-tag">Docker Compose</span> <span class="tech-tag">PostgreSQL</span> <span class="tech-tag">Redis</span> <span class="tech-tag">Traefik</span> <span class="tech-tag">Pytest</span>

[:octicons-mark-github-16: Voir le dépôt](https://github.com/amamoun01/multi-tenant-airflow){ .md-button .md-button--primary }

### :material-robot-outline: __[Opsie](https://github.com/amamoun01/opsie)__

---

Moteur ChatOps cloud-native recevant des demandes opérationnelles depuis Discord et les traitant via une API FastAPI asynchrone avec routage multi-modèles LLM.

**Points techniques clés**

* Services Discord et API backend découplés et conteneurisés.
* Routage dynamique entre fournisseurs de modèles via LiteLLM.
* Télémétrie structurée et contrôles CI automatisés de qualité et de sécurité.

<span class="tech-tag">FastAPI</span> <span class="tech-tag">Discord.py</span> <span class="tech-tag">LiteLLM</span> <span class="tech-tag">Docker</span> <span class="tech-tag">OpenAI</span> <span class="tech-tag">Gemini</span>

[:octicons-mark-github-16: Voir le dépôt](https://github.com/amamoun01/opsie){ .md-button .md-button--primary }
