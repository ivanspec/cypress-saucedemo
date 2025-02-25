/* eslint-disable no-unused-vars */
export {};
declare global {
  namespace Cypress {
    interface Chainable {
      login(username: string, password: string): Chainable<void>;
    }
  }
}

// @ts-ignore
declare module 'cypress-testrail';
