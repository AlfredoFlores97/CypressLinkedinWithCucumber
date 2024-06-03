describe('Testing Get, Post and Put on restfulApi', () => {
  
    it('GET', () => {
        const expectedBody = {
            id: "1",
            name: "Google Pixel 6 Pro",
            data: {
                color: "Cloudy White",
                capacity: "128 GB"
            }
        };
        cy.request('GET', 'https://api.restful-api.dev/objects/1')
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.deep.eq(expectedBody);
        })
    });
      
    it('PUT', () => {
        const bodyCreate = {
            name: "Prueba",
            data: null
        };
        cy.request('POST', 'https://api.restful-api.dev/objects', bodyCreate)
        .then((response) => {
            const res = response.body
            const idCreate = response.body.id
            const bodyUpdate = {
                name: "Apple MacBook Pro 16",
                data: {
                    year: 2019,
                    price: 2049.99,
                    model: "Intel Core i9",
                    diskSize: "1 TB",
                    color: "silver"
                }
            }
            expect(response.status).to.eq(200);
            expect(res).to.deep.include(bodyCreate);
            expect(res.createdAt).to.be.a('string');
            expect(res.id).to.be.a('string');
            cy.request('PUT',  `https://api.restful-api.dev/objects/${idCreate}`, bodyUpdate)
            .then((response) => {
                const res = response.body
                expect(response.status).to.eq(200);
                expect(res).to.deep.include(bodyUpdate);
                expect(res.id).to.deep.eq(idCreate);
                expect(res.updatedAt).to.be.a('string');
            })
        })
    });

    let id

    it('POST', () => {
        const bodyCreate = {
            name: "Prueba",
            data: null
        };
        cy.request('POST', 'https://api.restful-api.dev/objects', bodyCreate)
        .then((response) => {
            const res = response.body
            id = res.id
            expect(response.status).to.eq(200);
            expect(res).to.deep.include(bodyCreate);
            cy.log(res.createdAt);
            cy.log(res.id);
        })
    });

    it('PATCH', () => {
        const bodyUpdate = {
            name: "Apple MacBook Pro 16",
            data: {
                year: 2019
            }
        }
        cy.request('PATCH',  `https://api.restful-api.dev/objects/${id}`, bodyUpdate)
        .then((response) => {
            const res = response.body
            expect(response.status).to.eq(200);
            expect(res).to.deep.include(bodyUpdate);
            expect(res.id).to.deep.eq(id);
            expect(res.updatedAt).to.be.a('string');
        })
    })

    it('GET new product created', () => {
        const expectedBody = {
            id: id,
            name: "Apple MacBook Pro 16",
            data: {
                year: 2019,
            }
        }
        cy.request('GET', `https://api.restful-api.dev/objects/${id}`)
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.deep.eq(expectedBody);
        })
    });
    
    it('DELETE new product created', () => {
        const expectedBody = {
            message: `Object with id = ${id} has been deleted.`
        }
        cy.request('DELETE', `https://api.restful-api.dev/objects/${id}`)
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.deep.eq(expectedBody);
        })
    });

}); 