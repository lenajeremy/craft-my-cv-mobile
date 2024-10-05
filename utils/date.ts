import { LikeDate } from "@/http/types";

export function formatStringToLikeDate(dateString: string): LikeDate {
    if (dateString.toLowerCase() === "present") {
        return "Present"
    } else {
        return new Date(dateString)
    }
}