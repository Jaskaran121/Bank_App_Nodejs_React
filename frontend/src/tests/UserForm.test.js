import React from 'react';
import { shallow } from 'enzyme';
import { UserForm } from '../components/user-form';

describe('UserForm', () => {
    const defaultProps = {
        isFormValid: true,
        handleFormSubmit: jest.fn()
    }

    const renderComponent = (props) => shallow(<UserForm {...defaultProps} {...props} />);

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

    describe("Button component ", () => {
        it('should call handleFormSubmit prop on clicking button',() => {
            const component = renderComponent();
            component.find("#submit-button").simulate("click");
            expect(defaultProps.handleFormSubmit).toHaveBeenCalled();
        });

        it("should pass correct props to button component",() => {
            const component = renderComponent();
            const buttonComponent = component.find("#submit-button");
            expect(buttonComponent.props()).toEqual(expect.objectContaining({
                id: 'submit-button',
                variant: 'custom',
                children: 'Submit'
            }));
            expect(typeof buttonComponent.props()["onClick"]).toEqual("function");
        });
    });

    describe("FormField component",() => {
        it("should pass correct props for formfield component",() => {
            const component = renderComponent();
            const formFieldComponent = component.find("#form-email");
            expect(formFieldComponent.props()).toEqual(expect.objectContaining({
                id: 'form-email',
                isRequired: true,
                error: 'Invalid email',
                isInvalid: defaultProps.isFormValid,
            }));
        });

        it("should render correct number of children for formfield component",() => {
            const component = renderComponent();
            const formFieldComponent = component.find("#form-email");
            const formFieldChildren = formFieldComponent.props().children;
            // Since formFieldChildren is a object, it means it has only 1 child,for
            // multiple children type is array.
            expect(typeof formFieldChildren).toEqual("object");
        });

        describe("Input Component",() => {
            it("should render correct props for Input component",() => {
                const component = renderComponent();
                const inputComponent = component.find("#input-email");
                expect(inputComponent.props()).toEqual(expect.objectContaining({
                    id: 'input-email',
                    variant: 'flushed',
                    placeholder: 'Please enter your email',
                    value: '',
                }));
                expect(typeof inputComponent.props()["onChange"]).toEqual("function");
            });

            it("should reRender component when change event is triggered on input",() => {
                const component = renderComponent();
                const inputComponent = component.find("#input-email");
                // as default state of state email is undefined, to it set it as empty string,see code for details.
                expect(inputComponent.props()["value"]).toEqual("");
                
                // simulate change event,causing setEmail to call
                const email = "dummy_user@gmail.com"
                inputComponent.simulate("change",{target:{value:email}});
                const newInputComponent = component.find("#input-email");
                // This assertion confirms state update of email and setEmail is called.
                expect(newInputComponent.props()["value"]).toEqual(email);
            });
        });
    });
});