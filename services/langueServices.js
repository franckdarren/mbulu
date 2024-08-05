import { langues } from '../data/langues'

export const getLangueBySlug = (slug) => {
    return langues.find((langue) => langue.slug === slug)
}

export const getAllLangues = () => {
    return langues;
}
