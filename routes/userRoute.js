import express from "express";
import { allUsers, deleteUser, findUser, followAndUnfollowUser, forgotPassword, login, logout, myProfile, register, resetPassword, updateAvatar, updatePassword, updateProfile, updateRole, verifyEmail } from "../controller/userController.js";
import { isAdmin, isAuthenticatedUser } from "../middelware/auth.js";
import singleUpload from "../middelware/multer.js";


const router = express.Router();

router.route("/register").post(singleUpload,register)

router.route("/login").post(login)

router.route("/logout").get(logout)

router.route("/password/forgot").post(forgotPassword)

router.route("/password/reset/:token").put(resetPassword)

router.route("/me").get(isAuthenticatedUser,myProfile)

router.route("/me/update").put(isAuthenticatedUser, updateProfile)

router.route("/update/avatar").put(isAuthenticatedUser, singleUpload, updateAvatar)

router.route("/password/update").put(isAuthenticatedUser, updatePassword)

router.route("/verify/:token").get(verifyEmail)

router.route("/follow/:id").get(isAuthenticatedUser, followAndUnfollowUser)

router.route("/users").get(isAuthenticatedUser,isAdmin,allUsers)

router.route("/user/:userName").get(isAuthenticatedUser, findUser)

router.route("/user/:id").delete(isAuthenticatedUser, isAdmin, deleteUser).put(isAuthenticatedUser, isAdmin, updateRole)


export default router