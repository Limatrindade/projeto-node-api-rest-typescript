import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { validation } from '../../shared/middlewares';


interface IParamProps {
  id?: number;
}
interface IBodyProps {
  nome: string;
}
export const updateByIdValidation = validation((getSchema: any) => ({
  body: getSchema(yup.object().shape({
    nome: yup.string().required().min(3),
  }).defined()),
  params: getSchema(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  }).defined()),
}));

export const updateById = async (req: Request<IParamProps, {}, IBodyProps>, res: Response) => {

  if (Number(req.params.id) === 99999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    errors: {
      default: 'Registro nãi encontrado'
    }
  });

  return res.status(StatusCodes.NO_CONTENT).send();
};