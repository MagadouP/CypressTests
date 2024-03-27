describe('httpbin tests', () => {
    
    it('GET method, response code should be 200', () => {
        cy.request({
          method: 'GET',
          url: 'https://httpbin.org/get'
        }).its('status').should('eq', 200)
      });

      it('POST method', () => {
        cy.request({
          method: 'POST',
          url: 'https://httpbin.org/post',
          body: {
            name: 'test'
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.json).to.deep.eq({
            name: 'test'
          });
        });
      });

      it('DELETE added name', () => {
        cy.request({
          method: 'POST',
          url: 'https://httpbin.org/post',
          body: {
            name: "del"
          }
        }).then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.json).to.deep.eq({
            name: "del"
          })
        }).then((response) => {
          cy.request({
            method: 'DELETE',
            url: 'https://httpbin.org/delete'
          }).then((response) =>
            expect(response.status).to.eq(200))
        }).then((response) => {
          cy.request({
            method: 'GET',
            url: 'https://httpbin.org/get'
          }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.have.property('name', "usuwanie")
          });
        });
      });

    it('should user agent', () => {
    cy.request('https://httpbin.org/user-agent').then(response => {
        const status = response.status;
        expect(response.body).to.have.property('user-agent');
    });
});
});

it('should custom header', () => {
    cy.request({
      method: 'GET',
      url: 'https://httpbin.org/headers',
      headers: {
        'Custom-Header': 'Header-Value'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.headers['Custom-Header']).to.eq('Header-Value')
    });
  });


  it('header content', () => {
    cy.request({
      method: 'GET',
      url: 'https://httpbin.org/headers'
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.headers).to.have.property('content-type', 'application/json')
    });
  });

  it('test duration', () => {
    cy.request({
      method: 'GET',
      url: 'https://httpbin.org/delay/1'
    }).then(response => {
      expect(response.status).to.be.equal(200);
      expect(response.duration).to.be.lessThan(5000);
    });
  });


