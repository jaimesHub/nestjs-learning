// // no apply IoC in NestJS

// class TeamCarVF8 {
//     produceCar() {
//         console.log('Start Car: --> VF8');
//     }
// }

// class TeamCarVF9 {
//     produceCar() {
//         console.log('Start Car: --> VF9');
//     }
// }

// class TeamLead {
//     // private teamCarVF8: TeamCarVF8 = new TeamCarVF8();

//     // after 1 year
//     private teamCarVF9: TeamCarVF9 = new TeamCarVF9();

//     task() {
//         // this.teamCarVF8.produceCar();
//         this.teamCarVF9.produceCar();
//     }
// }

// class TeamCompany {
//     // start
//     start() {
//         const teamLead = new TeamLead();
//         teamLead.task();
//     }
// }

// const teamCompany = new TeamCompany();
// teamCompany.start();