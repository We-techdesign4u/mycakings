import {defineField, defineType} from 'sanity'

export const products = defineType({
  name: 'products',
  title: 'products',
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
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'prices',
      type: 'array',
      title: 'prices',
      of: [{type: 'reference', to: [{type: 'productSizeNPrice'}]}],
      validation: (rule) => rule.required(),
    }),
  ],
})
