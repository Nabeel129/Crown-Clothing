import { Fragment } from 'react'
import { Group, FormInputLable, Input } from './form-input.styles.js'

const FormInput = ({ label, ...otherProps }) => {
    return (
        <Fragment>
            <Group>
                <Input{...otherProps} />
                {label && (
                    <FormInputLable shrink={otherProps.value.length}>{label}</FormInputLable>
                )}
            </Group>
        </Fragment>
    )
}

export default FormInput;