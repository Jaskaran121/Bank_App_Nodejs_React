import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from '../pages/HomePage';

describe('HomePage', () => {
    const defaultProps = {}

    const renderComponent = (props) => shallow(<HomePage {...defaultProps} {...props} />);

    describe("Basic Tests", () => {
        it('should render components', () => {
            const component = renderComponent();
            expect(component).toBeDefined();
        });

        // It is null since it is a functional component
        it('shallow wrapper instance should be null', () => {
            const wrapper = renderComponent();
            const instance = wrapper.instance();
            expect(instance).toEqual(null);
        });
    });

    describe("should render components correctly", () => {
        describe("Layout Component",() => {
            it('should render a layout component', () => {
                const component = renderComponent();
                const layoutComponent = component.props().children;
                expect(layoutComponent).toBeDefined();
                // Since layoutComponent is a functional component, we can expect its type.
                expect(typeof layoutComponent.type).toEqual("function");
            });

            it("should render two children for layout component",() => {
                const component = renderComponent();
                const layoutComponent = component.props().children;
                expect(layoutComponent.props.children.length).toEqual(2)
            });
        });

        describe("UserForm Components",() => {
            it("should render a userform component",() => {
                const component = renderComponent();
                const layoutComponent = component.props().children;
                const userFormComponent = layoutComponent.props.children[0];
                expect(userFormComponent).toBeDefined();
                expect(typeof userFormComponent.type).toEqual("function");
            });

            it("should pass correct number of props to userform component",() => {
                const component = renderComponent();
                const layoutComponent = component.props().children;
                const userFormComponent = layoutComponent.props.children[0];
                expect(Object.keys(userFormComponent.props).length).toEqual(3);
            });

            it("should pass correct props to userform component",() => {
                const component = renderComponent();
                const layoutComponent = component.props().children;
                const userFormComponent = layoutComponent.props.children[0];
                expect(userFormComponent.props).toEqual(expect.objectContaining({
                    isFormValid: false,
                }));
                expect(typeof userFormComponent.props["handleFormSubmit"]).toEqual("function");
                expect(typeof userFormComponent.props["setFormValidation"]).toEqual("function");
            });
        });
    });
});