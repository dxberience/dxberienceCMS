import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'categoryPage',
  type: 'document',
  title: 'Category Page',
  fields: [
    defineField({
      name: 'headerImg',
      type: 'reference',
      title: 'Header Image',
      to: [{type: 'image-type'}],
    }),
    defineField({
      name: 'headerBgImg',
      type: 'reference',
      title: 'Header Background Image',
      to: [{type: 'image'}],
    }),
    defineField({name: 'headerTitle', type: 'string', title: 'Header Title'}),
    defineField({name: 'headerCaption', type: 'string', title: 'Header Caption'}),
    defineField({name: 'sectionATitle', type: 'string', title: 'Section A Title'}),
    defineField({name: 'sectionADescription', type: 'text', title: 'Section A Description'}),
    defineField({
      name: 'sectionAImage',
      type: 'reference',
      title: 'Section A Image',
      to: [{type: 'image'}],
    }),
    defineField({name: 'sectionBHeader', type: 'string', title: 'Section B Header'}),
    defineField({
      name: 'sectionBSubCategories',
      type: 'array',
      title: 'Section B Sub Categories',
      of: [{type: 'reference', to: [{type: 'category'}]}],
    }),
    defineField({name: 'sectionCHeader', type: 'string', title: 'Section C Header'}),
    defineField({name: 'sectionCDescription', type: 'text', title: 'Section C Description'}),
    defineField({
      name: 'sectionCVideo',
      type: 'reference',
      title: 'Section C Video',
      to: [{type: 'image'}],
    }),
    defineField({
      name: 'sectionDReviews',
      type: 'array',
      title: 'Section D Reviews',
      of: [{type: 'reference', to: [{type: 'review'}]}],
    }),
    defineField({
      name: 'sectionDBgImg',
      type: 'reference',
      title: 'Section D Background Image',
      to: [{type: 'image'}],
    }),
  ],
})
