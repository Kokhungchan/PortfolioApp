
const styles= {
    mainbody:{
         flex:1,
     },

     topContainer: {
         alignItems: 'center',
         justifyContent: 'center',
         height: '45%',
      },

     imageTop: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
     },

     middleContainer: {
      backgroundColor: '#9099A2',
      height: '10%',
      alignItems: 'center',
      justifyContent: 'center',

      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6, 
      zIndex:1,
     },

     bottomContainer: {
      height: '45%',
      backgroundColor: '#D5D5D5',
      textAlign: 'center',
      justifyContent: 'center',
      
     },

     profileImage: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#fff',
        backgroundColor: '#eee',
        marginTop: 80,
     },


     titleName: {
        textAlign: 'center',
        color: 'black',
        fontWeight: "bold",
        fontSize: 23,
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
     },

     subtitle: {
      textAlign: 'center',
      color: 'black',
      fontSize: 14,
      marginBottom: 25,
     },

     email: {
      textAlign: 'center',
      color: 'white',
      fontSize: 16,
     },

     centerContainer: {
      width:'100%',
      flex:1,
      backgroundColor: 'rgba(255,255,255, .1)',
      
     },

     portfolioContainer: {
      flexDirection: 'row',
      justifyContent:'space-around',
      borderTopWidth:1,
      borderTopColor:'#eae5e5',
     },

     openContainer: {
      color: 'black',
      borderColor: 'black',
      borderRadius: 20,
      borderWidth: 2,
      borderColor: '#707070',
      padding: 10,
      backgroundColor: '#8BA2B2',
      marginRight: 100,
   },

   aboutTitle: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 22,
      marginTop: 30,
     },

     aboutDesc: {
      textAlign: 'center',
      fontSize: 18,
      marginTop: 15,
      padding:20,
     },

}

export default styles;