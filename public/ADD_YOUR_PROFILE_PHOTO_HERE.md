# Profile Photo Instructions

Add your professional headshot as `profile.jpg` in this directory.

## Requirements:
- **Filename:** `profile.jpg` (or update the path in `src/data/resume-data.ts`)
- **Format:** JPG, PNG, or WebP
- **Recommended size:** 500x500px to 1000x1000px
- **Aspect ratio:** Square (1:1)
- **Quality:** High resolution, professional business attire
- **Background:** Neutral/solid color preferred

## To add your photo:
1. Place your professional headshot in this `public/` folder
2. Name it `profile.jpg` (or update the `profileImage` field in resume-data.ts)
3. The Hero section will automatically display it in a circular frame

## To remove the photo:
In `src/data/resume-data.ts`, change:
```typescript
profileImage: "/profile.jpg",
```
to:
```typescript
profileImage: "",
```

The component will hide the image section if the field is empty or omitted.
