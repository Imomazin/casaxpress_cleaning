#!/bin/bash

echo "🔍 Checking for real photo files..."
echo ""

FILES=(
  "cleaner-kitchen-real.jpg"
  "cleaner-living-room.jpg"
  "cleaners-bathroom.jpg"
  "family-cooking.jpg"
  "hero-family-real.jpg"
  "parent-child-home.jpg"
)

MISSING=0

for file in "${FILES[@]}"; do
  if [ -f "public/images/$file" ]; then
    echo "✅ Found: $file"
  else
    echo "❌ MISSING: $file"
    MISSING=$((MISSING + 1))
  fi
done

echo ""
if [ $MISSING -eq 0 ]; then
  echo "🎉 All photos are saved! Run: npm run dev"
else
  echo "⚠️  $MISSING photo(s) missing"
  echo ""
  echo "📥 TO FIX: Scroll up in this chat to find the 6 images you uploaded."
  echo "Right-click each image → 'Save Image As' → Save to public/images/ with the exact filename shown above."
  echo ""
  echo "OR if you have the images on your computer:"
  echo "1. Open Finder/File Explorer"
  echo "2. Navigate to: $(pwd)/public/images/"
  echo "3. Drag and drop the 6 images there"
  echo "4. Rename them to match the filenames above"
fi
