import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAttr } from './../../../utils';

const setUp = (props = {}) => {
    return shallow(<Header {...props} />);
};

describe('Header Component', () => {
    let component;

    beforeEach(() => {
        component = setUp();
    });

    it('Should render without errors', () => {
        const wrapper = findByTestAttr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render a logo', () => {
        const logo = findByTestAttr(component, 'logoImage');
        expect(logo.length).toBe(1);
    });
});
