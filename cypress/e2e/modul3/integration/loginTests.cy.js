import LoginPage from '../../../pages/LoginPage';
import HomePage from '../../../pages/HomePage';

describe('HW03_modul3_User can visit GoIT page', () => {
    beforeEach('go to page', () => {
        LoginPage.visit();
    });

    it('successfully login to the GoIT page as user', () => {
        LoginPage.logInUser('user888@gmail.com', '1234567890');
        HomePage.goToCourseHomepageWidget();
        HomePage.proceedToNext();
        HomePage.logOut();
    });

    it('successfully login to the GoIT page as admin', () => {
        LoginPage.logInUser('testowyqa@qa.team', 'QA!automation-1');
        HomePage.goToCourseHomepage();
        HomePage.proceedToNext();
        HomePage.logOut();
});
})
