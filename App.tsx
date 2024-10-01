import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Button, StyleSheet, Text,TextInput, View ,Image,SafeAreaView,ScrollView} from 'react-native';
import {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const stack = createNativeStackNavigator ();


export default function App() {
  return(
  <NavigationContainer>
    <stack.Navigator>
      <stack.Screen name='HomePage' component={MainScreen}/>
    </stack.Navigator>
  </NavigationContainer>);

};

function MainScreen()
    { 
    const [dishName, setdish] = useState('');
    const [Description, setDescription] = useState('');
    //additional
    const [Course, setCourse] = useState('');
    const [Price, setPrice] = useState('');


    console.log("App starting up");
    return (
      <View>
      <SafeAreaView>
      <ScrollView>
      <View style={styles.mainPicture}>
      <Image style={styles.ImageSize}source={require('./img/mychef.jpg')}></Image>
      </View>

      
      <Text  style={styles.welcomeText}>Welcome, Christoffel!</Text>
      <View style={styles.InputFlex}>
      <Text  style={styles.menuText}>MENU</Text> 
      {/* this is my starters code */}
      <Text  style={styles.startersText}>STARTERS</Text>
      <Text  style={styles.startersNameText}>Risotto:{'\n'} Wild Mushroom Arancini with Mozzarella
 </Text>
      <View style={styles.startPicture}>
      <Image style={styles.startersImageSize}source={require('./img/STARTERS.jpg')}></Image>
      </View>
      <Text  style={styles.PricestartersNameText}>PRICE: R120 
 </Text>
 <Button title='Select'></Button>
       {/* this is my main course code*/}
       <Text  style={styles.maincourseText}>MAIN COURSE</Text>
       <Text  style={styles.maincourseNameText}>Sautéed:{'\n'}A little butter, minced garlic, and lemon-pepper seasoning.
 </Text>
      <View style={styles.maincoursePicture}>
      <Image style={styles.maincourseImageSize}source={require('./img/MAIN COURSE.jpg')}></Image>
      </View>
      <Text  style={styles.PriceMainNameText}>PRICE: R120 
 </Text>
 <Button title='Select'></Button>
      {/* this is my desert code*/}
      <Text  style={styles.desertText}>DESERT</Text>
      <Text  style={styles.desertNameText}>Potluck: {'\n'} White Chocolate OREO Cookie Balls
 </Text>
      <View style={styles.desertPicture}>
      <Image style={styles.desertImageSize}source={require('./img/POTLUCK.png')}></Image>
      </View>
      <Text  style={styles.PricedesertNameText}>PRICE: R120 
 </Text>
      <Button title='Select'></Button>
      <Text  style={styles.manageText}>MENU MANAGEMENT</Text> 
    {/* <Text>Welcome, Christoffel!</Text> */}
      <Text style={styles.dishText}>Dish Name:</Text><TextInput style={styles.InputBoxs} placeholder="Enter dish name" onChangeText={newText => setdish(newText)}/>
      </View>

      <Text style ={styles.DescriptionText}>Description:</Text><TextInput style={styles.InputBoxs} placeholder="Enter Description" onChangeText={newText => setDescription(newText)}/>
      <Text style ={styles.courseText}>Select the course:</Text><TextInput style={styles.InputBoxs} placeholder="select the course" onChangeText={newText => setCourse(newText)}/>
      <Text style ={styles.priceText}>Price:</Text><TextInput style={styles.InputBoxs} placeholder="price" onChangeText={newText => setPrice(newText)}/>

      <Button title = "Add To Menu"onPress={() => {
        console.log("Dish Name:" + dishName + "   Description:" + Description + "   Course:" + Course + "   Price:" + Price)
    }}/>
    </ScrollView>
    </SafeAreaView>
      </View>
    
  );
}

const styles = StyleSheet.create({
  // container: {
    welcomeText: {
      paddingTop: 40,
      color: 'purple',
      fontWeight: 'bold',
      fontSize: 28,
      textAlign: 'center'
   },
   //menu text
   menuText:{
    paddingTop: 0,
    color:'black',
    fontWeight: 'bold',
    fontSize: 25,
    textDecorationLine:'underline',
  },
  //
 
  //
    dishText:{
      paddingTop: 20,
      color:'black',
      fontWeight:'bold',
      fontSize: 20,
    },
    DescriptionText:{
      paddingTop: 20,
      color:'black',
      fontWeight:'bold',
      fontSize: 20,
   },
//two addition
   courseText:{
    paddingTop: 20,
    color:'black',
    fontWeight:'bold',
    fontSize: 20,
   },
   priceText:{
    paddingTop: 20,
    color:'black',
    fontWeight:'bold',
    fontSize: 20,
   },
//last addition
   mainPicture:{
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center'
   },

    ImageSize:{width: 350,
    height: 250},
    //staters picture//
    startersText:{
      paddingTop: 20,
      color:'black',
      fontWeight:'bold',
      fontSize: 20,
    },
    startPicture:{
      paddingTop: 20,
      justifyContent: 'center',
      // alignItems: 'center',
      alignItems:'center'
     },
     startersImageSize:{width: 350,
      height: 150},

      startersNameText:{
        paddingTop: 10,
        color:'purple',
        fontWeight:'bold',
        fontSize:15,
      },
      PricestartersNameText:{
        paddingTop: 10,
        color:'purple',
        fontWeight:'bold',
        fontSize:15,
      },
//  
//maincourse code
maincourseText:{
  paddingTop: 20,
  color:'black',
  fontWeight:'bold',
  fontSize: 20,
},

maincoursePicture:{
  paddingTop: 20,
  justifyContent: 'center',
  alignItems: 'center',
 },
 maincourseImageSize:{width: 350,
  height: 150},

maincourseNameText:{
  paddingTop: 10,
  color:'purple',
  fontWeight:'bold',
  fontSize:15,
},
PriceMainNameText:{
  paddingTop: 10,
  color:'purple',
  fontWeight:'bold',
  fontSize:15,
},

//

//desert code
desertText:{
  paddingTop: 20,
  color:'black',
  fontWeight:'bold',
  fontSize: 20,
},
desertPicture:{
  paddingTop: 20,
  justifyContent: 'center',
  alignItems: 'center',
 },
desertImageSize:{width: 350,
  height: 150},

  desertNameText:{
    paddingTop: 10,
    color:'purple',
    fontWeight:'bold',
    fontSize:15,
  },
  PricedesertNameText:{
    paddingTop: 10,
    color:'purple',
    fontWeight:'bold',
    fontSize:15,
  },
  
//
//manage text//
manageText:{
  paddingTop: 50,
  color:'black',
  fontWeight: 'bold',
  fontSize: 25,
  textDecorationLine:'underline',
},
//
    InputFlex:{flexDirection:'column',
    justifyContent:'space-evenly',
    marginTop: 30},

    InputBoxs :{
    }
    
  });


 
