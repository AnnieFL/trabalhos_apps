import { Text, View } from 'react-native';

type PseudoTableLine = {
    name: string,
    value: any
}

type PseudoTableProps = {
    title?: string
    lines: PseudoTableLine[]
}

export default function PseudoTable({
    title,
    lines
}: PseudoTableProps) {

    return (
        <View className="px-4 mt-10">
            {title &&
                <Text className="text-2xl font-semibold">{title}</Text>
            }
            <View className="mt-4">
                {lines.map((l, index) => {
                    if (typeof l.value == 'boolean') {
                        return (
                            <View key={index} className="flex-row justify-between mb-2">
                                <Text className="text-gray-600">{l.name}:</Text>
                                <Text className="text-gray-800 w-[50%]">{l.value ? "Sim" : "Não"}</Text>
                            </View>
                        )
                    }
                    return (
                        <View key={index} className="flex-row justify-between mb-2">
                            <Text className="text-gray-600">{l.name}</Text>
                            <Text className="text-gray-800 w-[50%]">{l.value || "-"}</Text>
                        </View>
                    )
                })}
            </View>
        </View>
    );
}