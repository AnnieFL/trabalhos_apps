import { PRODUCTS, SUBCATEGORIES } from "@/constants/mock-database";

export function getProduct(id: number) {
    return PRODUCTS.find((p) => p.id == id)
}

export function getProductsByCategory(categoryId: number) {
    const subcategoriesIncluded = getSubcategoriesByCategory(categoryId).map((s) => s.id)

    return PRODUCTS.filter((p) => subcategoriesIncluded.includes(p.subcategory))
}

export function getProductsBySubcategory(subcategoryId: number, avoidProduct: number = -1) {
    return PRODUCTS.filter((p) => (p.subcategory == subcategoryId && p.id != avoidProduct))
}

export function getProductsByName(name: string, categoryFilter: number = -1) {
    const subcategoriedFiltered = getSubcategoriesByCategory(categoryFilter).map((s) => s.id)

    return PRODUCTS.filter((p) => (p.name.includes(name) && (subcategoriedFiltered.length == 0 || subcategoriedFiltered.includes(p.subcategory))))
}

function getSubcategoriesByCategory(categoryId: number) {
    return SUBCATEGORIES.filter((s) => s.category == categoryId)
}

export function getRandomSubcategory() {    
    return SUBCATEGORIES[Math.floor(Math.random()*SUBCATEGORIES.length)]
}

export function getRandomSubcategoryByCategory(categoryId: number) {
    const subcategories = SUBCATEGORIES.filter((s) => s.category == categoryId)

    return subcategories[Math.floor(Math.random()*subcategories.length)]
}