import React from "react"
import propTypes from 'prop-types'
import { BaseContainer } from '../BaseContainer'

export const ListItem = ({ children, ...rest }) => (
    <BaseContainer as='li' {...rest}>
        {children}
    </BaseContainer>
)

ListItem.propTypes = {
    children: propTypes.node.isRequired
}