// This file contains step definitions that map the steps in the feature file to Cypress commands.

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ContactPage from '../../../integration/page_objects/ContractsPage';

const contactPage = new ContactPage();

Given('I navigate to the page', () => {
    contactPage.goToMainPage();
});

When('I perform an action', () => {
    contactPage.goToPage();
});

Then('I should see the expected result', () => {
    contactPage.headerComponent.getActiveTab().should('text', 'Contracts');
});