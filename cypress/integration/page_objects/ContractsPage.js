import BaseProzzoroPage from './BaseProzzoroPage';

class ContractsPage extends BaseProzzoroPage {

    constructor() {
        super();
        this.url = '/search/contracts'; // Replace with the actual URL of the page
    }
    visit() {
        cy.visit(this.url); 
    }

    goToPage() {
       this.headerComponent.goToContractsTab();
    }
}

export default ContractsPage;