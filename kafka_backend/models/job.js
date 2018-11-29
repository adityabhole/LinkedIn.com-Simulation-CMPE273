var mongoose = require('mongoose');

var Jobs = mongoose.model('Jobs', {
    posted_by: String,
    title: String,
    company: String,
    job_description: String,
    industry: String,
    employment_type: String,
    location: String,
    job_function: String,
    company_logo: String,
    posted_date: Date,
    expiry_date: Date,
    no_of_views: Number,
    no_of_clicks: Number,
    applications: [{
        applicant_id: String,
        first_name: String,
        last_name: String,
        address: String,
        how_did_they_hear_about_us: String,
        diversity_question: String,
        sponsorship_question: String,
        disability_question: String,
        resume: {
            type: String,
            data: Buffer
        },
        cover_letter: {
            type: String,
            data: Buffer
        }
    }]
});

module.exports = { Jobs };