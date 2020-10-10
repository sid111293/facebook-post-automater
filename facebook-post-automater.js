const helpers = require("./helpers");

const getFacebookPage = async (emailId, pwd, chromePath, headless = false, delay = 1) => {
    const page = await helpers.createNewpage(headless, chromePath);
    return helpers.loginFaceBook(page, emailId, pwd, delay);
}

const postOnGroup = helpers.processPost;

module.exports = {
    getFacebookPage,
    postOnGroup
};

