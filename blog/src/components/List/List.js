import React from "react"
import propTypes from 'prop-types'
import { BaseContainer } from '../BaseContainer'

export const List = ({ children, ...rest }) => (
    <BaseContainer
        flex
        flexDirection='column'
        mx='auto'
        as='ul'
        {...rest}
    >
        {children}
    </BaseContainer>
)

List.propTypes = {
    children: propTypes.node.isRequired
}