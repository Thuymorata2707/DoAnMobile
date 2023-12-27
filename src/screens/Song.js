import { View, Text,ScrollView,Pressable,TextInput ,Inp, Image, FlatList } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons, AntDesign, MaterialCommunityIcons, Entypo } from '@expo/vector-icons'; // Make sure to import the correct icon libraries
import { useNavigation } from '@react-navigation/native';
import SongItem from '../components/SongItem';


const Song = () => {
  const navigation = new useNavigation();
  return (
    <>
    <LinearGradient colors={["#614385", "#516395"]} style={{ flex: 1 }}>
    <ScrollView style={{ flex: 1, marginTop: 50 }}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={{ marginHorizontal: 10 }}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </Pressable>
    

      <Pressable
            style={{
              marginHorizontal: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 9,
            }}
          >
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                backgroundColor: "#42275a",
                padding: 9,
                flex: 1,
                borderRadius: 3,
                height: 38,
              }}
            >
              <AntDesign name="search1" size={20} color="white" />
              <TextInput
                // value={input}
                // onChangeText={(text) => handleInputChange(text)}
                placeholder="Find in Liked songs"
                placeholderTextColor={"white"}
                style={{ fontWeight: "500",color:"white" }}
              />
            </Pressable>
            <Pressable
              style={{
                marginHorizontal: 10,
                backgroundColor: "#42275a",
                padding: 10,
                borderRadius: 3,
                height: 38,
              }}
            >
              <Text style={{ color: "white" }}>Sort</Text>
            </Pressable>
          </Pressable>
          <View style={{ height: 50 }} />
      <View style={{ marginHorizontal: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
          Liked Songs
        </Text>
        <Text style={{ color: "white", fontSize: 13, marginTop: 5 }}>
          430 songs
        </Text>
      </View>
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: 10,
            }}
          >
            <Pressable
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#1DB954",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign name="arrowdown" size={20} color="white" />
            </Pressable>

            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <MaterialCommunityIcons
                name="cross-bolnisi"
                size={24}
                color="#1DB954"
              />
              <Pressable
                // onPress={playTrack}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#1DB954",
                }}
              >
                <Entypo name="controller-play" size={24} color="white" />
              </Pressable>
            </View>
          </Pressable>
          
          <Pressable
   
      style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
    >
             <Image
             style={{ width: 50, height: 50, marginRight: 10 }}
              source={require('../assets/images/albums/blank-face-lp.jpg')}
           />
           <View style={{ flex: 1 }}>
             <Text
               numberOfLines={1}
               style={
                    {
                       fontWeight: "bold",
                       fontSize: 14,
                       color: "#3FFF00",
                     }
                   
               }
             >
               Sơn Tùng MTP 
             </Text>
             <Text style={{ marginTop: 4, color: "#989898" }}>
               Cơn mưa ngang
             </Text>
           </View>
     
           <View
             style={{
               flexDirection: "row",
               alignItems: "center",
               gap: 7,
               marginHorizontal: 10,
             }}
           >
             <AntDesign name="heart" size={24} color="#1DB954" />
             <Entypo name="dots-three-vertical" size={24} color="#C0C0C0" />
           </View>
         </Pressable>

         <Pressable
   
   style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
 >
          <Image
          style={{ width: 50, height: 50, marginRight: 10 }}
           source={require('../assets/images/albums/ex-re.jpg')}
        />
        <View style={{ flex: 1 }}>
          <Text
            numberOfLines={1}
            style={
                 {
                  fontWeight: "bold", fontSize: 14, color: "white" 
                  }
                
            }
          >
            Ex-re
          </Text>
          <Text style={{ marginTop: 4, color: "#989898" }}>
           Taylor Swift
          </Text>
        </View>
  
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 7,
            marginHorizontal: 10,
          }}
        >
          <AntDesign name="heart" size={24} color="#1DB954" />
          <Entypo name="dots-three-vertical" size={24} color="#C0C0C0" />
        </View>
      </Pressable>
      <Pressable
   
   style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
 >
          <Image
          style={{ width: 50, height: 50, marginRight: 10 }}
           source={require('../assets/images/albums/born-to-die.jpg')}
        />
        <View style={{ flex: 1 }}>
          <Text
            numberOfLines={1}
            style={
                 {
                  fontWeight: "bold", fontSize: 14, color: "white" 
                  }
                
            }
          >
            BornToDie
          </Text>
          <Text style={{ marginTop: 4, color: "#989898" }}>
           Shubhh
          </Text>
        </View>
  
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 7,
            marginHorizontal: 10,
          }}
        >
          <AntDesign name="heart" size={24} color="#1DB954" />
          <Entypo name="dots-three-vertical" size={24} color="#C0C0C0" />
        </View>
      </Pressable>
        
          
   
        
        </ScrollView>
        </LinearGradient>
        <Pressable
          // onPress={() => setModalVisible(!modalVisible)}
          style={{
            backgroundColor: "#5072A7",
            width: "90%",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 15,
            position: "absolute",
            borderRadius: 6,
            left: 20,
            bottom: 10,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Image
              style={{ width: 40, height: 40 }}
              // source={{ uri: currentTrack?.track?.album?.images[0].url }}
            />
            <Text
              numberOfLines={1}
              style={{
                fontSize: 13,
                width: 220,
                color: "white",
                fontWeight: "bold",
              }}
            >
              {/* {currentTrack?.track?.name} •{" "}
              {currentTrack?.track?.artists[0].name} */}
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <AntDesign name="heart" size={24} color="#1DB954" />
            <Pressable>
              <AntDesign name="pausecircle" size={24} color="white" />
            </Pressable>
          </View>
        </Pressable>
        
   </>

  )
}

export default Song
