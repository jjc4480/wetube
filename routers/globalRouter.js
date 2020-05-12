import express from "express";
import passport from "passport";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import {
  getJoin,
  postJoin,
  logout,
  getLogin,
  postLogin,
  githubLogin,
  postGithubLogin,
  getMe,
  // facebookLogin,
  // facebookLoginCallback,
  // postFacebookLogin,
  kakaoLogin,
  postKakaoLogin,
  kakaoLoginCallback,
} from "../controllers/userController";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

//get과 post 구분하여 사용

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.github, githubLogin);
globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: routes.login }),
  postGithubLogin
);

// globalRouter.get(routes.facebook, facebookLogin);
// globalRouter.get(
//   routes.facebookCallback,
//   passport.authenticate("facebook", { failureRedirect: routes.login }),
//   postFacebookLogin
// );

globalRouter.get(routes.kakao, kakaoLogin);
globalRouter.get(
  routes.kakaoCallback,
  passport.authenticate("kakao", { failureRedirect: routes.login }),
  postKakaoLogin
);

globalRouter.get(routes.me, getMe);

export default globalRouter;
