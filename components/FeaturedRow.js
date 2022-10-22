import { View, Text } from 'react-native'
import React from 'react'

const FeaturedRow = ({ title, description, featuredCategory }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{featuredCategory}</Text>
    </View>
  )
}

export default FeaturedRow
