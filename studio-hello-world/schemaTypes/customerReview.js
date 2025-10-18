import {defineField, defineType} from 'sanity'

export const customerReview = defineType({
  name: 'reviews',
  title: 'reviews',
  type: 'document',
  fields: [
    defineField({
      name: 'customerName',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'customerName'},
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'productImage',
      type: 'image',
    }),
    defineField({
      name: 'customerReview',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
