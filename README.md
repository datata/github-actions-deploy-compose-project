# MEMORIA PROYECTO FINAL DevOps

Investigación sobre como implementar la filosofía devOps en proyectos medianos de poco alcance mediante contendores.
#### Índice


1. Problema.
2. Orquestadores de contenedores.
3. Solución aplicando la filosofía devOps
4. Proyecto ejemplo
#
#### 1. Problema

Nos centramos primero en el problema de la empresa al hacer frente al deploy en desarrollo o producción de proyectos con corto alcance.
Actualmente no tenemos una única solución que haga frente a los proyectos que tenemos y dependemos de ciertas tareas no automatizadas sobre deploys en producción.

Queremos simplificar y automatizar todos estos procesos.

Decidimos hacer un estudio sobre distintos orquestadores para seleccionar uno para nuestros futuros proyectos que ayude a que cualquier persona del equipo de desarrollo pueda poner en valor el trabajo realizado sin necesidad de depender de otro compañero(cuellos de botella). Manteniendo unos mínimos de calidad y seguridad.


#### 2. Orquestadores de contenedores

####   a. Kubernetes

Conociendo que los proyectos sobre los que queremos trata son de corto-mediano alcance, descartamos kubernetes por la complejidad que puede requerir en un principio.

#### - DESCARTADO-

####    b. Docker Swarn
    
Docker swarm es una interesante herramienta que nos brinda escalabilidad dentro del proyecto.

Docker enterprise fue adquirida por Mirantis en 2019. Posteriromente la empresa se compromete a seguir dando mantenimiento durante 2 años.

Por otra parte la comunidad de Docker Swarm es muy pequeña y no suelen sacar nuevas features con frecuencia. (https://github.com/docker/swarmkit)

Las issues practicamente no son respondidas por la comunidad

El uso de esta tecnologia cada vez es más reducido.

#### - DESCARTADO-

####    c. Docker compose

Es una herramienta que todo el equipo conoce bien. Simplifica mucho la puesta en marcha de proyectos con varios contenedores. Con un simple comando se levanta el proyecto. La escalabilidad no va a ser un problema a corto/medio plazo en este tipo de proyectos.

Nos centraremos en la técnica de dockerizar con imagenes stateless sin ningun tipo de bindeo instalando en ellas todo lo necesario para el correcto funcionamiento de nuestra app.
#### -Tenemos un ganador-


#### 3. Solución aplicando la filosofía devOps

Trabajaremos con un unico repositorio.

Estableceremos dos entornos de trabajo ademas del de desarrolo
    - Desarrollo
    - PRE-producción
    - Produccón

Agregaremos pipelines a en nuestros entornos de PRE-producción y produccón.

Los pipelines debén estar bien definidos con sus jobs de CI/CD/Deploy

Durante el proceso de Jobs de CI comprobaremos entre otras cosas:
- La instalacion de las dependecias del mismo
- La calidad del código.

Durante el proceso de Jobs de CD realizaremos entre otras cosas:

- No aseguraremos que las imágenes de los contenedores a utilizar se crean correctamente.
- Las guardamos en un registry (ejemplo: docker hub)
- Guardamos cada una de las imágenes con su tag correspondiente y unico.

Durante el proceso de Deploy (via ssh) realizaremos entre otras cosas:
- Conectar y eliminar todo el contenido previo del proyecto, asi como sus contenedores e imagenes existentes.
- Descargamos la ultimas imagenes del proyectos.
- Levantamos el proyecto con el comando docker-compose up


#### 4. Proyecto de ejemplo (https://github.com/datata/github-actions-deploy-compose-project.git)

Api Rest

Tecnologías del proyecto.
- node/express
- docker
- docker compose
- github
- github actions

Se trata de un api rest con deploy a un entorno de produccion.

El servidor utilizado es Digital Ocean usando un droplet.


#### Bibliografia:
1. DockerSwarm

    Compra de Docker Enterprise por parte de mirantis
    - https://www.muycomputerpro.com/2019/11/14/mirantis-compra-docker-enterprise
    - https://www.silicon.es/mirantis-compra-el-negocio-empresarial-de-docker-2408181 

    Linkedin Mirantis:
    - https://es.linkedin.com/company/mirantis

    Wikipedia:
    - https://en.wikipedia.org/wiki/Mirantis

    Webinar preguntas y respuestas sobre Docker Swarm
    - https://www.mirantis.com/blog/docker-swarm-webinar-qa-long-live-docker-swarm/


2. Docker-Compose

- https://docs.docker.com/compose/
