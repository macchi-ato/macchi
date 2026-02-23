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
        "My first portfolio website.",
        "The goal of this site is to introduce myself, share my projects, and my resume.",
        "As a developer, having some sort of portfolio was long overdue. This isn't my first attempt, but it's the first time I've been satisfied enough to actually host and share it.",
        "The biggest challenge was integrating GitHub's API to dynamically pull in my projects. I knew from the start that I didn't want to manually add or update project every time something changed. That being said, this really wasn't a complicated project.",
        "I built it with React and Vite, keeping it simple to match the simplicity of the site itself. No unnecessary libraries or frameworks, just enough to get the job done.",
        "I'm happy with the result but it's far from being done. I plan on continuing to update it until I run out of ideas or I come up with a new design for its second iteration."
    ],
    "torus" : [
        "My undergrad capstone project.",
        "The idea was to create a place where artists could upload, save, and view 3D assets directly in the browser. I wanted the platform to be something like ArtStation, but specifically for 3D artists.",
        "This was a solo project that took about a month and a half to complete. I built the frontend with React, using React Three Fiber for the browser 3D viewer, and the backend with ASP.NET Core, handling everything from authentication and asset metadata to file storage and API design.",
        "The biggest challenge was reliably handling large files, because working with blob data was a first for me. Looking back, the way I process that data isn't very efficient, but it works and it taught me a lot about dealing with binary data in a full-stack context.",
        "I'm still very proud of this project because it represents a turning point where I became comfortable thinking like a full-stack developer instead of just someone writing code.",
        "The platform is functional and complete but not currently hosted. You can find out how to run it locally on GitHub."
    ],
    "ato" : [
        "This project in currently in development and not yet hosted.",
        "An extension to my portfolio website to showcase the 3D models I've created in Blender.",
        "I decided to make this a separate project rather than baking it into my portfolio site because I didn't want to force all that assets on someone who just wants to view my portfolio. If they're interested in my 3D work, they can choose to visit it while keeping the overhead separate.",
        "I also want to mention that I am not an expert or claim to be one. This is simply a hobby of mine that I started because one day I would like to create a game with my own assets.",
    ]
}

export default projectDescriptions