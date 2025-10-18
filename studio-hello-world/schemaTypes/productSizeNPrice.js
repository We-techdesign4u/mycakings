import {defineField, defineType} from 'sanity'

export const productSizeNPrice = defineType({
  name: 'productSizeNPrice',
  title: 'productSizeNPrice',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'size',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ingredients',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'Price',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
