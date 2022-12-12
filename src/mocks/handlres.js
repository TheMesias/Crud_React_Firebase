import {rest } from 'msw'; 
import {setupServer} from 'msw/node';

export const handlers = [
    rest.get('https://firebase/databases/{productos}/documents', (req, res, ctx) => {
        return res(
            ctx.json([
                {
                    "id": 'R7Fzkbm2fHe05Coct2YP', 
                    "descripcion": 'smartphone', 
                    "stock": 5
                }
            ])
        )
    })
]