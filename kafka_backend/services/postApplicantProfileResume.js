var { Users } = require('../models/user');
const { prepareInternalServerError, prepareSuccess } = require('./responses')

async function handle_request(msg, callback) {
    console.log("Inside kafka post Applicant profile resume backend");
    console.log("In handle request:" + JSON.stringify(msg));

    console.log(msg);
    let resp = {};
    
    try {
        let profile = await Users.findOneAndUpdate(
            { email: msg.email },
            {
                $set: {
                    resume : msg.resume
                }
            },
            {new: true}
        );
        console.log(profile);
        resp = prepareSuccess({ "profile": profile });
    }
    catch (error) {
        console.log("Something went wrong while updating profile photo! : ", error);
        //don't let time out occur, send internal server error
        resp = prepareInternalServerError();
    }
    callback(null, resp);
}

module.exports = {
    handle_request: handle_request
}