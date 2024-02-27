import moxios from 'moxios';
import {testStore} from '../utils';
import {fetchPosts} from "../src/actions";

describe('fetchPosts action', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Store is updated correctly', () => {
        const expectedStore = [
            {
                title: 'Example title 1',
                body: 'Some Text',
            },
            {
                title: 'Example title 2',
                body: 'Some Text',
            },
            {
                title: 'Example title 3',
                body: 'Some Text',
            },
        ];

        const store = testStore();

        moxios.wait(() => {
            const request = moxios.reducers.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedStore,
            })
        });

        return store.dispatch(fetchPosts())
            .then(() => {
                const newState = store.getState();
                expect(newState.posts).toBe(expectedStore);
            })
            .catch(err => {

            });
    });
});
