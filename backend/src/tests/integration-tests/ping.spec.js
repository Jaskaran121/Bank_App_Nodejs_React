import supertest from 'supertest';
import server from '../../server';

describe('Routes/ping',() => {
    const request = supertest.agent(server);
    afterAll(async () => { 
        await server.close(); 
    });

    describe('/api/ping',()=>{
        it('Should return correct object on calling endpoint', async (done) => {
            const expectedResponse = {message: "Success"};
            const res = await request.get('/api/test');
            expect(res.status).toBe(200);
            expect(res.body).toEqual(expectedResponse);
            done();
        })
    })
})