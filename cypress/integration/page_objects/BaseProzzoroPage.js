import HeaderComponent from './components/HeaderComponent';

class BaseProzzoroPage {
    constructor() {
        this.headerComponent = new HeaderComponent();
        this.url = '/';
    }

    goToMainPage() {
        cy.visit(this.url);
    }
}

export default BaseProzzoroPage;