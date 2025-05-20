import MainButton from "@/components/common/MainButton";
import DayElm from "@/components/reminders/DayElm";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export type TDay = {
  id: number;
  name: string;
  value: string;
};

const days = [
  {
    id: 1,
    name: "SU",
    value: "SU",
  },
  {
    id: 2,
    name: "MO",
    value: "MO",
  },
  {
    id: 3,
    name: "TU",
    value: "TU",
  },
  {
    id: 4,
    name: "WE",
    value: "WE",
  },
  {
    id: 5,
    name: "TH",
    value: "TH",
  },
  {
    id: 6,
    name: "FR",
    value: "FR",
  },
  {
    id: 7,
    name: "SA",
    value: "SA",
  },
];

const RemindersScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.title1}>What time would you</Text>
          <Text style={styles.title2}>like to meditate?</Text>
        </View>
        <Text style={styles.title3}>
          Any time you can choose but We recommend first thing in the morning.
        </Text>
        {/* <RNDateTimePicker display="spinner" mode="time" value={new Date()} /> */}
      </View>

      <View style={{ marginTop: 40 }}>
        <View>
          <Text style={styles.title1}>What day would you</Text>
          <Text style={styles.title2}>like to meditate?</Text>
        </View>
        <Text style={styles.title3}>
          Everyday is best, but we recommend picking at least five.
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 14,
            justifyContent: "space-between",
            marginTop: 30,
          }}
        >
          {days.map((day) => (
            <DayElm key={day.id} day={day} />
          ))}
        </View>
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 40,
          left: 0,
          right: 0,
          marginHorizontal: 16,
          gap: 20,
        }}
      >
        <MainButton
          text="SAVE"
          styleButton={{
            backgroundColor: "#8E97FD",
          }}
          styleText={{ color: "#F6F1FB" }}
          actionHandle={() => router.push("/(tabs)/home")}
        />
        <TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Helvatica-Medium",
              color: "#3F414E",
              fontSize: 16,
            }}
          >
            NO THANKS
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 76,
  },
  title1: {
    fontFamily: "Helvatica-Bold",
    fontSize: 28,
    color: "#3F414E",
    lineHeight: 30,
  },
  title2: {
    fontFamily: "Helvatica-Bold",
    fontSize: 28,
    color: "#3F414E",
  },
  title3: {
    fontFamily: "Helvatica-Light",
    fontSize: 20,
    lineHeight: 30,
    color: "#A1A4B2",
    marginVertical: 16,
  },
});

export default RemindersScreen;
