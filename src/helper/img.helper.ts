export const getHostname = (image: string) => {
    return image.split('/')[2]
}
