import InitialHeader from '@/components/header/initial-header';
import HorizontalProductList from '@/components/product-list/product-list';
import VerticalScrollList from '@/components/product-list/product-list-vertical';
import SearchInput from '@/components/ui/search-input';
import { CATEGORIES } from '@/constants/mock-database';
import { getProductsByName, getProductsBySubcategory, getRandomSubcategory, getRandomSubcategoryByCategory } from '@/hooks/database/products-provider';
import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';

export default function HomeScreen() {
  const ALL_CATEGORIES = [{ id: -1, name: 'Tudo', icon: 'all-inclusive' }, ...CATEGORIES]
  const [activeCategory, setActiveCategory] = useState(-1)
  const [search, setSearch] = useState("")
  const [randomSubcategories, setRandomSubcategories] = useState<any[]>([])
  const [productsSearched, setProductsSearched] = useState<any[]>([])

  useEffect(() => {
    const subcategories = []
    for (let i = 0; i < 3; i++) {
      if (activeCategory == -1) {
        subcategories.push(getRandomSubcategory())
      } else {
        subcategories.push(getRandomSubcategoryByCategory(activeCategory))
      }
    }
    setRandomSubcategories(subcategories)
  }, [activeCategory])

  useEffect(() => {
    if (!search) {
      setProductsSearched([])
    } else {
      setProductsSearched(getProductsByName(search, activeCategory))
    }
  }, [search, activeCategory])

  return (
    <View className="flex-1 bg-white pt-10 pb-14">
      <InitialHeader
        activeCategory={activeCategory}
        setActiveCategory={(categoryId) => setActiveCategory(categoryId)}
        all_categories={ALL_CATEGORIES} 
      />
      
      <SearchInput
        search={search}
        setSearch={(search) => setSearch(search)}
        activeCategory={activeCategory}
        all_categories={ALL_CATEGORIES}
      />

      {!search &&
        <ScrollView>
          {!search && randomSubcategories.map((subcategory: any, index: number) => (
            <HorizontalProductList key={index} title={`Recomendados para você em ${subcategory.name}`} products={getProductsBySubcategory(subcategory.id)} />
          ))}
        </ScrollView>
      }
      {!!search && !!productsSearched &&
        <VerticalScrollList products={productsSearched} />
      }
    </View>

  );
}
