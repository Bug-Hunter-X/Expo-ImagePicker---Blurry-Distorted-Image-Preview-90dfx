The solution involves using a library like `react-native-fast-image` for more robust image handling. This library offers better performance and error handling for image loading and decoding, which can resolve the distortion and blurring issues.

```javascript
import FastImage from 'react-native-fast-image';
import * as ImagePicker from 'expo-image-picker';

const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.cancelled) {
    setImage(result.uri);
  }
};

// Display the image using FastImage
<FastImage
  style={{ width: 200, height: 200 }}
  source={{ uri: image }}
  resizeMode={FastImage.resizeMode.contain}
/>
```
By replacing the standard image display with `react-native-fast-image`, the image loading and rendering process becomes more efficient and reliable, addressing the distortion and blurring issues.