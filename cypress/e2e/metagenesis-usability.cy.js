describe('MetaGenesis marketing site usability', () => {
  const claimIds = [
    'MTR-1',
    'MTR-2',
    'MTR-3',
    'SYSID-01',
    'DATA-PIPE-01',
    'DRIFT-01',
    'ML_BENCH-01',
    'DT-FEM-01',
  ];

  beforeEach(() => {
    cy.on('uncaught:exception', () => false);
    cy.visit('/');
  });

  it('loads the homepage and exposes core trust signals', () => {
    cy.title().should('include', 'MetaGenesis');
    cy.contains('PROOF').should('be.visible');
    cy.contains('NOT').should('be.visible');
    cy.contains('TRUST').should('be.visible');
    cy.contains('AUDIT: PASS').should('be.visible');
    cy.contains(/\d+\s+active claims/i).should('be.visible');
    cy.get('body').should('contain.text', 'tests');
    cy.get('body').should('contain.text', 'patent pending');
  });

  it('renders the primary navigation and outbound CTAs', () => {
    cy.contains('nav', 'Protocol').should('be.visible');
    cy.contains('a', 'GITHUB').should('be.visible');
    cy.get('a[href*="github.com"]')
      .should('have.length.at.least', 1)
      .first()
      .should('have.attr', 'href')
      .and('include', 'github.com');
    cy.get('body').should('contain.text', 'SITE');
    cy.get('body').should('contain.text', 'MAP');
  });

  it('shows all public claims in the catalog', () => {
    claimIds.forEach((claimId) => {
      cy.get('body').should('contain.text', claimId);
    });
  });

  it('exposes the live verifier with actionable controls', () => {
    cy.get('#verifier').scrollIntoView().should('be.visible');
    cy.contains('body', 'Live Verifier');
    cy.contains('body', 'Verify a claim');
    cy.get('.vrf-claim-btn:visible').should('have.length.at.least', 3);
    cy.get('#vrf-run').should('be.visible').and('not.be.disabled');
  });

  it('shows the pilot form with visible contact fields', () => {
    cy.get('#pf-name').scrollIntoView().should('be.visible');
    cy.get('#pf-email').should('be.visible');
    cy.contains('body', 'Free Pilot');
  });

  it('keeps the key sections usable on a mobile viewport', () => {
    cy.viewport('iphone-x');
    cy.reload();

    cy.contains('PROOF').should('be.visible');
    cy.get('#verifier').scrollIntoView().should('be.visible');
    cy.get('#pf-name').scrollIntoView().should('be.visible');
  });
});
