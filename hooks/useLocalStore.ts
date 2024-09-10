import * as React from 'react'
import  AsyncStorage from '@react-native-async-storage/async-storage'



export const LOCAL_STORE_KEYS = {
    JWT_TOKEN: "CMCV_JWT_TOKEN",
    HAS_SEEN_ONBOARDING: "CMCV_HAS_SEEN_ONBOARDING",
    USER_ID: "CMCV_USER_ID"
} as const

type LocalKeys = keyof typeof LOCAL_STORE_KEYS
type LocalValues = typeof LOCAL_STORE_KEYS[LocalKeys]



const useLocalStore = <T>(key: LocalValues): [T | null, (v: T) => void, () => void] => {
    const [v, setV] = React.useState<T | null>(null)

    React.useEffect(() => {
        (async function() {
            try {
                const value = await AsyncStorage.getItem(key)
                setV(JSON.parse(value as string))
            } catch (error) {
                console.error(error)
            }
        }
        )()
    }, [key])

    const update = React.useCallback(async (value: T) => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value))
            setV(value)
        } catch (error) {
            console.error(error)
        }
    }, [key])

    const clearAllKeys = async () => {
        await AsyncStorage.clear()
    }
    
    return [v, update, clearAllKeys]
}


export default useLocalStore