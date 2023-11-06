import React, { useState } from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import PanelButton from '../components/PanelButton';

type StyleArray = ViewStyle[][];

const PruebaScreen = () => {

    const [ excersise, setExcersise] = useState(1);
    const [format, setFormat] = useState<StyleArray>([
        //SquarePanel 0
        [styles.justifyStart],
        //Purple Square 1
        [styles.boxShort],
        //Coral Square 2
        [styles.boxLongHeight],
        //Cyan Square 3
        [styles.boxShort],
    ]);

    const handlePress = (value: number) => {
        setExcersise(value);

        if (value === 1){
            setFormat([
                //SquarePanel 0
                [styles.justifyStart],
                //Purple Square 1
                [styles.boxShort],
                //Coral Square 2
                [styles.boxLongHeight],
                //Cyan Square 3
                [styles.boxShort],
            ]);
        }
        if ( value === 2 ){
            setFormat([
                //SquarePanel 0
                [styles.justifyCenter],
                //Purple Square 1
                [styles.boxShort],
                //Coral Square 2
                [styles.boxShort],
                //Cyan Square 3
                [styles.boxLongWidth],
            ]);
        }
        if ( value === 3 ){
            setFormat([
                //SquarePanel 0
                [styles.justifyCenter],
                //Purple Square 1
                [styles.boxShort, styles.alignSelfRight],
                //Coral Square 2
                [styles.boxShort],
                //Cyan Square 3
                [styles.boxShort, styles.alignSelfCenter],
            ]);
        }
        if ( value === 4 ){
            setFormat([
                //SquarePanel 0
                [styles.justifyBetween, styles.alignBetween],
                //Purple Square 1
                [styles.boxShort, styles.alignSelfRight],
                //Coral Square 2
                [styles.boxShort, styles.alignSelfCenter],
                //Cyan Square 3
                [styles.boxShort],
            ]);
        }
        if ( value === 5 ){
            setFormat([
                //SquarePanel 0
                [styles.flexRow, styles.justifyBetween],
                //Purple Square 1
                [styles.boxStrechHeight],
                //Coral Square 2
                [styles.boxStrechHeight],
                //Cyan Square 3
                [styles.boxStrechHeight],
            ]);
        }
        if ( value === 6 ){
            setFormat([
                //SquarePanel 0
                [],
                //Purple Square 1
                [styles.boxFlexShort],
                //Coral Square 2
                [styles.boxFlexShort],
                //Cyan Square 3
                [styles.boxFlexLong],
            ]);
        }
        if ( value === 7 ){
            setFormat([
                //SquarePanel 0
                [styles.justifyCenter, styles.alignItemsCenter],
                //Purple Square 1
                [styles.boxShort],
                //Coral Square 2
                [styles.boxShort],
                //Cyan Square 3
                [styles.boxShort],
            ]);
        }
        if ( value === 8 ){
            setFormat([
                //SquarePanel 0
                [styles.justifyCenter, styles.alignItemsCenter],
                //Purple Square 1
                [styles.boxShort],
                //Coral Square 2
                [styles.boxShort, { left: 100 }],
                //Cyan Square 3
                [styles.boxShort],
            ]);
        }
        if ( value === 9 ){
            setFormat([
                //SquarePanel 0
                [styles.justifyCenter, styles.alignItemsCenter],
                //Purple Square 1
                [styles.boxShort, { top: 100 }],
                //Coral Square 2
                [styles.boxShort, { left: 100 }],
                //Cyan Square 3
                [styles.boxShort],
            ]);
        }
        if ( value === 10 ){
            setFormat([
                //SquarePanel 0
                [styles.flexRow,styles.justifyCenter, styles.alignItemsCenter],
                //Purple Square 1
                [styles.boxShort],
                //Coral Square 2
                [styles.boxShort, { top: 50 }],
                //Cyan Square 3
                [styles.boxShort],
            ]);
        }
    };

    return (
    <View style={styles.container}>
        <View>
            <Text style={styles.title}>Ejercicio: {excersise}</Text>
        </View>
        {/* Buttons Panel */}
        <View style={styles.buttonPanel}>
            <PanelButton value={1} handler={handlePress}  />
            <PanelButton value={2} handler={handlePress}  />
            <PanelButton value={3} handler={handlePress}  />
            <PanelButton value={4} handler={handlePress}  />
            <PanelButton value={5} handler={handlePress}  />
        </View>

        <View style={styles.buttonPanel}>
            <PanelButton value={6} handler={handlePress}  />
            <PanelButton value={7} handler={handlePress}  />
            <PanelButton value={8} handler={handlePress}  />
            <PanelButton value={9} handler={handlePress}  />
            <PanelButton value={10} handler={handlePress}  />
        </View>

        {/* Squares */}
        <View style={[...format[0], styles.squaresPanel]}>
            <View style={[...format[1], styles.boxPurple]} />
            <View style={[...format[2], styles.boxCoral]} />
            <View style={[...format[3], styles.boxCyan]} />
        </View>
    </View>
  );
};

export default PruebaScreen;


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4d1010',
        flex:1,
    },
    title: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        marginBottom: 10,
    },
    buttonPanel:{
        flex:1 / 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    },
    squaresPanel:{
        flex:8 / 10,
    },
    boxPurple: {
        backgroundColor: 'purple',
        borderColor: '#FFF',
        borderWidth: 10,
    },
    boxCoral: {
        backgroundColor: 'coral',
        borderColor: '#FFF',
        borderWidth: 10,
    },
    boxCyan: {
        backgroundColor: 'cyan',
        borderColor: '#FFF',
        borderWidth: 10,
    },

    flexRow:{
        flexDirection: 'row',
    },

    boxShort:{
        width: 100,
        height: 100,
    },
    boxLongHeight:{
        width: 100,
        flex:1,
    },
    boxStrechHeight:{
        width: 100,
        alignSelf: 'stretch',
    },
    boxLongWidth:{
        height: 100,
        alignSelf: 'stretch',
    },
    boxFlexShort:{
        flex: 3 / 12,
    },
    boxFlexLong:{
        flex: 6 / 12,
    },

    alignItemsCenter:{
        alignItems: 'center',
    },
    alignBetween:{
        alignContent: 'space-between',
    },

    alignSelfRight:{
        alignSelf: 'flex-end',
    },
    alignSelfCenter:{
        alignSelf: 'center',
    },

    justifyBetween:{
        justifyContent: 'space-between',
    },
    justifyStart:{
        justifyContent: 'flex-start',
    },
    justifyCenter:{
        justifyContent: 'center',
    },

});
