var { setDefaultTimeout } = require('cucumber');

setDefaultTimeout(60 * 1000);     //This is 6 seconds wait and if there is no response from the browser then the cucumber test will fail.
