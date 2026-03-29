# MetaGenesis Cypress Audit

This repository contains Cypress checks for the public MetaGenesis site:

- target: `https://metagenesis-core-site1.vercel.app`
- focus: usability smoke coverage and bug reproduction

## Test documentation

- Test scenario: [TEST_SCENARIO.md](./TEST_SCENARIO.md)
- Bug report: [BUG_REPORT.md](./BUG_REPORT.md)

## Available commands

- `npm test` - runs the full project test set
- `npm run test:site` - runs the usability smoke scenario
- `npm run test:verifier` - runs the Live Verifier regression scenario
- `npm run test:headed` - opens Cypress UI

## Current status

- Usability smoke coverage: passing
- Live Verifier regression coverage: failing

## Test files

- `cypress/e2e/metagenesis-usability.cy.js`
- `cypress/e2e/metagenesis-verifier-regression.cy.js`
