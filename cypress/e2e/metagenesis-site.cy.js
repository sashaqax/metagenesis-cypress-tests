describe('MetaGenesis Core Site', () => {

  beforeEach(() => {
    cy.visit('https://metagenesis-core-site1.vercel.app/')
  })

  // Навігація
  it('should load homepage with correct title', () => {
    cy.title().should('include', 'MetaGenesis')
  })

  it('should display main headline', () => {
    cy.contains('PROOF').should('be.visible')
    cy.contains('NOT').should('be.visible')
    cy.contains('TRUST').should('be.visible')
  })

  it('should display audit status as PASS', () => {
    cy.contains('AUDIT: PASS').should('be.visible')
  })

  it('should display correct stats', () => {
    cy.contains('8 active claims').should('exist')
    cy.contains('118').should('exist')
  })

  // Навігаційні посилання
  it('should have GitHub link', () => {
    cy.get('a[href*="github.com"]').should('exist')
  })

  it('should have Protocol link', () => {
    cy.contains('Protocol').should('be.visible')
  })

  // Live верифікатор
  it('should display live verifier section', () => {
    cy.contains('Live Verifier').should('exist')
    cy.contains('Verify a claim').should('exist')
  })

  it('should have claim selector in verifier', () => {
    cy.contains('ML_BENCH-01').should('exist')
    cy.contains('MTR-1').should('exist')
    cy.contains('DATA-PIPE-01').should('exist')
  })

  // Free Pilot форма
  it('should display Free Pilot form', () => {
    cy.contains('Free Pilot').should('be.visible')
    cy.get('input[type="text"], input[name="name"]').should('exist')
    cy.get('input[type="email"], input[name="email"]').should('exist')
  })

  it('should display pricing section', () => {
    cy.contains('$299').should('be.visible')
    cy.contains('Free').should('be.visible')
  })

  // Claims секція
  it('should display all 8 claims', () => {
    cy.contains('MTR-1').should('exist')
    cy.contains('MTR-2').should('exist')
    cy.contains('MTR-3').should('exist')
    cy.contains('SYSID-01').should('exist')
    cy.contains('DATA-PIPE-01').should('exist')
    cy.contains('DRIFT-01').should('exist')
    cy.contains('ML_BENCH-01').should('exist')
    cy.contains('DT-FEM-01').should('exist')
  })

  // Buy button
  it('should have Buy Bundle button with Stripe link', () => {
    cy.get('a[href*="stripe.com"]').should('exist')
  })

  // Footer
  it('should display patent info', () => {
    cy.contains('Patent Pending').should('exist')
    cy.contains('63/996,819').should('exist')
  })

})