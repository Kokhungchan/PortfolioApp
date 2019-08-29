import React, {Component} from 'react'
import { View, Text, ImageBackground,TouchableOpacity,Image, Linking, ScrollView, Button} from 'react-native'
import styles from './styles'


class ProfileScreen extends Component {
    
    constructor (props) {
        super(props)

        this.state = {
            activeIndex: 0
        }
    }

    segmentClick(index) {
        this.setState({
            activeIndex:index
        })
    }

    checkActive = (index) => {
        if(this.state.activeIndex !== index){
            return (
                {color: 'grey'}
            )
        }
        else {
            return(
                {}
            )
        }
    }

    renderSection = () => {

        if(this.state.activeIndex == 0)
        {
            return(
                <View style={styles.bottomContainer}>
                <ScrollView scrollEventThrottle={16}>
                    <View style={{padding:20}}>
                        <View style={{height: 100, flexDirection:"row"}}>
                           <Image source = {require('../../Assets/copyright.png')} style={{height: 60, width: 60, }}></Image>
                           <View style={{height: 100, flexDirection:"column", width:204}}>
                            <Text style={{ fontSize: 24, fontWeight: '400', marginLeft: 10}}>
                                Personal Website
                            </Text>

                            <Text style={{fontSize: 14, marginLeft:10}}>
                                Just a link to my personal website coded with jsquery and html
                            </Text>
                            </View>

                            <View >
                                <TouchableOpacity style={styles.openContainer}>
                                    <Text onPress={() => {Linking.openURL("https://kokhungchan.github.io")}}>
                                        OPEN
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{height: 100, flexDirection:"row"}}>
                           <Image source = {require('../../Assets/resume.png')} style={{height: 60, width: 60, }}></Image>
                           <View style={{height: 100, flexDirection:"column", width:204}}>
                            <Text style={{ fontSize: 24, fontWeight: '400', marginLeft: 10}}>
                                Resume
                            </Text>



                            <Text style={{fontSize: 14, marginLeft:10}}>
                                Link to my resume
                            </Text>
                            </View>

                            <View >
                                <TouchableOpacity style={styles.openContainer}>
                                    <Text onPress={() => {Linking.openURL("https://drive.google.com/file/d/18J-G3HfoRInj5DkYBR6efVUn1udFUGDE/view")}}>
                                        OPEN
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{height: 100, flexDirection:"row"}}>
                           <Image source = {require('../../Assets/website.png')} style={{height: 60, width: 60, }}></Image>
                           <View style={{height: 100, flexDirection:"column", width:204}}>
                            <Text style={{ fontSize: 24, fontWeight: '400', marginLeft: 10}}>
                                ToDo App
                            </Text>

                            <Text style={{fontSize: 14, marginLeft:10}}>
                                A simple todo app coded in react-native
                            </Text>
                            </View>

                            <View >
                                <TouchableOpacity style={styles.openContainer}>
                                    <Text>
                                        OPEN
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </View>
            )
        }
        else if (this.state.activeIndex == 1) {
            return(
            <View style={styles.bottomContainer}>
                <ScrollView>
                <Text style={styles.aboutTitle}>
                    About Me
                </Text>
                <Text style={styles.aboutDesc}>
                    Hello! I am Chan Kok Hung, a fresh Graduate studying in Software Engineering. 
                    I specialize in Front End UI design field. 
                    Familiar with html, css, Javascripts and designing websites, iOS mobile applications.
                </Text>
                <Text style={styles.aboutTitle}>
                    Skills
                </Text>
                <View style={{flexDirection: "row", padding:20, justifyContent:'space-around'}}>
                <Image source ={require("../../Assets/react.png")} style={{height:60,width:60}}></Image>
                <Image source ={require("../../Assets/css3.png")} style={{height:70,width:60}}></Image>
                <Image source ={require("../../Assets/javascript.png")} style={{height:60,width:60}}></Image>
                
                </View>
                <View style ={{flexDirection:"row",padding:20, justifyContent:'space-around'}}>
                <Image source ={require("../../Assets/apple.png")} style={{height:75,width:60}}></Image>
                <Image source ={require("../../Assets/java.png")} style={{height:80,width:60}}></Image>
                </View>
                </ScrollView>
            </View>
            )
        }
    }

    render() {
        return(
        <View style={styles.mainbody}>
            <View style={styles.topContainer}>
                <ImageBackground source={require('../../Assets/package-lock.jpeg')} style={styles.imageTop}>
                    <View style={styles.profileImage}>
                    </View>

                    <Text style={styles.titleName}>
                        Chan Kok Hung
                    </Text>

                    <Text style={styles.subtitle}>
                        iOS Developer
                    </Text>

                    <View style={styles.centerContainer}>
                        <View style={styles.portfolioContainer}>
                        <TouchableOpacity transparent onPress={() => this.segmentClick(0)}
                        active={this.state.activeIndex == 0}>
                        <Text style={[{color:'black',fontSize:20}, this.state.activeIndex == 0? {} : {color:'grey', }]}>Portfolio</Text>
                       </TouchableOpacity>
                        

                       <TouchableOpacity transparent onPress={() => this.segmentClick(1)}
                       active={this.state.activeIndex == 1}>
                        <Text style={[{color:'black',fontSize:20}, this.state.activeIndex == 1? {} : { color: 'grey'}]}>About</Text>
                       </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>

            <View style={styles.middleContainer}>
                <Text style={styles.email} onPress={() => Linking.openURL('mailto:kokhungchan@gmail.com')}>
                    kokhungchan@hotmail.com
                </Text>
            </View>


            {this.renderSection()}

        </View>

        );
    }
}



export default ProfileScreen