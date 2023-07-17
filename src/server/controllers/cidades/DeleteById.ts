import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { validation } from '../../shared/middlewares';


interface IParamProps {
  id?: number;
}
export const deleteByIdValidation = validation((getSchema: any ) => ({
  params: getSchema(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  }).defined()),
}));

export const deleteById = async (req: Request<IParamProps>, res: Response) => {
  console.log(req.params);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!');
};