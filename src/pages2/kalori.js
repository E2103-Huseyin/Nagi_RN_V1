import React from 'react';
import { SafeAreaView, View, Text, Button, ImageBackground,StyleSheet,Dimensions,TextInput } from 'react-native';

const Kalori = (props) => {
    // const userValue = props.route.params.selectedValue.url
    const [value, onChangeText] = React.useState('5');

    return (
        <SafeAreaView>
            <View style={styles.Container}>

                <ImageBackground
                    // source={{uri:userValue}}
                    source={{uri:"https://images.pexels.com/photos/634030/pexels-photo-634030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}}
                    style={styles.imageContainer}>

                    <Text style={styles.text0}>Günlük kalori ihtiyacı</Text>
                    <Text style={styles.text1}>Günlük alınması gereken miktar kişiden kişiye değişmektedir. Hesaplayıcı, 1 günde harcanan kaloriyi tespit ederken Harris-Benedict prensibini kullanmaktadır.</Text>

                </ImageBackground>



               
                {/* <Text style={{ fontSize: 40 }}>Value: {userValue}</Text> */}
                <Button
                    style={styles.button}
                    title="Back"
                    onPress={() => props.navigation.goBack()}
                    
                />
            </View>

            <TextInput
                value={value}
                onChangeText={(text) => onChangeText(text*2)}
                placeholder={"aaaaaaaaaaa"}
               
            />



            <Text style={styles.text2}>{value} </Text>
        </SafeAreaView>
    );
}

export default Kalori;

const styles = StyleSheet.create({
    Container: {
        // backgroundColor:'rgba(0,0,0,0.5)'
        backgroundColor:'red'
        

    },
    imageContainer: {
        height: Dimensions.get('window').height / 2,
        resizeMode: 'contain',
        

    },
    // image: {
       
    //     height: Dimensions.get('window').height / 6,
    //     resizeMode: 'contain'
    // },
    button: {
        
        
       
       
    },
    text0: {
        fontSize:40,
        color:'#3d4'
        
        
    },
    text2: {
        
        backgroundColor:'#2e6'
        
        
    },

})