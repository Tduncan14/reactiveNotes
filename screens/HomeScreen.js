import React, {useEffect,useState,useContext} from 'react';
import {Text,FlatList,TouchableOpacity} from 'react-native';
import {Button} from 'native-base';
import { Layout } from '../components/Layout';
import { NoteContent } from '../components/Card';
import { NoteContext } from '../contexts/NoteContext';




const HomeScreen = props => {

    const {getContextNotes} = userContext();
    const [notes,setNotes] = useState();

    useEffect(() => {

        const getData = () => {
            getContextNotes()
        };

        getData()

    },[])



    return(
        <View>
            
        </View>
    );


}