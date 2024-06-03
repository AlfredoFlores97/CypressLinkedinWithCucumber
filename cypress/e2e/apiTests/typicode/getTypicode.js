it.only('sadasdas', () => {
    const pokemonNameId = 'pikachu';

    cy.request(`https://pokeapi.co/api/v2/pokemon/${pokemonNameId}`).should((response) => {
        expect(response.status).to.eq(200);
    })
})