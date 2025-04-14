class HeaderComponent
{ 
    constructor()
    {
        this.procurementsTab = 'a[href="/en/search/contracts"]';
        this.contractsTab = 'a[href="/en/search/contracts"]';   
    }

    goToProcurementsTab()
    {
        cy.get(this.procurementsTab).click();
    }

    goToContractsTab()
    {
        cy.get(this.contractsTab).click();
    }
}
export default HeaderComponent;