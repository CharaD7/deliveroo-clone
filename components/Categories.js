import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoriesCard from './CategoriesCard'

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal : 15,
        paddingTop : 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoriesCard imgUrl="https://cdn.pixabay.com/photo/2016/03/05/19/42/beef-1238480_960_720.jpg" title="Beef" />
      <CategoriesCard imgUrl="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_960_720.jpg" title="Cabbage" />
      <CategoriesCard imgUrl="https://cdn.pixabay.com/photo/2014/10/22/18/47/tomato-498721_960_720.jpg" title="Tomato" />
      <CategoriesCard imgUrl="https://cdn.pixabay.com/photo/2015/05/28/08/15/bitter-melon-787674_960_720.jpg" title="Bitter Melon" />
      <CategoriesCard imgUrl="https://cdn.pixabay.com/photo/2018/01/25/08/14/tangerines-3105628_960_720.jpg" title="Tangerine" />
      <CategoriesCard imgUrl="https://cdn.pixabay.com/photo/2017/07/31/04/11/tomato-2556426_960_720.jpg" title="Tomato" />
      <CategoriesCard imgUrl="https://cdn.pixabay.com/photo/2016/04/21/11/32/groceries-1343141_960_720.jpg" title="Soy Food" />
    </ScrollView>
  )
}

export default Categories
