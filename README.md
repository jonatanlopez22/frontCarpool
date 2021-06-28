# CarpoolAPP

 CarpoolAPP es una aplicativo diseñada para ser intuitivo y simple. Está construido con una metodologia Full-Stack utilizando una base de datos relacional SQL. El aplicativo representa un gran conjunto de herramientas de desarrollo front-end  y back-end  implementando frameworks como  Angular,NodeJS de parte del frontend y spring boot (Maven) por el lado del backend.

Angular  contiene múltiples complementos seleccionados y optimizados. Todo está diseñado para encajar entre sí. Como podrá ver es una permitiendo un facil manejo de este aplicativo.


### Pre-requisitos 📋
Que cosas necesitas para instalar el software

- nodeJs
- visual studio code
- workbench: 8.0 CE



## Construido con: 🔧

#### Front-End:
- Angular: 11.2.4 
- Node: 14.17.0

#### Back-End:
- spring boot Maven - 

Base de datos:
- workbench: 8.0 CE

***

## Inicio rápido:

Opciones de inicio rápido:

+ [Descargar workbench] (https://dev.mysql.com/downloads/workbench/).
+ [Descargar java11] (https://www.oracle.com/co/java/technologies/javase-jdk11-downloads.html).
+ [Descargar node] (https://nodejs.org/es/).
+ [Descargar desde Github zip] (https://github.com/jonatanlopez22/carpool/tree/master).
+ Clonar el repositorio: `git clone https: // github.com / jonatanlopez22 / carpool.git`.

## NOTA

Descargue la última versión de este repositorio.

## Instrucciones base de datos

1. Instale workbench (https://dev.mysql.com/downloads/workbench/) - ayuda (https://www.youtube.com/watch?v=FQ7XAygh0qA)
2. Abrir workbench 
3. Usar conexion local por defecto (si no tiene crear una con el puerto localhost:3306)
4. crear un schema con el nombre AplicacionDB


## Instrucciones backend

1. Instale visual studio code desde la [Página oficial de visual studio code desde] (https://code.visualstudio.com/download).
2. Abrir terminal 
3. Vaya a su proyecto de archivo backend
4. Ejecutar en la terminal: `` `code . ```
5. Añadir las extensiones para correr el back (https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)
6. compile el proyecto dando click en run ( ➤ )


##  Instrucciones frontend

1. Instale NodeJs desde la [Página oficial de NodeJs] (https://nodejs.org/es).
2. Abrir terminal 
3. Vaya a su proyecto de archivo
4. Ejecutar en la terminal: `` `npm install -g @ angular / cli```
5. Luego: `` `npm install```
6. Y: `` `ng serve```
7. Navegue a `http: // localhost: 4200 /`


### Qué está incluido

Dentro de la descarga encontrará los siguientes directorios y archivos :
```


─── backend 
    ├── .mvn
    │   ├── maven-wrapper.jar
    │   ├── maven-wrapper.properties
    │   └── MavenWrapperDownloader.java
    ├── .vscode
    │   └── settings.json
    ├── src
    │   ├── main
    │   │   ├── java\com\ias
    │   │   │   ├── backend
    │   │   │   │   ├── domain
    │   │   │   │   │   ├── Reserva.java
    │   │   │   │   │   └── User.java
    │   │   │   │   ├── infrastucture
    │   │   │   │   │   ├── ReservaController.java
    │   │   │   │   │   └── UserController.java
    │   │   │   │   ├── repository
    │   │   │   │   │   ├── ReservaRepository.java
    │   │   │   │   │   └── UserRepository.java
    │   │   │   │   └── backendApplication.java
    │   │   │   └── backend.rar
    │   │   └── resources
    │   │       └── application.properties
    │   └── test\java\com\ias\backend
    │       └── BackendApplicationTests.java
    ├── target
    │   ├── classes
    │   │   │   ├── backend
    │   │   │   │   ├── domain
    │   │   │   │   │   ├── Reserva.java
    │   │   │   │   │   └── User.java
    │   │   │   │   ├── infrastucture\controller
    │   │   │   │   │   ├── ReservaController.java
    │   │   │   │   │   └── UserController.java
    │   │   │   │   ├── repository
    │   │   │   │   │   ├── ReservaRepository.java
    │   │   │   │   │   └── UserRepository.java
    │   │   │   │   └── backendApplication.java
    │   │   │   └── backend.rar
    │   │   └── application.properties
    │   ├── generated-sources\annotations
    │   ├── generated-test-sources\test-annotations
    │   ├── maven-status\maven-compile-plugin
    │   │   ├── compile\default-compile
    │   │   │   ├── createdFiles.lst
    │   │   │   └── inputFiles.lst
    │   │   └── testCompile
    │   │       ├── createdFiles.lst
    │   │       └── inputFiles.lst
    │   ├── sufire-reports
    │   │   ├── com.ias.backend.BackendApplicationTests.txt
    │   │   └── TEST-com.ias.backend.BackendApplicationTests.xml
    │   ├── test-classes\com\ias\backend
    │   │   └── BackendApplicationTests.class
    ├── HELP.md
    ├── mvnw
    ├── mvnw.cmd
    └── pom.xml




─── frontend
    ├── CHANGELOG.md
    ├── LICENSE.md
    ├── README.md
    ├── angular.json
    ├── documentation
    │   ├── css
    │   └── tutorial-lbd-angular2.html
    ├── e2e
    ├── karma.conf.js
    ├── package-lock.json
    ├── package.json
    ├── protractor.conf.js
    ├── src
    │   ├── app
    │   │   ├── app.component.css
    │   │   ├── app.component.html
    │   │   ├── app.component.spec.ts
    │   │   ├── app.component.ts
    │   │   ├── app.module.ts
    │   │   ├── app.routing.ts
    │   │   ├── carpool
    │   │   │   ├── carpool.component.css
    │   │   │   ├── carpool.component.html
    │   │   │   ├── carpool.component.spec.ts
    │   │   │   └── carpool.component.ts
    │   │   ├── user
    │   │   │   ├── user.component.css
    │   │   │   ├── user.component.html
    │   │   │   ├── user.component.spec.ts
    │   │   │   └── user.component.ts
    │   │   ├── layouts
    │   │   │   └── admin-layout
    │   │   │       ├── admin-layout.component.html
    │   │   │       ├── admin-layout.component.scss
    │   │   │       ├── admin-layout.component.spec.ts
    │   │   │       ├── admin-layout.component.ts
    │   │   │       ├── admin-layout.module.ts
    │   │   │       └── admin-layout.routing.ts
    │   │   ├── lbd
    │   │   │   ├── lbd-chart
    │   │   │   │   ├── lbd-chart.component.html
    │   │   │   │   └── lbd-chart.component.ts
    │   │   │   └── lbd.module.ts
    │   │   ├── login
    │   │   │   ├── login.component.css
    │   │   │   ├── login.component.html
    │   │   │   ├── login.component.spec.ts
    │   │   │   └── login.component.ts
    │   │   ├── maps
    │   │   │   ├── maps.component.css
    │   │   │   ├── maps.component.html
    │   │   │   ├── maps.component.spec.ts
    │   │   │   └── maps.component.ts
    │   │   ├── model
    │   │   │   ├── Reserva.ts
    │   │   │   ├── ReservaNew.ts
    │   │   │   ├── User.ts
    │   │   │   └── UserNew.ts
    │   │   ├── reserva
    │   │   │   ├── reserva.component.css
    │   │   │   ├── reserva.component.html
    │   │   │   ├── reserva.component.spec.ts
    │   │   │   └── reserva.component.ts
    │   │   ├── register
    │   │   │   ├── create-carpool
    │   │   │   │   ├── create-carpool.component.css
    │   │   │   │   ├── create-carpool.component.html
    │   │   │   │   ├── create-carpool.component.spec.ts
    │   │   │   │   └── create-carpool.component.ts
    │   │   │   ├── create-user
    │   │   │   │   ├── create-user.component.css
    │   │   │   │   ├── create-user.component.html
    │   │   │   │   ├── create-user.component.spec.ts
    │   │   │   │   └── create-user.component.ts
    │   │   ├── shared
    │   │   │   ├── footer
    │   │   │   │   ├── footer.component.html
    │   │   │   │   ├── footer.component.ts
    │   │   │   │   └── footer.module.ts
    │   │   │   ├── guard
    │   │   │   │   ├── auth.guard.spec.ts
    │   │   │   │   └── auth.guard.ts
    │   │   │   ├── pipes
    │   │   │   │   ├── filter.pipe.spec.ts
    │   │   │   │   └── filter.pipe.ts
    │   │   │   └── services
    │   │   │       ├── authentication.service.spec.ts
    │   │   │       ├── authentication.servicets
    │   │   │       ├── carpool.service.spec.ts
    │   │   │       ├── carpool.service.ts
    │   │   │       ├── communication.service.spec.ts
    │   │   │       ├── communication.service.ts
    │   │   │       ├── token-interceptor.service.spec.ts
    │   │   │       ├── token-interceptor.service.ts
    │   │   │       ├── user.service.spec.ts
    │   │   │       └── user.service.ts
    │   │   ├── sidebar
    │   │   │   ├── sidebar.component.html
    │   │   │   ├── sidebar.component.ts
    │   │   │   └── sidebar.module.ts
    │   │   ├── upgrade
    │   │   │   ├── upgrade.component.css
    │   │   │   ├── upgrade.component.html
    │   │   │   ├── upgrade.component.spec.ts
    │   │   │   └── upgrade.component.ts
    │   │   └── user
    │   │       ├── user.component.css
    │   │       ├── user.component.html
    │   │       ├── user.component.spec.ts
    │   │       └── user.component.ts
    │   ├── assets
    │   │   ├── css
    │   │   ├── fonts
    │   │   ├── img
    │   │   └── sass
    │   │       ├── lbd
    │   │       └── light-bootstrap-dashboard.scss
    │   ├── environments
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── main.ts
    │   ├── polyfills.ts
    │   ├── styles.css
    │   ├── test.ts
    │   └── tsconfig.json
    ├── tslint.json
    └── typings.json

```



## Useful Links

* [Maven](https://maven.apache.org/) - Manejador de dependencia

* [VisualSCode](https://code.visualstudio.com/) - Entorno de desarrollo

* [Workbench](https://dev.mysql.com/downloads/workbench/) - Gestor de base de datos SQL relacional

* [Bootstrap](https://getbootstrap.com/) - Frameword de diseño

