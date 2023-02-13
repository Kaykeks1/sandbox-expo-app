import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const categories = () => {
  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 20
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    >
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
    </ScrollView>
  )
}

export default categories