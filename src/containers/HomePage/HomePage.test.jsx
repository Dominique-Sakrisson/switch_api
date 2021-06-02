import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {MemoryRouter} from 'react-router'
import App from '../../components/app/App'
import ApiPage from './HomePage.jsx'
import Header from '../../components/header/Header'
import ThemeProvider from '../../components/state/Themprovider'

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
                <ThemeProvider >
                    <App >
                       
                    </App>
                </ThemeProvider>
            </MemoryRouter>);
            const checkbox = await screen.findByRole('checkbox', {name: 'bg-change'});
           
            expect(checkbox.checked).toBeFalsy();
            fireEvent.click(checkbox);
            expect(checkbox.checked).toBeTruthy();
            fireEvent.click(checkbox);
            expect(checkbox.checked).toBeFalsy();


            screen.getByText('Choose your favorite show');
            const ul = await screen.findByRole('list', {name: 'api-choices'});
            expect(ul).not.toBeEmptyDOMElement();
            // expect(ul).toMatchSnapshot();
        
    })
})
