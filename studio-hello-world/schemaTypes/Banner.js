import {defineField, defineType} from 'sanity'

export const banner = defineType({
  name: 'banner',
  title: 'banner',
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
      name: 'secondaryHeadline',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'primaryHeadline1',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'primaryHeadline2',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'supportingSubtext',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
})
