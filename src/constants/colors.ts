import { allLower } from "../utils/utils"
import { statuses } from "./constants"

export const statusColor = (code: string) => {
    if (statuses['positive'].includes(allLower(code)) || statuses['positive'].includes(code)) {
        return 'whatsapp'
    } else if (statuses['pending'].includes(allLower(code)) || statuses['pending'].includes(code)) {
        return 'purple'
    } else if (statuses['negative'].includes(allLower(code)) || statuses['negative'].includes(code)) {
        return 'red'
    } else {
        return 'blackAlpha'
    }
}

export const ElementColor = {
    primary: '#097969',
    // secoundary: '#FF6B35'  #87655D
    secoundary: "#FF7F50"
}
export const TextColor = {
    black: "#000",
    white: '#fff',
    error: '#667085',
}