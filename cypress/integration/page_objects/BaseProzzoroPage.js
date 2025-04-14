import HeaderComponent from './components/HeaderComponent';

class BaseProzzoroPage {
    constructor() {
        this.activeTab = '.router-link-active';
        this.headerComponent = new HeaderComponent();
        this.url = '/'; // Default URL, can be overridden in subclasses
    }

    getActiveTab() {
        return cy.get(this.activeTab);
    }

    goToMainPage() {
        cy.visit(this.url);
    }
}

export default BaseProzzoroPage;