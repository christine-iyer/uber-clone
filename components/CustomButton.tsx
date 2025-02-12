import { TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "@/types/type";

const CustomButton = ({
     onPress,
     title,
     bgVariant = "primary",
     textVariant = "default",
     IconLeft,
     IconRight,
     className,
     ...props
   }: ButtonProps) => {
     return (
       <TouchableOpacity
         onPress={onPress}
         className={`w-full rounded-full p-3 flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${getBgVariantStyle(bgVariant)} ${className}`}
         {...props}
       >
         {IconLeft && <IconLeft />}
         <Text className={`text-lg font-bold ${getTextVariantStyle(textVariant)}`}>
           {title}
         </Text>
         {IconRight && <IconRight />}
       </TouchableOpacity>
     );
   };
   
   export default CustomButton;
