const projectList = require('./data/list_projects.json').projects
require('dotenv').config();
require('./utils/db.js')();
const Project = require('./models/project_schema');


Project.insertMany(projectList)
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
});

