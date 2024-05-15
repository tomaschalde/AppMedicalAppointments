import {Router} from "express";                            
const router = Router();

import { userRouter } from "./usersRouter";
import { appointmentsRouter } from "./appointmentsRouter";

router.use('/users',userRouter);
router.use('/appointments', appointmentsRouter);
router.use('/appointment',appointmentsRouter);

   

export default router;