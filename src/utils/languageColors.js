export const getLanguageColor = (language) => {
    const colors = {
        JavaScript: "#f1e05a",
        TypeScript: "#3178c6",
        Python: "#3572A5",
        Java: "#b07219",
        'C#': "#178600",
        CSS: "#563d7c",
        HTML: "#e34c26",
        Rust: "#dea584",
        C: "#555555",
        'C++': "#f34b7d",
        Shell: "#89e051",
    }
    
    return colors[language] || "#8b949e" // Default color
}
