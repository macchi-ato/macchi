import { createContext, useContext, useState, useEffect } from "react"
import { fetchGitHubRepos } from "../services/githubService"

const GitHubContext = createContext()

export function GitHubProvider({ children, onLoaded }) {
    const [repos, setRepos] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadRepos = async () => {
            try {
                const data = await fetchGitHubRepos()
                setRepos(data || [])
                setError(null)
            } catch (err) {
                setError("Failed to load projects")
                console.error(err)
            } finally {
                onLoaded?.()
            }
        }

        loadRepos()
    }, [])

    return (
        <GitHubContext.Provider value={{ repos, error }}>
            {children}
        </GitHubContext.Provider>
    )
}

export function useGitHub() {
    const context = useContext(GitHubContext)

    if (!context) {
        throw new Error("useGitHub must be used within a GitHubProvider")
    }
    
    return context
}
