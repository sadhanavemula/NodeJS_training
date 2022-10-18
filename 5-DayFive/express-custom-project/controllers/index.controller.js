
module.exports.homePage = (req, res) => {
    res.render('../views/index');
}

module.exports.getMessage = (req, res) => {
    res.render('../views/message', { message: "Hello Folks!!" });
}

module.exports.getProjects = (req, res) => {
    var projectList = [
        { projectId: 101, projectName: 'Admin Portal' },
        { projectId: 102, projectName: 'E-Commerce' },
        { projectId: 103, projectName: 'ERP Commerce' },
        { projectId: 104, projectName: 'User Dashboard' },
    ]
    res.render('../views/projects', { projects: projectList })
}