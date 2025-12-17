import { FlatList } from 'react-native';
import ProductCard from './product-card';

type Product = {
    id: number;
    name: string;
    value: number;
    datetime: string;
    location: string;
};

type VerticallProductListProps = {
  products: Product[];
};

export default function VerticalScrollList({
    products
}: VerticallProductListProps) {
    return (
        <FlatList
            data={products}
            keyExtractor={(product) => product.id.toString()}
            renderItem={({ item }) => (
                <ProductCard
                    id={item.id}
                    name={item.name}
                    value={item.value}
                    datetime={item.datetime}
                    location={item.location}
                />
            )}
            horizontal={false}
            contentContainerStyle={{ paddingVertical: 10 }} 
            showsVerticalScrollIndicator={false}
        />
    );
}
