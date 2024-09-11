import Box from "@/components/ui/box";
import Text from "@/components/ui/text";
import ScreenContainer from "@/components/ui/screen-container";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import useLocalStore, { LOCAL_STORE_KEYS } from "@/hooks/useLocalStore";
import Button from "@/components/ui/button";
import { updateUser } from "@/store/userSlice";
import { useNavigation } from "expo-router";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";

export default function ProfileScreen() {
  const user = useAppSelector((state) => state.user);
  const { clearAll: clearAllKeys } = useLocalStore(LOCAL_STORE_KEYS.JWT_TOKEN);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const { colors  } = useTheme<Theme>()

  return (
    <ScreenContainer showHeaderTitle headerTitle="Profile">
      <Box flexDirection="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Text variant="h3">{user.name}</Text>
          <Text variant="body" color="mainText">{user.email}</Text>
        </Box>
        
        <Box borderRadius={16} style = {{ backgroundColor: colors.primaryFaded + '50', paddingVertical: 6, paddingHorizontal: 12 }}>
            <Text variant="small" font="Manrope-SemiBold" color="primary">
                {user.plan || "Free"}
            </Text>
        </Box>
      </Box>

      <Button
        variant="contained"
        buttonStyles={{ backgroundColor: "crimson" }}
        onPress={async () => {
          clearAllKeys();
          dispatch(
            updateUser({
              email: "",
              name: "",
              token: "",
              userId: "",
              plan: "",
            })
          );

          navigation.reset({
            index: 0,
            routes: [{ name: "index" as never }],
          });
        }}
      >
        Sign Out
      </Button>
    </ScreenContainer>
  );
}
