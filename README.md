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
