import "./ThemeSelector.css"
import { useTheme } from "../../context/ThemeContext"
import { FaPalette } from "react-icons/fa"

const THEME_DATA = {
    sunset: {
        label: "Sunset",
        swatches: ["#242424", "#ce4257", "#ff7f51"],
    },
    sunrise: {
        label: "Sunrise",
        swatches: ["#fff0d3", "#cb203a", "#ff7f51"],
    },
    midnight: {
        label: "Midnight",
        swatches: ["#0d1b2a", "#0077ff", "#61abff"],
    },
}

export default function ThemeSelector() {
    const { setTheme, themes } = useTheme()

    return (
        <>
            <div className="theme-selector">
                <div className="theme-selector-header">
                    <FaPalette size={32} aria-hidden="true" className="info-icon" />
                    <span className="info-label">Theme</span>
                </div>

                <div className="theme-options">
                    {themes.map((t) => (
                        <button
                            key={t}
                            className="theme-btn"
                            onClick={() => setTheme(t)}
                        >
                            <span className="theme-btn-name">{THEME_DATA[t].label}</span>
                            <span className="theme-btn-swatches">
                                {THEME_DATA[t].swatches.map((color, i) => (
                                    <span
                                        key={i}
                                        className="swatch"
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}
