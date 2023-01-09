import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import DeafultButton from "../../components/Common/DefaultButton";
import ExplanationCard from "../../components/Explanation/ExplanationCard";
import ChangeNavigationService from "../../Services/ChangeNavigationService";

export default function AppExplanation() {
  const navigation = useNavigation();
  const [showHome, setShowHome] = useState("false");
  const startDate = new Date();
  const month = `${startDate.getMonth() + 1}`.padStart(2, "0");
  const day = `${startDate.getDate()}`.padStart(2, "0");
  const appStartData = `${startDate.getFullYear()}-${month}-${day}`;

  function handleNavHome() {
    navigation.navigate("Home");
  }

  function handleSetShowHome() {
    if (showHome !== "true") {
      ChangeNavigationService.setShowHome({ showHome: "true", appStartData })
        .then(() => console.log(`Sucesso! ${showHome} ${appStartData}`))
        .catch((err) => console.log(err));
      setShowHome("true");

      handleNavHome();
    }

    handleNavHome();
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>
            Antes, deixa {"\n"} eu te explicar....
          </Text>
          <ExplanationCard />
          <Text style={styles.descriptionCta}>
            Pronto (a) para subir de nível na vida?
          </Text>
          <Text style={styles.description}>
            Na próxima tela você vai pode escolher {"\n"} seus 4 habitos de
            forma individual.
          </Text>
          <DeafultButton
            buttonText={"continuar"}
            handlePress={handleSetShowHome}
            width={250}
            height={50}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21, 21, 21, 0.98)",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 40,
  },
  descriptionCta: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    color: "white",
    textAlign: "center",
    marginBottom: 30,
  },
});
