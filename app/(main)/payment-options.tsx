import React from "react";
import Box from "@/components/ui/box";
import Text from "@/components/ui/text";
import ScreenContainer from "@/components/ui/screen-container";
import {
  useGetAvailablePlansQuery,
  useSubscribeToPlanMutation,
} from "@/http/subscriptionsApi";
import PaymentPerk from "@/components/payment-perk";
import { ActivityIndicator, Pressable } from "react-native";
import { useState } from "react";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";
import RadioButton from "@/components/ui/radio";
import Button from "@/components/ui/button";
import { useAppSelector } from "@/hooks/redux";
import { Plan } from "@/http/types";

export default function PaymentOptions() {
  const { data, isLoading } = useGetAvailablePlansQuery();
  const [selectedPlan, setSelectedPlan] = useState<Plan>();
  const { colors } = useTheme<Theme>();
  const { plan, userId } = useAppSelector((state) => state.user);

  const [subscribeToPlan, { isLoading: isSubscribing }] =
    useSubscribeToPlanMutation();

  React.useEffect(() => {
    if (data?.data && data.data.length > 0) {
      setSelectedPlan(data.data[0]);
    }
  }, [data]);

  const handleSubscribe = async () => {
    if (!selectedPlan) return;

    try {
      const res = await subscribeToPlan({
        planId: selectedPlan.id,
        userId,
      }).unwrap();
      console.log(JSON.stringify(res, null, 3));
    } catch (error) {
      console.error(JSON.stringify(error, null, 3));
    }
  };

  return (
    <ScreenContainer
      showHeaderTitle
      headerTitle="Choose a plan"
      scrollable
      ScreenFooterComponent={
        <Button
          isLoading={isSubscribing}
          variant="contained"
          disabled={
            !selectedPlan ||
            selectedPlan.title.toLowerCase().includes("free") ||
            !plan.toLowerCase().includes("free")
          }
          onPress={handleSubscribe}
          textStyle={{ fontFamily: "Manrope-SemiBold" }}
        >
          {!plan.toLowerCase().includes("free")
            ? "Your subscription is active"
            : "Continue"}
        </Button>
      }
    >
      <Box flex={1}>
        {isLoading ? (
          <Box
            flex={1}
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            gap="m"
          >
            <ActivityIndicator />
            <Text>Loading...</Text>
          </Box>
        ) : (
          <Box gap="m" my="s">
            {data?.data.map((plan) => (
              <Pressable key={plan.id} onPress={() => setSelectedPlan(plan)}>
                <Box
                  gap="s"
                  flexDirection="row"
                  justifyContent="space-between"
                  p="m"
                  borderWidth={1}
                  borderColor={
                    selectedPlan?.id === plan.id ? "primary" : "border"
                  }
                  borderRadius={16}
                  style={{
                    backgroundColor:
                      selectedPlan?.id === plan.id
                        ? colors.mainBackground
                        : "#F7FAFC",
                  }}
                >
                  <Box gap="s">
                    <Text variant="h2" font="Manrope-SemiBold">
                      {plan.title}
                    </Text>
                    <Box flexDirection="row" gap="xs" alignItems="center">
                      <Text variant="h3" font="Manrope-Regular">
                        ${plan.priceInDollars}
                      </Text>
                      <Text
                        color="primary"
                        variant="small"
                        font="Manrope-SemiBold"
                      >
                        per month
                      </Text>
                    </Box>
                  </Box>
                  <RadioButton
                    checked={selectedPlan?.id === plan.id}
                    onPress={() => {}}
                    value={plan.id}
                  />
                </Box>
              </Pressable>
            ))}
          </Box>
        )}

        {selectedPlan && (
          <Box>
            {selectedPlan.perks.map((perk: string) => (
              <PaymentPerk key={perk} text={perk} />
            ))}
          </Box>
        )}
      </Box>
    </ScreenContainer>
  );
}
