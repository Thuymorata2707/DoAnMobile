import { View, Text ,StyleSheet,SafeAreaView,Pressable} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';


const LoginScreen = () => {
    const navigation = useNavigation();
  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
    <SafeAreaView>
      <View style={{ height: 80 }} />
      <Entypo
        style={{ textAlign: "center" }}
        name="spotify"
        size={80}
        color="white"
      />
      <Text
        style={{
          color: "white",
          fontSize: 40,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 40,
        }}
      >
        Millions of Songs Free on spotify!
      </Text>

      <View style={{ height: 80 }} />
      <Pressable
        onPress={() => navigation.navigate("TabNavigation")}
        style={{
          backgroundColor: "#1DB954",
          padding: 10,
          marginLeft: "auto",
          marginRight: "auto",
          width: 300,
          borderRadius: 25,
          alignItems: "center",
          justifyContent: "center",
          marginVertical:10
        }}
      >
        <Text>Sign In with spotify</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate("TabNavigation")}
        style={{
          backgroundColor: "#131624",
          padding: 10,
          marginLeft: "auto",
          marginRight: "auto",
          width: 300,
          borderRadius: 25,
          alignItems: "center",
          justifyContent: "center",
          flexDirection:"row",
          alignItems:"center",
          marginVertical:10,
          borderColor:"#C0C0C0",
          borderWidth:0.8
        }}
      >
        <MaterialIcons name="phone-android" size={24} color="white" />
        <Text style={{fontWeight:"500",color:"white",textAlign:"center",flex:1}}>Continue with phone number</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate("TabNavigation")}
        style={{
          backgroundColor: "#131624",
          padding: 10,
          marginLeft: "auto",
          marginRight: "auto",
          width: 300,
          borderRadius: 25,
          alignItems: "center",
          justifyContent: "center",
          flexDirection:"row",
          alignItems:"center",
          marginVertical:10,
          borderColor:"#C0C0C0",
          borderWidth:0.8
        }}
      >
      <AntDesign name="google" size={24} color="red" />
        <Text style={{fontWeight:"500",color:"white",textAlign:"center",flex:1}}>Continue with Google</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate("TabNavigation")}
        style={{
          backgroundColor: "#131624",
          padding: 10,
          marginLeft: "auto",
          marginRight: "auto",
          width: 300,
          borderRadius: 25,
          alignItems: "center",
          justifyContent: "center",
          flexDirection:"row",
          alignItems:"center",
          marginVertical:10,
          borderColor:"#C0C0C0",
          borderWidth:0.8
        }}
      >
       <Entypo name="facebook" size={24} color="blue" />
        <Text style={{fontWeight:"500",color:"white",textAlign:"center",flex:1}}>Sign In with facebook</Text>
      </Pressable>
    </SafeAreaView>
  </LinearGradient>
);
};

export default LoginScreen;

const styles = StyleSheet.create({});