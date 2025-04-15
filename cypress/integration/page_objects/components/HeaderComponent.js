class HeaderComponent
{ 
    constructor()
    {
        this.procurementsTab = 'a[href="/en/search/tender"]';
        this.contractsTab = 'a[href="/en/search/contracts"]';
        this.activeTab = '.router-link-active';
    }

    goToProcurementsTab()
    {
        cy.get(this.procurementsTab).click();
    }

    goToContractsTab()
    {
        cy.get(this.contractsTab).click();
    }

    getActiveTab() {
        return cy.get(this.activeTab);
    }
}
export default HeaderComponent;