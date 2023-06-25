import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import { MotiView, MotiText, AnimatePresence } from "moti";

export default function Moviments({ data}) {
    const [showValue, setShowValue] = useState(false); 

    return (
        <TouchableOpacity style={styles.container} onPress={ () => setShowValue(!showValue) }>
            <Text style={styles.date}>{data.date}</Text>
            <View style={styles.content}>
                <Text style={styles.label}>{data.label} </Text>
                { showValue ? (
                    <AnimatePresence exitBeforeEnter>
                        <MotiText style={data.type === 1 ? styles.value : styles.espenses} from={{translateX: 100}} animate={{translateX: 0}} transition={{type: 'timing', duration: 500}}>
                        {data.type === 1 ? `R$ +${data.value}` : `R$ -${data.value}`}
                        </MotiText>
                    </AnimatePresence>
                ) : (
                    <AnimatePresence exitBeforeEnter>
                        <MotiView style={styles.skeleton} from={{opacity: 0}} animate={{opacity: 1}} transition={{type: 'timing'}}>

                        </MotiView>
                    </AnimatePresence>
                )}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#7a7a7a',
    },
    content: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginTop: 2,
        marginBottom: 8,
    },
    date: {
        color: '#747272',
        fontWeight: 'bold',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    value: {
        fontSize: 16,
        color: '#2ecc71',
        fontWeight: 'bold',
    },
    espenses: {
        fontSize: 16,
        color: '#e74040',
        fontWeight: 'bold',
    },
    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#ababab',
        borderRadius: 8,
    }
})