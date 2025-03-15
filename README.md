# NESTJS BACKEND ARCHITECTURE

## IoC in NestJS

- [Section 2](https://youtu.be/8EhoEu_kYPU?si=1uE68-KAkLswFyQP)
- [Example of no-IoC](./noIoC/noIoC.ts)
- [Example of IoC](./IoC/IoC.ts)
- IoC: Inversion of Control
  - Build: `tsc noIoC.ts`
  - Run: `node noIoC.js`
  - Problem: `https://youtu.be/8EhoEu_kYPU?si=FrC9hhhqsuJh-haP&t=198`
    - Company wants to implement other models ???
    - Then `TeamLead` will complain that changing so much => make the system damage
    - Violates `IoC`, `the 5th principle in SOLID` -> they should `depend` on `abstract/interface`
  - DI: Dependency Injection => solve the IoC's problem
- AOP: Aspect Oriented Programming (Later)

- References
  - [Youtube](https://youtu.be/8EhoEu_kYPU?si=3QEnYC2rbrBBSkgf)
  - [IoC - hoidanit](https://docs.google.com/document/d/1vHBArOwbY3SvcQtAntDA44uBuXF4QDdNWj_KPo6owcM/edit?tab=t.0#heading=h.lnit7wcmdegi)
    - [IoC - What](https://www.tutorialsteacher.com/ioc/introduction)
    - [Dependency Injection in Angular](https://v17.angular.io/guide/dependency-injection#understanding-dependency-injection)
    - [Scope & How to use DI](https://angular.io/guide/dependency-injection#providing-dependency)
    - [Dependency Injection](https://www.tutorialsteacher.com/ioc/dependency-injection)
    - [Private key](https://stackoverflow.com/questions/72446772/how-does-the-private-keyword-let-us-both-declare-and-initialize-a-class-instance/72447725)
    - [Parameter Properties](https://www.typescriptlang.org/docs/handbook/2/classes.html#parameter-properties)

## Use CLI

- [CLI](https://docs.nestjs.com/cli/overview)

- [Installation](https://docs.nestjs.com/#installation)

```bash
$ npm i -g @nestjs/cli
$ nest new project-name
$ nest -v # Current: 11.0.5
$ npm update -g @nestjs/cli
```

- [Init project]()

```bash
$ nest new nest-vetautet-backend-api
$ cd nest-vetautet-backend-api
```

- [Commands]()

```bash
$ nest -h
$ nest new nest-vetautet-backend-api -p npm
$ nest generate module ticket # create module named `ticket`
$ nest generate controller ticket # create controller
$ nest generate service ticket # create service
$ nest generate resource order # create full of order module
$ nest info # author's version: Node v23.7.0
```

- [Structure Folder]()

  - tsconfig.json: `use strict mode`
    ```json
    {
      "compilerOptions": {
        // ...,
        "strictNullChecks": true,
        "forceConsistentCasingInFileNames": true,
        "noImplicitAny": false,
        "strictBindCallApply": false,
        "noFallthroughCasesInSwitch": false
      }
    }
    ```
  - src
  - nest-cli.json

    ```json
    {
      "$schema": "https://json.schemastore.org/nest-cli",
      "collection": "@nestjs/schematics",
      "sourceRoot": "src",
      "compilerOptions": {
        "deleteOutDir": true,
        "webpack": true // if you want to compile via webpack, by default using tsc
      },
      "generateOptions": {
        "spec": false // do not create .spec.* file while using nest cli to create module, controller, service,...
      }
    }
    ```

  - package.json
    ```bash
      $ npm run dev
      $ npm run wdev
      $ npm run build
      $ nest build -h
        # tsc: nest build / npm run build
        # webpack: nest build --webpack / npm run build --webpack
    ```

- [Finding more NestCLI](https://json.schemastore.org/nest-cli)

- [Summary]()
  - How to use `Nest Command-Line-Interface`via create project
  - Distinguishing the difference between `webpack` and `tsc` compiler --> learning compile using nest cli
  - [Installation](https://docs.nestjs.com/#installation)
  - [CLI](https://docs.nestjs.com/cli/overview)
  - Learn more nest-cli: [Here](https://json.schemastore.org/nest-cli)
