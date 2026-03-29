describe('MetaGenesis live verifier regression coverage', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', () => false);
    cy.visit('/');
    cy.get('#verifier').scrollIntoView().should('be.visible');
  });

  it('shows ML_BENCH-01 as the default verifier scenario', () => {
    cy.get('#verifier').should('be.visible');
    cy.get('#ml-claimed').should('be.visible');
    cy.get('#ml-actual').should('be.visible');
    cy.get('#vrf-run').should('be.visible');
  });

  it('returns PASS when ML_BENCH-01 stays within tolerance', () => {
    cy.get('.vrf-claim-btn.active').click();
    cy.get('#ml-claimed').clear().type('0.90');
    cy.get('#ml-actual').clear().type('0.91');
    cy.get('#vrf-run').click();
    cy.get('#anchor-verify-pass').should('contain', 'PASS');
  });

  it('returns FAIL when ML_BENCH-01 exceeds tolerance', () => {
    cy.get('.vrf-claim-btn.active').click();
    cy.get('#ml-claimed').clear().type('0.90');
    cy.get('#ml-actual').clear().type('0.50');
    cy.get('#vrf-run').click();
    cy.get('#anchor-verify-pass').should('contain', 'FAIL');
  });

  it('switches to MTR-1 and evaluates pass/fail boundaries', () => {
    cy.get('.vrf-claim-btn').contains('MTR-1').click();
    cy.get('#mtr-claimed').should('be.visible').clear().type('70');
    cy.get('#mtr-actual').should('be.visible').clear().type('70.5');
    cy.get('#vrf-run').click();
    cy.get('#anchor-verify-pass').should('contain', 'PASS');

    cy.get('#mtr-actual').clear().type('80');
    cy.get('#vrf-run').click();
    cy.get('#anchor-verify-pass').should('contain', 'FAIL');
  });

  it('switches to DATA-PIPE-01 and validates checkbox gating', () => {
    cy.get('.vrf-claim-btn').contains('DATA-PIPE-01').click();

    cy.get('#data-schema').check();
    cy.get('#data-range').check();
    cy.get('#vrf-run').click();
    cy.get('#anchor-verify-pass').should('contain', 'PASS');

    cy.get('#data-schema').uncheck();
    cy.get('#data-range').uncheck();
    cy.get('#vrf-run').click();
    cy.get('#anchor-verify-pass').should('contain', 'FAIL');
  });
});
