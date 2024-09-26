import * as React from "react";
import Box from "@/components/ui/box";
import Button from "@/components/ui/button";
import ScreenContainer from "@/components/ui/screen-container";
import WebView from "react-native-webview";
import Text from "@/components/ui/text";
import { useGetResumePreviewImageQuery } from "@/http/resumeApi";
import { ActivityIndicator, Dimensions, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";

export default function PreviewAndDownload() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, isFetching } = useGetResumePreviewImageQuery(
    { resumeId: id },
    { refetchOnMountOrArgChange: true }
  );
  const { spacing } = useTheme<Theme>();

  const downloadPDf = () => {
    console.log("downloadig file");
  };

  return (
    <ScreenContainer
      showHeaderTitle
      headerTitle="Preview & Download"
      ScreenFooterComponent={
        <Box>
          <Button variant="contained" onPress={downloadPDf}>
            Download as PDF
          </Button>
        </Box>
      }
    >
      <Box flex={1}>
        {isFetching ? (
          <ActivityIndicator />
        ) : (
          <Box
            flex={1}
            borderRadius={8}
            overflow="hidden"
            marginBottom="xl"
            backgroundColor="dark"
          >
            {/* <Text>{data?.data.resume_preview_url}</Text> */}
            <WebView
              incognito
              onHttpError={(e) => console.log("http error:", e)}
              onError={(e) => console.log("error:", e)}
              onLoad={() => console.log("finished loading (def success)")}
              onLoadEnd={() => console.log("finished loading, success or fail")}
              onLoadProgress={(e) => {
                console.log(e.nativeEvent.progress);
                // loadProgress.value = withTiming(e.nativeEvent.progress, {
                // duration: 800,
                // easing: Easing.cubic,
                // })
              }}
              // scalesPageToFit
              source={{
                uri: data?.data.resume_preview_url ?? "https://google.com",
              }}
            />
          </Box>
        )}
      </Box>
    </ScreenContainer>
  );
}
