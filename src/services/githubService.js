const GITHUB_USERNAME = 'macchi-ato'
const CACHE_KEY = 'github_repos'
const CACHE_TIMESTAMP_KEY = 'github_repos_timestamp'
const CACHE_DURATION = 3 * 24 * 60 * 60 * 1000 // 3 days in milliseconds

/**
 * Fetches GitHub repositories
 * Uses localStorage caching with 3 days expiration
 */
export async function fetchGitHubRepos() {
    try {
        // Check if we have cached data
        const cachedData = localStorage.getItem(CACHE_KEY)
        const cachedTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY)
    
        if (cachedData && cachedTimestamp) {
            const age = Date.now() - parseInt(cachedTimestamp, 10)
      
            // If cache is less than 3 days old, return cached data
            if (age < CACHE_DURATION) {
                return JSON.parse(cachedData)
            }
        }
    
        // Else fetch fresh data from GitHub API
        const response = await fetch (
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=created&direction=desc`
        )
        
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status} ${response.statusText}`)
        }
        
        const repos = await response.json()
        
        // Fetch languages for each repository
        const reposWithLanguages = await Promise.all(
            repos.map(async (repo) => {
                try {
                    const langResponse = await fetch(repo.languages_url)
                    if (langResponse.ok) {
                        const languages = await langResponse.json()
                        return { ...repo, languages: Object.keys(languages) }
                    }
                    return { ...repo, languages: [] }
                } catch (error) {
                    console.error(`Error fetching languages for ${repo.name}:`, error)
                    return { ...repo, languages: [] }
                }
            })
        )
        
        // Cache the data with current timestamp
        localStorage.setItem(CACHE_KEY, JSON.stringify(reposWithLanguages))
        localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString())
        
        return reposWithLanguages
    } catch (error) {
        console.error("Error fetching GitHub repos:", error)
    
        // If fetch fails but we have cached data (even if stale), return it
        const cachedData = localStorage.getItem(CACHE_KEY)
        
        if (cachedData) {
            console.warn("Using stale cached data due to fetch error")

            return JSON.parse(cachedData)
        }
    }
}

/**
 * Clears the cached GitHub repos data
 */
export function clearGitHubCache() {
    localStorage.removeItem(CACHE_KEY)
    localStorage.removeItem(CACHE_TIMESTAMP_KEY)
}
