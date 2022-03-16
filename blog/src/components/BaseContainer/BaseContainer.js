import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'rebass'

export const BaseContainer = () => {
  return (
    <div>BaseContainer</div>
  )
}

BaseContainer.propTypes = {
    flex: PropTypes.bool,
    as: PropTypes.string,
    children: PropTypes.node.isRequired
}