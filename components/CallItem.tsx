import { View, Text, Image } from "react-native";
import React from "react";
import className from "twrnc";
import { Feather, Ionicons } from "@expo/vector-icons";
import { formatTimeTo12Hour } from "@/utils/formatTime";

interface CallItemProps {
  id: number;
  name: string;
  type: string;
  duration: string;
  date: string;
  time: string;
  image: string;
}

const CallItem = ({
  name,
  type,
  duration,
  date,
  time,
  image,
}: CallItemProps) => {
  return (
    <View
      style={className`flex-row items-center rounded-lg shadow-sm space-between`}
    >
      <Image
        source={{ uri: image }}
        style={className`w-12 h-12 rounded-full mr-4`}
      />

      <View style={className`flex-1`}>
        <Text style={className`text-lg font-semibold text-white`}>{name}</Text>
        <View style={className`flex-row items-center`}>
          <Feather
            name={
              // Entrante
              type === "incoming"
                ? "arrow-down-left"
                : // Saliente
                type === "outgoing"
                ? "arrow-up-right"
                : "phone-missed"
            }
            size={16}
            /*  color={type === "missed" ? "red" : "gray"} */
            color={
              type === "incoming"
                ? "green"
                : type === "outgoing"
                ? "red"
                : type === "missed"
                ? "red"
                : ""
            }
            style={className`mr-2`}
          />
          <Text style={className`text-gray-500`}>
            {type === "missed"
              ? "Llamada perdida"
              : `${type === "incoming" ? "Entrante" : "Saliente"} ${
                  duration !== "0:00" ? `, ${duration}` : ""
                }`}
          </Text>
        </View>
        <Text style={className`text-gray-400 text-xs`}>
          {date} - {formatTimeTo12Hour(time)}
        </Text>
      </View>
      <Ionicons size={24} name="call-outline" color="white" />
    </View>
  );
};

export default CallItem;