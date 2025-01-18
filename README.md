# Expo ImagePicker - Blurry/Distorted Image Preview

This repository demonstrates a bug in Expo's ImagePicker library where the selected image preview is blurry, distorted, or blank. The issue is inconsistent across devices.

## Bug Description

The `expo-image-picker` library, when used to select an image, sometimes displays a distorted or blurry preview. The selected image's URI is correctly logged, but the displayed image is not a faithful representation.

## Reproduction

1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Run the app using Expo Go or a similar environment.
4. Select an image using the ImagePicker.
5. Observe the preview; it may be blurry, distorted, or blank.

## Solution

The solution involves ensuring the image is properly decoded and handled.  The proposed solution handles potential errors during image loading and provides a fallback mechanism.

## Additional Notes

This issue seems to be related to how Expo handles image decoding and the specific device's capabilities.  Further investigation might reveal platform-specific nuances or memory management issues.