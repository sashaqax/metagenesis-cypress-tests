# Bug report

Date: 2026-03-29
Target: `https://metagenesis-core-site1.vercel.app`

## Test context

- `npm run test:site`
- `npm run test:verifier`

## Result summary

- Site usability smoke coverage: 6/6 passing
- Live verifier regression coverage: 1/5 passing

## Reproducible bugs

### 1. Live Verifier never renders a PASS/FAIL result

Severity: high

Affected scenarios:

- `ML_BENCH-01` within tolerance
- `ML_BENCH-01` outside tolerance
- `MTR-1` pass/fail boundaries
- `DATA-PIPE-01` checkbox gating

Steps:

1. Open the homepage.
2. Scroll to the Live Verifier.
3. Enter valid test values or toggle the DATA-PIPE checkboxes.
4. Click `VERIFY`.

Expected:

- The verifier should render a visible PASS or FAIL result in the result area.

Actual:

- The expected result anchor `#anchor-verify-pass` never appears.
- The UI shows a `VERIFYING...` state and the test run never observes a completed result.

Impact:

- The core product demo flow does not complete.
- A user cannot confirm whether the entered claim passed or failed.

Evidence:

- `cypress/screenshots/metagenesis-verifier-regression.cy.js/`

### 2. Page emits an uncaught JavaScript syntax error during visit

Severity: medium

Observed during Cypress runs:

- `SyntaxError: Unexpected token '/*'`

Impact:

- The tests currently suppress uncaught exceptions so that the rest of the page can still be exercised.
- This suggests a client-side script issue that may affect real users depending on runtime path and browser behavior.

Evidence:

- uncaught exception captured during Cypress page visit

## Related files

- `cypress/e2e/metagenesis-usability.cy.js`
- `cypress/e2e/metagenesis-verifier-regression.cy.js`
- `TEST_SCENARIO.md`
