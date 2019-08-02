import Vue from "vue";
import Router from "vue-router";
import Admin from "./views/Admin.vue";
import Delegate from "./views/Delegate.vue";
import WebLog from "./views/WebLog.vue";
import MainPage from "./views/MainPage.vue";
import UserPage from "./views/UserPage.vue";
import RepoPage from "./views/RepoPage.vue";
import WritePost from "./views/WritePost.vue";
import PostPage from "./views/PostPage.vue";
import PostDetail from "./views/PostDetail.vue";
import RepoDetail from "./views/RepoDetail.vue";
// import HomePage from "./views/HomePage.vue";
// import PortfolioPage from "./views/PortfolioPage.vue";
// import PortfolioWrite from "./views/PortfolioWrite.vue";
// import DetailPortfolio from "./views/DetailPortfolio.vue";


Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [

        {
            path: "/",
            name: "MainPage",
            component: MainPage
        },
        {
            path: "/users/:id/posts",
            name: "Posts",
            component: PostPage
        },
        {
            path: "/users/:id/posts/:post_id",
            name: "PostDetail",
            component: PostDetail
        },
        {
            path: "/users/:id/writepost",
            name: "WritePost",
            component: WritePost
        },
        {
            path: "/users/:id/repos",
            name: "Repositories",
            component: RepoPage
        },
        {
            path: "/users/:id/repos/:repo_id",
            name: "RepoDetail",
            component: RepoDetail
        },
        {
            path: "/users/:id",
            name: "UserPage",
            component: UserPage
        },
        {
            path: "/admin",
            name: "admin",
            component: Admin
        },
        {
            path: "/delegate",
            name: "delegate",
            component: Delegate
        },
        {
            path: "/WebLog",
            name: "weblog",
            component: WebLog
        },
    ]
});
