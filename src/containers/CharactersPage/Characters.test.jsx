import React from 'react'
import {render, screen} from '@testing-library/react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {MemoryRouter} from 'react-router'
import Characters from './Characters'

const server = setupServer(
    rest.get('https://rickandmortyapi.com/character', (req,res,ctx) => {
        // if (req.params.id)
        return res(ctx.json(/* */));
    })
);

describe('Tests characters list page', () => {
    beforeAll(() => server.listen());
    afterAll(()=> server.close());
    it('renders a list of characters from chosen show', async() => {
        render(
            <MemoryRouter>
                <Characters />
            </MemoryRouter>
        );
        screen.getByText('loading..');
        const ul = await screen.findByRole('list', {name: 'characters'});
    })
})
