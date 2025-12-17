import { TextInput } from 'react-native';


type IInputField = {
    placeholder: string,
    type?: 'email'|'password'|'area',
    value: string,
    onChange: (value:string) => void
}

export default function InputField(props:IInputField) {  
  return (
    <TextInput
        placeholder={props.placeholder}
        keyboardType={props.type == 'email' ? "email-address" : undefined}
        value={props.value}
        secureTextEntry={props.type == 'password'}
        onChangeText={(newValue) => props.onChange(newValue)}
        multiline={props.type=='area'}
        textAlignVertical="top"
        className={`border border-purple-300 rounded-xl px-4 py-3 mb-5 bg-white text-purple-900 ${props.type == 'area' ? 'h-36' : ''}`}
        placeholderTextColor="#A78BFA"
      />
  );
}

