describe('Testing Post and Put on Typicode', () => {
    
    it('Send first POST', () => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts/',
          {
            userID: 1,
            title: 'API testing with cypress',
            body: 'First POST'
          }
        ).then((response) => {
          cy.log(JSON.stringify(response.body));
        })
    });
      
    it('check response on first POST', () => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts/',
          {
            userID: 1,
            title: 'API testing with cypress',
            body: null
          }
        )
        .then((response) => {
          const postBody = response.body
          cy.log(JSON.stringify(response.body));
          expect(response.status).to.eq(201);
          expect(postBody.title).to.be.a('string');
          expect(postBody).to.have.property('title', 'API testing with cypress');
          expect(postBody).to.have.property('body', null);
        })
    })

    it('check deep contain on POST', () => {
        const postData = {
          userID: 1,
          body: 'Send body in a constant',
          title: 'API testing with cypress',
        }
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts/', postData,
          ).then((response) => {
          const postBody = response.body
          expect(response.status).to.eq(201);
          expect(response.body).to.deep.eq(postData);
        })
      });

    it.only('check deep contain on Put', () => {
      const putData = {
        userID: 1,
        body: 'Update body',
        title: 'change my body',
        id: 2
      }
      const putDataInclude = {
        userID: 1,
        body: 'Update body',
        title: 'change my body'
      }
      cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/2', putData,)
      .then((response) => {
          const res =  response.body  
          expect(response.status).to.eq(200);
          expect(res).to.deep.eq(putData);
          expect(res).to.deep.include(putDataInclude);
      })
    });
});