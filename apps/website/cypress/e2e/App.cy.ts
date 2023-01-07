/// <reference types="cypress" />

describe('Verification Page Test', () => {
	beforeEach(() => {
		cy.visit('/verification');
	});

	it('Should be title page equalt to `Verification Page`', () => {
		cy.get('.title').contains('Verification Page');
	});

	it('Should be input value is equal to empty, when user type non-numeric characters', () => {
		cy.get('.verification-input').type('abcd').should('have.value', '');
	});

	it('Should be input value is equal to `12345`, when user type `1234` characters', () => {
		cy.get('.verification-input').type('12345').should('have.value', '12345');
	});

	it('Should be input value is equal to empty`, when user click to the `CLEAR` button', () => {
		cy.get('.btn-clear').click().should('have.value', '');
	});

	it('Should be navigations to `home page`, when user click to the `Go Back To Home` button', () => {
		cy.get('.btn-back').click();
		cy.get('.title').contains('Home Page');
	});
});
