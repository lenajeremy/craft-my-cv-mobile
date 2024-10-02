import * as FileSystem from 'expo-file-system';
import { Alert } from 'react-native';


const filePath = (name: string) => `${FileSystem.cacheDirectory}/${name}`

export async function saveFileToDevice(
    fromUrl: string,
    fileName: string,
    onProgress: (progress: number) => void
) {
    const downloadResumable = FileSystem.createDownloadResumable(
        fromUrl,
        filePath(fileName),
        {},
        (data) => onProgress(data.totalBytesWritten / data.totalBytesExpectedToWrite)
    )

    try {
        const data = await downloadResumable.downloadAsync()
        return { data, error: undefined }
    } catch (error) {
        console.error(error)
        return { error, data: undefined }
    }
}

