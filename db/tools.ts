


type ToolTag = "react" | "db" | "terminal" | "test" | "node" | "UI"

type MiscTag = "lvlUp"

export type Misc = { uri: string, name: string, tags?: MiscTag[], description?: string }


export type Tool = { uri: string, name: string, tags?: ToolTag[], description?: string }

export type Post = { label: string, url: string }



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
    { name: "win98icons", uri: "https://win98icons.alexmeub.com/", tags: ["UI"] },
    { name: "animista", uri: "https://animista.net/play/attention/wobble/wobble-hor-bottom", description: "css animations", tags: ["UI"] }




]


export const miscs: Misc[] = [
    { name: "adventofcode", uri: "https://adventofcode.com/2022/events", tags: ["lvlUp"] }
]


export const posts = [
    { label: "hackaday", url: "https://hackaday.com/category/handhelds-hacks/" },
    { label: "Theremin-like Pico H musical instrument", url: "https://www.raspberrypi.com/news/theremin-like-pico-h-musical-instrument" },
    {
        label: "Making a DIY Raspberry Pi camera mount with privacy mode!", url: "https://www.cnx-software.com/2023/01/15/making-a-diy-raspberry-pi-camera-mount-with-privacy-mode/"
    },

    {
        label: "Weather station powered by Raspberry Pi Pico", url: "https://www.geeky-gadgets.com/weather-station-09-02-2023/"
    },

    {
        label: "LED Filament Lamp", url: "https://www.instructables.com/LED-Filament-Lamp/"
    },





]