import {defineType} from 'sanity'

export default defineType({
  name: "featured",
  title: "Featured Menu categories",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Featured Category name",
      validation: (Rule: any) => Rule.required()
    },
    {
      name: "short_description",
      type: "string",
      title: "Short Description",
      validation: (Rule: any) => Rule.max(200)
    },
    {
      name: "restaurants",
      type: "array",
      title: "Restaurant",
      of: [{ type: "reference", to: [{ type: "restaurant" }] }]
    }
  ]
})