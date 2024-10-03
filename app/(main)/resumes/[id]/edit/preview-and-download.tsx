import * as React from "react";
import Box from "@/components/ui/box";
import Button from "@/components/ui/button";
import ScreenContainer from "@/components/ui/screen-container";
import WebView from "react-native-webview";
import {
  useGetResumePreviewQuery,
  useLazyDownloadResumeQuery,
} from "@/http/resumeApi";
import { ActivityIndicator, Alert } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { saveFileToDevice } from "@/utils/file-download";
import { useFormContext } from "react-hook-form";
import { Resume } from "@/http/types";
import * as Sharing from "expo-sharing";

export default function PreviewAndDownload() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { data: resumePreviewData, isFetching: loadingResumePreview } =
    useGetResumePreviewQuery(
      { resumeId: id },
      { refetchOnMountOrArgChange: true }
    );
  const [downloadFileQuery, { isFetching: loadingResumeDownload }] =
    useLazyDownloadResumeQuery();

  const { getValues } = useFormContext<Resume>();
  const [downloadProgress, setDownloadProgress] = React.useState(0);

  const shareFile = async (uri: string) => {
    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(uri, {
        dialogTitle: "Where do you want your resume?",
      });
    } else {
      Alert.alert("Sharing is not available");
    }
  };

  const downloadFile = async (file: "pdf" | "docx") => {
    const res = await downloadFileQuery({
      resumeId: id,
      fileType: file,
    }).unwrap();

    const { error, data } = await saveFileToDevice(
      res.data.file_url,
      `${getValues("firstName")} ${getValues("lastName")}'s Resume.${file}`,
      (progress) => {
        setDownloadProgress(progress * 100);
      }
    );

    if (data) {
      await shareFile(data.uri);
      setDownloadProgress(0)
    }

    console.log(error, data);
  };

  return (
    <ScreenContainer
      showHeaderTitle
      headerTitle="Preview & Download"
      ScreenFooterComponent={
        <Box flexDirection="column" gap="s">
          <Button
            variant="contained"
            disabled={!resumePreviewData?.data}
            onPress={() => downloadFile("pdf")}
            isLoading={loadingResumeDownload}
          >
            {downloadProgress === 0
              ? "Download as PDF"
              : `Downloading ${downloadProgress}%`}
          </Button>
          <Button
            variant="contained"
            disabled={!resumePreviewData?.data}
            onPress={() => downloadFile("docx")}
            isLoading={loadingResumeDownload}
          >
            {downloadProgress === 0
              ? "Download as DOCX"
              : `Downloading ${downloadProgress}%`}
          </Button>
        </Box>
      }
    >
      <Box flex={1}>
        {loadingResumePreview ? (
          <ActivityIndicator />
        ) : (
          <Box
            flex={1}
            borderRadius={8}
            overflow="hidden"
            marginBottom="m"
            position="relative"
          >
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
              source={{
                uri:
                  resumePreviewData?.data.resume_preview_url ??
                  "https://craftmycv.xyz",
              }}
            />
          </Box>
        )}
      </Box>
    </ScreenContainer>
  );
}
