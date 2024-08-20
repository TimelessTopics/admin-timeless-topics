export function slugify(str: string) {
    return str.toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/&/g, "-and-")
        .replace(/\s*:\s*/g, "-")
        .replace(/\./g, "")
        .replace(/\-\-+/g, "-")
}