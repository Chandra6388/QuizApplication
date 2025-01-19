
module.exports = function (app) {
    // Auth Route
    app.use(require("./Auth/authRoutes"));
    app.use(require("./Admin/questionRoutes"));
};