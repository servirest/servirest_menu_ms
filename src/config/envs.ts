import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT              : number;
  POSTGRES_HOST     : string;
  POSTGRES_PORT     : number;
  POSTGRES_USERNAME : string;
  POSTGRES_PASSWORD : string;
  POSTGRES_DATABASE : string;
  POSTGRES_SSL      : string;
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  postgres: {
    host     : envVars.POSTGRES_HOST,
    port     : envVars.POSTGRES_PORT,
    username : envVars.POSTGRES_USERNAME,
    password : envVars.POSTGRES_PASSWORD,
    database : envVars.POSTGRES_DATABASE,
    ssl      : envVars.POSTGRES_SSL,
  },
};
