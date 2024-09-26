import { Resume } from "@/http/types"
import { useFormContext } from "react-hook-form"

export function useResumeFormCompletion(): boolean {
    const { getValues } = useFormContext<Resume>()
    const values = getValues()

    if (
        values.firstName && 
        values.lastName && 
        values.role && 
        values.phoneNumber && 
        values.email && 
        values.address && 
        values.experiences && 
        values.experiences.length > 0 && 
        values.education && 
        values.education.length > 0 &&
        values.skills &&
        // values.skills.length > 0 &&
        values.professionalSummary
    ) {
        return true
    }

    return false
}