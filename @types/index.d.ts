interface IBannerItem {
    id: number,
    image: string,
    title: string | null,
    description: string | null,
    tag: string | null,
    link: string | null,
    area: string | null,
    address: string | null,
}

interface IBreadCrumbItem {
    text: string,
    to: string,
}

interface IAsideMenuItem {
    text: string,
    link: string,
}