import {defineField, defineType} from 'sanity'

export const cakeNPrice = defineType({
  name: 'cakeNprice',
  title: 'cakeNprice',
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
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
})
