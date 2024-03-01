describe('HW02_modul2_User can visit GoIT page', () => {
  beforeEach('go to page', () => {
    cy.visit('https://www.edu.goit.global/account/login');
});

  it('successfully login to the GoIT page', () => {
    cy.logInUser('user888@gmail.com', '1234567890');
    cy.get('[id="go-to-the-course-homepage-widget"]').scrollIntoView().should("be.visible");
  });
});