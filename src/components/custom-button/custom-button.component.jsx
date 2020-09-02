import React from 'react'

import { CustomButtons } from './custom-button.styles'

const CustomButton = ({ children, ...Props }) => {
    return (
        <CustomButtons {...Props}>
            {children}
        </CustomButtons>
    )
}

export default CustomButton
