import { TDay } from "@/app/(welcome)/reminders";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const DayElm = ({ day }: { day: TDay }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <TouchableOpacity onPress={() => setIsSelected(!isSelected)}>
      <View
        style={{
          backgroundColor: isSelected ? "#3F414E" : "#FEFFFE",
          width: 42,
          height: 42,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 22,
          borderWidth: 1,
          borderColor: "#A1A4B2",
        }}
        key={day.id}
      >
        <Text
          style={{
            fontFamily: "Helvatica-Medium",
            color: isSelected ? "#FEFFFE" : "#A1A4B2",
          }}
          key={day.id}
        >
          {day.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DayElm;
