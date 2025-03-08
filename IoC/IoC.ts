// IoC in NestJS

interface TeamProduce {
    makeCar(): void;
}

class TeamCarVF8 implements TeamProduce {
    produceCar() {
        console.log('Start Car: --> VF8');
    }

    makeCar() {
        this.produceCar();
    }
}

class TeamCarVF9 implements TeamProduce {
    produceCar() {
        console.log('Start Car: --> VF9');
    }

    makeCar() {
        this.produceCar();
    }
}

class TeamLead {
    private produce: TeamProduce;

    constructor(produce: TeamProduce) {
        this.produce = produce;
    }

    task() {
        this.produce.makeCar();
    }
}

class TeamCompany {
    // start
    start() {
        // const produce: TeamCarVF9 = new TeamCarVF9();
        const produce: TeamCarVF8 = new TeamCarVF8();
        const teamLead = new TeamLead(produce);
        teamLead.task();
    }
}

const teamCompany = new TeamCompany();
teamCompany.start();