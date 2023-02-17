import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of dish",
      validation: (Rule: any) => Rule.required()
    },
    {
      name: "short_description",
      type: "string",
      title: "Short descriotion",
      validation: (Rule: any) => Rule.required()
    },
    {
      name: "price",
      type: "number",
      title: "Price of dish in GBP",
    },
    {
      name: "image",
      type: "image",
      title: "Image of the dish"
    }
  ],
})
