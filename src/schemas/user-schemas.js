import Joi from 'joi';
import {
  emailDateRegexp,
  nameDateRegexp,
  phoneDateRegexp,
} from '../constants/contacts-constants.js';
import Joi from 'joi';
import { emailRegexp } from '../constants/user-constants.js';

const userRegistrationSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const userLogInSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

export default { userRegistrationSchema, userLogInSchema };
