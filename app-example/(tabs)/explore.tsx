import Box from '@/components/ui/box';
import Text from '@/components/ui/text';
import { StyleSheet, Image, Platform } from 'react-native';

export default function TabTwoScreen() {
  return (
    <Box>
      <Text variant='h1'>EXPLORE</Text>
    </Box>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
