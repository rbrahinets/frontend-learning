import { renderHook, act } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { useAPI } from './useAPI';

const server = setupServer(
    rest.get('/api', (req, res, ctx) => {
        return res(ctx.json({ name: 'Rostik' }));
    })
);

beforeAll(() => server.listen());
beforeEach(() => server.resetHandlers());
afterAll(() => server.close());

test('gets the data', async () => {
    const { result /*, waitForNextUpdate*/ } = renderHook(() => useAPI());

    // act(() => {});
    // await waitForNextUpdate();

    expect(result.current).toBe({ name: 'Rostik' });
});
