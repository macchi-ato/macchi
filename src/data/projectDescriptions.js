/**
 * Project descriptions metadata
 * 
 * Structure:
 * {
 *   "repository-name": ["paragraph 1", "paragraph 2", ...],
 * }
 */

const projectDescriptions = {
    "dotfiles" : [
        '"I use arch btw!"',
        "These dotfiles started as a copy paste of someone else's config (who I link in the GitHub repo), but at this point I've changed so much about them through countless tweaks and revisions that I'm happy to call them my own",
        "My setup revolves around Hyprland and Waybar. Everything is minimal and I only keep the tools I need to program and nothing more.",
        "I like to know exactly what's on my system. I hate clutter, so having full control over every piece of my environment is the reason why I use Arch.",
        "I considered omitting this repo, but to this day, tweaking my system is still something I very much enjoy, so I'm happy to include it as one of my projects."
    ],
    "macchi" : [
        "My first porfolio website.",
        "My goal was for a minimal and clean website to introduce myself, share my current projects, and my resume.",
        "As a developer, having some sort of portfolio was long overdue. This isn't my first attempt, but it's the first time I've been satisfied with the result to host and share it.",
        "The biggest challenge was using GitHub's API to dynamically render my projects because I knew that I didn't want to manually have to update my projects, although now I feel like I've just created a second GitHub profile, but with my own style.",
        "Regardless, I am happy with the result but it's far from being done. I plan on continuing to update it until I run out of ideas or I come up with a new design for its second iteration."
    ],
    "torus" : [
        "My undergrad capstone project.",
        "The idea was to create a place where artists could upload, save and view other assets directly in the browser. I wanted the platform to be something like Art Station, but specifically for 3D artists.",
        "I built the frontend with React and the backend with ASP.NET Core, handling everything from authentication and asset metadata to file storage and API design. The biggest challenges was reliably handling large files, because handling blob data was a first for me.",
        "Like most things I build, I see plenty of areas I’d approach differently today, but I'm still very proud of this project because it represents a turning point where I became comfortable thinking like a full-stack developer instead of just someone writing code.",
        "The platform is functional and complete but not currently hosted. You can find out how to run it locally on GitHub."
    ]
}

export default projectDescriptions