import { StatusCodes } from 'http-status-codes';

import { testServer } from '../jest.setup';


describe('Cidades - GetAll', () => {

  it('Buscar todos os registros', async () => {

    // Criando um registro, pois para pegar todos os registro precisa havem um pelo menos
    const res1 = await testServer
      .post('/cidades')
      .send({ nome: 'Caxias do sul' });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    // Usando o método get para buscar todos os dados 
    const resBuscada = await testServer
      .get('/cidades')
      .send();

    expect(Number(resBuscada.header['x-total-count'])).toBeGreaterThan(0);
    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body.length).toBeGreaterThan(0);
  });
});