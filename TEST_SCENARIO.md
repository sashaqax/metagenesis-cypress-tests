# Test scenario

Date: 2026-03-29
Target: `https://metagenesis-core-site1.vercel.app`
Tool: Cypress `15.12.0`

## Goal

Validate that the main MetaGenesis landing page is usable for a real visitor and confirm whether the Live Verifier completes a verification flow.

## Scope

### Scenario 1. Site usability smoke

File:

- `cypress/e2e/metagenesis-usability.cy.js`

Checks:

1. Homepage opens and shows the main trust message.
2. Header navigation and outbound links are present.
3. Public claims are visible in page content.
4. Live Verifier section is reachable and interactive.
5. Free Pilot form fields are visible.
6. Main sections remain usable on a mobile viewport.

Expected result:

- All smoke checks pass.

### Scenario 2. Live Verifier regression

File:

- `cypress/e2e/metagenesis-verifier-regression.cy.js`

Checks:

1. Default verifier state for `ML_BENCH-01` is rendered.
2. `ML_BENCH-01` returns `PASS` within tolerance.
3. `ML_BENCH-01` returns `FAIL` outside tolerance.
4. `MTR-1` returns `PASS` and `FAIL` at boundary values.
5. `DATA-PIPE-01` returns `PASS` when both conditions are checked and `FAIL` when unchecked.

Expected result:

- The verifier returns a visible result after clicking `VERIFY`.

## Run commands

- `npm run test:site`
- `npm run test:verifier`
- `npm test`

## Actual result

- `npm run test:site` passed
- `npm run test:verifier` failed

## Artifacts

- screenshots on failure are stored under `cypress/screenshots/`
