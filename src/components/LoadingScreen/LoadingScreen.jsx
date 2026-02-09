import "./LoadingScreen.css"

export default function LoadingScreen({ isLoading }) {
    if (!isLoading) return null

    return (
        <div className="loading-screen">
            <div className="loader-spinner"></div>
            <p>Loading Projects</p>
        </div>
    )
}
