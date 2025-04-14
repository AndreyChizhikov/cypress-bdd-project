# Cypress BDD Project

This project is a Cypress-based end-to-end testing framework that follows the Behavior-Driven Development (BDD) approach. It utilizes Gherkin syntax for feature definitions and implements page object patterns for better test organization and maintainability.

## Project Structure

```
cypress-bdd-project
├── cypress
│   ├── e2e
│   │   ├── features
│   │   │   
│   │   └── support
│   │       ├── commands.js
│   │       └── index.js
│   ├── fixtures
│   │   └── example.json
│   ├── integration
│   │   ├── page_objects
│   │   │   └── components
│   │   │       
│   └── plugins
│       └── index.js
├── package.json
├── cypress.config.js
└── README.md
```

## Features

- **BDD with Gherkin**: Define application behavior in a human-readable format using `.feature` files.
- **Step Definitions**: Map Gherkin steps to Cypress commands for clear test implementation.
- **Page Objects**: Encapsulate page interactions in dedicated classes for improved test readability and maintainability.
- **Reusable Components**: Modularize UI components like headers for reuse across tests.
- **Custom Commands**: Extend Cypress with reusable commands to simplify test code.
- **Fixtures**: Use sample data for mocking API responses and providing test data.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/AndreyChizhikov/cypress-bdd-project.git
   cd cypress-bdd-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run Cypress:
   ```bash
   npx cypress open
   ```

## Usage

- Write your feature definitions in the `cypress/e2e/features` directory.
- Implement step definitions in the `cypress/e2e/` directory.
- Create page objects in the `cypress/integration/page_objects` directory.
- Use fixtures for test data in the `cypress/fixtures` directory.
- Add reusable UI components in the `cypress/integration/page_objects/components` directory.

## Example Workflow

1. **Feature File**: Define a feature in `cypress/e2e/features/goToPage.feature`:
   ```gherkin
   Feature: Navigate to Contracts Page

     Scenario: User navigates to the Contracts page
       Given I navigate to the page
       When I perform an action
       Then I should see the expected result
   ```

2. **Step Definitions**: Implement the steps in `cypress/e2e/features/goToPage/goToPage.js`:
   ```javascript
   import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
   import ContractsPage from '../../../integration/page_objects/ContractsPage';

   const contractsPage = new ContractsPage();

   Given('I navigate to the page', () => {
       contractsPage.visit();
   });

   When('I perform an action', () => {
       contractsPage.headerComponent.goToContractsTab();
   });

   Then('I should see the expected result', () => {
       contractsPage.getActiveTab().should('contain', 'Contracts');
   });
   ```

3. **Page Object**: Define the page object in `cypress/integration/page_objects/ContractsPage.js`:
   ```javascript
   import BaseProzzoroPage from './BaseProzzoroPage';

   class ContractsPage extends BaseProzzoroPage {
       constructor() {
           super();
           this.url = '/search/contracts';
       }

       visit() {
           cy.visit(this.url);
       }
   }

   export default ContractsPage;
   ```

4. **Component**: Define reusable components in `cypress/integration/page_objects/components/HeaderComponent.js`:
   ```javascript
   class HeaderComponent {
       constructor() {
           this.contractsTab = 'a[href="/en/search/contracts"]';
       }

       goToContractsTab() {
           cy.get(this.contractsTab).click();
       }
   }

   export default HeaderComponent;
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
