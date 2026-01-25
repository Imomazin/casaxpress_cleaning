# Image Replacement Guide

This guide explains how to replace the SVG placeholder images with real photos from Unsplash.

## Images Needed

| Location | Current File | Real Image Needed | Unsplash Search |
|----------|-------------|-------------------|-----------------|
| Hero Background | `hero-family.svg` | Family relaxing on sofa (UK/Scottish vibe) | [Search Link](https://unsplash.com/s/photos/family-relaxing-on-sofa) |
| "We promise..." section | `cleaner-professional.svg` | Professional cleaner in hallway | [Search Link](https://unsplash.com/s/photos/professional-cleaner) |
| Service Card 1 | `cleaner-professional.svg` | Cleaner working in home | [Search Link](https://unsplash.com/s/photos/professional-cleaner) |
| Service Card 2 | `cleaning-service.svg` | Cleaning products | Currently OK as SVG |
| Service Card 3 | Need new file | Cleaner in kitchen | [Search Link](https://unsplash.com/s/photos/cleaning-kitchen) |
| "Life made possible" | Need new file | Parent & child reading | [Search Link](https://unsplash.com/s/photos/parent-child-reading) |
| "Clean tailored" | Need new file | Family cooking together | [Search Link](https://unsplash.com/s/photos/family-cooking) |
| FAQ section | Need new file | Cleaner making bed | [Search Link](https://unsplash.com/s/photos/housekeeping-making-bed) |

## How to Replace Images

### Step 1: Download Images from Unsplash

1. Go to each Unsplash search link above
2. Find a suitable image (look for diversity: Scottish, Chinese, Pakistani/Indian representation)
3. Click the image you want
4. Click the **Download** button (or right-click → Save Image As)
5. Save with a descriptive name (e.g., `hero-family.jpg`, `cleaner-hallway.jpg`)

### Step 2: Add Images to Project

1. Place all downloaded images in: `/public/images/`
2. Recommended image sizes:
   - Hero image: 1920x1080px or larger
   - Service cards: 800x600px
   - Other sections: 1200x800px

### Step 3: Update Code References

Open `/pages/index.tsx` and replace the image paths:

**Hero Background (line ~32):**
```typescript
// CHANGE FROM:
background: '...url(/images/hero-family.svg)...'

// CHANGE TO:
background: '...url(/images/hero-family.jpg)...'
```

**Professional Cleaner Image (line ~459):**
```typescript
// CHANGE FROM:
src="/images/cleaner-professional.svg"

// CHANGE TO:
src="/images/cleaner-hallway.jpg"
```

**Service Card Images (lines ~520, 558, 596):**
```typescript
// Card 1:
src="/images/cleaner-working.jpg"

// Card 2:
src="/images/cleaning-products.jpg"  // or keep SVG

// Card 3:
src="/images/cleaner-kitchen.jpg"
```

### Step 4: Test

```bash
npm run dev
```

Visit `http://localhost:3000` and verify all images load correctly.

### Step 5: Commit

```bash
git add public/images/*
git add pages/index.tsx
git commit -m "Replace SVG placeholders with real photos from Unsplash"
git push
```

## Diversity Guidelines

When selecting images, ensure:
- ✅ Predominantly Scottish/UK setting
- ✅ At least 1 image with Chinese/East Asian representation
- ✅ At least 1 image with Pakistani/Indian/South Asian representation
- ✅ Professional appearance for all cleaner images
- ✅ Warm, friendly, trustworthy feel
- ✅ Clean, modern homes (not too luxury, not too basic)

## Recommended Unsplash Images

If you want specific recommendations, search for:
- "professional cleaner uk"
- "family home scotland"
- "housekeeper cleaning"
- "multicultural cleaning service"
- "asian cleaner professional"

## Attribution (Optional but appreciated)

Unsplash photos are free for commercial use, but you can optionally credit photographers in your footer or credits page.
