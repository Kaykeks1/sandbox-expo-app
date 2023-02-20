import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import CategoryCard from './CategoryCard'
import client, { urlFor } from '../sanity'

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    client.fetch(`*[_type == "category"]
    `).then(data => {
      setCategories(data)
    }).catch(e => console.log({e}))
  }, [])
  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 20
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    >
      {categories?.map(category => (
        <CategoryCard key={category._id} imgUrl={urlFor(category.image).width(200).url()} title={category.name} />
      ))}
        {/* <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" /> */}
    </ScrollView>
  )
}

export default Categories