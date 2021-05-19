import React from 'react'
import {render, screen} from '@testing-library/react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {MemoryRouter} from 'react-router'
import ApiPage from './HomePage'

const server = setupServer(
    rest.get('https://rickandmortyapi.com/character:id', (req,res,ctx) => {
        if (req.params.id)
        return res(ctx.json(/* */));
    })
);
describe('Tests the ApiPage', () => {
    beforeAll(() => server.listen());
    afterAll(()=> server.close());
    it('renders a list of api\'s to call from', async() => {
        render(
            <MemoryRouter>
                <ApiPage />
            </MemoryRouter>);
            screen.getByText('Choose your favorite show');
            const ul = await screen.findByRole('list', {name: 'api-choices'});
        
    })
})
