import { defineField, defineType } from "sanity";


export default defineType({
    name: "legal",
    type: "document",
    title: "Legal",
    fields: [
        defineField({
            name: "name",
            type: "string",
            title: "Name",
            description: "Version of the lagal document you want to render on the Website"
        }),
        defineField({
            name: "terms_condition",
            type: "array",
            title: "Dxberience Terms and Conditions",
            of: [{type: "block"}],
            description: "Terms and Conditions of Dxberience, this will show on the legal page.",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "privacy_policy",
            type: "array",
            title: "Dxberience Privacy Policy",
            of: [{type: "block"}],
            description: "Privacy Policy of Dxberience, this will show on the legal page."
        })
    ]
})