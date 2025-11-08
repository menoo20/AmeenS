# Blog Image Assets

The blog articles reference the following images. You can replace these with your actual images:

## Required Images

1. **`/assets/photos/work/teaching-coding.webp`**
   - Used in: "From Classroom to Code" article
   - Suggested content: Image showing teaching and coding combined
   - Dimensions: 1200x630px (optimal for social sharing)

2. **`/assets/projects/StudentLMS1.webp`**
   - Used in: "Building a Student LMS" article
   - Already exists in your project ✅

3. **`/assets/photos/work/online-teaching.webp`**
   - Used in: "ESL Teaching Strategies" article
   - Suggested content: Online classroom, teacher with students on screen
   - Dimensions: 1200x630px

## Placeholder Solution

If you don't have these images yet, you can:

1. **Use existing images temporarily**: Point to any existing image in your `/public/assets/` folder
2. **Generate placeholder images**: Use services like https://placehold.co/1200x630
3. **Update article frontmatter**: Edit the `image:` field in each `.mdx` file

## Example: Using Placeholder

Edit the MDX file frontmatter:

```yaml
---
title: "Your Article Title"
image: "https://placehold.co/1200x630/6366f1/ffffff?text=Blog+Post"
---
```

Or use an existing image:

```yaml
---
title: "Your Article Title"
image: "/assets/photos/personal/My image portrait.webp"
---
```
