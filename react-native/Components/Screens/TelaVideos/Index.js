import React from 'react';
import { Container} from '../../atoms';
import { BarApp} from '../../mulecules';
import { FieldText } from '../../atoms';
import {ListCardModules} from '../../organism';
import { SafeAreaView ,ScrollView} from 'react-native';


export default function App() {
  return (
    <SafeAreaView>
       <ScrollView> 
          <Container align="flex-start" justify="flex-start">
              <BarApp item={{title:'Banca'}}/>
              <FieldText fontFamily="medium" size={14} mt={0} ml={18} mb={0}
                >Noticias dos principais jornais</FieldText>
              <ListCardModules/>
          </Container>
       </ScrollView>
    </SafeAreaView>
  );
}
