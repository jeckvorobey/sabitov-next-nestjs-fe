const API_BASE = 'http://localhost:3001/api'

interface NavigationItem {
    id: number
    label: string
    href: string
    order: number
}

interface Benefit {
    id: number
    title: string
    description: string | null
    icon: string | null
}

export const useApi = () => {
    const getNavigation = async (): Promise<NavigationItem[]> => {
        try {
            const data = await $fetch<NavigationItem[]>(`${API_BASE}/navigation`)
            return data
        } catch {
            return []
        }
    }

    const getBenefits = async (): Promise<Benefit[]> => {
        try {
            const data = await $fetch<Benefit[]>(`${API_BASE}/benefits`)
            return data
        } catch {
            return []
        }
    }

    return {
        getNavigation,
        getBenefits,
    }
}
