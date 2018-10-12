const expect = require('chai').expect;
const authController = require('../../controllers/auth');

describe('Auth Controller', () => {
    it('should export a function named setupGoogleAuth', function(){
        expect(typeof(authController.setupGoogleAuth), 'No function named setupGoogleAuth').to.equals('function');
    });
});
