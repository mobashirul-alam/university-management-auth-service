import express from 'express';
import { AcademicSemesterValidation } from './academicSemester.validation';
import validateRequest from '../../middlewares/validateRequest';
const router = express.Router();

router.post(
  '/create-academicSemester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  //   UserController.createUser,
);

export const AcademicSemesterRoutes = router;
