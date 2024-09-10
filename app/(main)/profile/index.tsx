import Box from "@/components/ui/box";
import Text from "@/components/ui/text";
import ScreenContainer from "@/components/ui/screen-container";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import useLocalStore, { LOCAL_STORE_KEYS } from "@/hooks/useLocalStore";
import Button from "@/components/ui/button";
import { updateUser } from "@/store/userSlice";
import { useRouter, useNavigation } from "expo-router";

export default function ProfileScreen() {
  const user = useAppSelector((state) => state.user);
  const [, , clearAllKeys] = useLocalStore(LOCAL_STORE_KEYS.JWT_TOKEN);
  const dispatch = useAppDispatch();
  const navigation = useNavigation()

  return (
    <ScreenContainer showHeaderTitle headerTitle="User Profile">
      <Box>
        <Text variant="h1">Profile for {user.name}</Text>
        <Text variant="title">{JSON.stringify(user, null, 3)}</Text>
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
