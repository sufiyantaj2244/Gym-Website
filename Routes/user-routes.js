import express from 'express';
import { addUser, loginUser } from '../Controller/user-controller.js';

const router = express.Router();

router.post("/add", addUser);
router.post("/login", loginUser);

export default router
