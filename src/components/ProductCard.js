import React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppText from "./AppText";
import colors from "../config/colors";

//components/ProductCard.js


function Card({ title, price, description, imageUrl, qty }) {
  return (
    <View style={styles.card}>
    <Image
        style={styles.image}
        tint="light"
        uri={imageUrl}
    />
    <View style={styles.detailsContainer}>
        <AppText style={styles.title} numberOflines={1}>
        {title}
        </AppText>
        <AppText style={styles.price} numberOflines={1}>
        {price}
        </AppText>
        <AppText style={styles.description} numberOflines={2}>
        {description}
        </AppText>
        <AppText style={styles.qty} numberOflines={1}>
        {qty}
        </AppText>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  description: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;