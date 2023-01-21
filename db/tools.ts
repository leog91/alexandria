


type ToolTag = "react" | "db" | "terminal" | "test" | "node" | "UI"

type MiscTag = "lvlUp"

export type Misc = { uri: string, name: string, tags?: MiscTag[], description?: string }


export type Tool = { uri: string, name: string, tags?: ToolTag[], description?: string }



export const tools: Tool[] = [

    { name: "Drag and drop", uri: "https://dndkit.com/", tags: ["react"] },
    { name: "React Hook Forms", uri: "https://react-hook-form.com", tags: ["react"] },
    { name: "picocolors", description: "The tiniest and the fastest library for terminal output formatting with ANSI colors", uri: "https://github.com/alexeyraspopov/picocolors", tags: ["terminal", "test", "UI"] },
    { name: "Vitest UI", uri: "https://vitest.dev/guide/ui.html", description: "beautiful UI to view and interact with your tests", tags: ["test"] },
    { name: "sharp", uri: "https://github.com/lovell/sharp", description: "High performance Node.js image processing, the fastest module to resize JPEG, PNG, WebP, AVIF and TIFF images.", tags: ["node"] },
    { name: "Playwright", description: "Playwright enables reliable end-to-end testing for modern web apps.", uri: "https://playwright.dev/", tags: ["test"] },
    { name: "Penpot", uri: "https://design.penpot.app/", description: "Design and prototyping platform", tags: ["UI"] },
    { name: "tabler-icons", uri: "https://tabler-icons.io/", description: "Over 3100 pixel-perfect icons for web design", tags: ["UI"] },
    { name: "Flowbite", uri: "https://flowbite.com/", tags: ["UI"], description: "components on top of Tailwind CSS" },
    { name: "win98icons", uri: "https://win98icons.alexmeub.com/", tags: ["UI"] }



]


export const miscs: Misc[] = [
    { name: "adventofcode", uri: "https://adventofcode.com/2022/events", tags: ["lvlUp"] }
]