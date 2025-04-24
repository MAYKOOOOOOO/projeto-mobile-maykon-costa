import { Image, StyleSheet, Platform, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#afffff', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/image.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">maykinhopix</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">area de transaçao de pix <br></br>
        <Button
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="transferencia via pix"
/>
        </ThemedText>
       
        <ThemedText>
          seu saldo: r$500.00
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
      <ThemedText type="subtitle">Empréstimos <br></br>
        <Button
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="fazer um emprestimo"
/></ThemedText>
        <ThemedText>
        faça seu dinheiro render 😊👌
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">PAGUE SUAS CONTAS AQUI! <br></br> <Button
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="PAGAR BOLETOS/CONTAS"
/></ThemedText>
        
        <ThemedText>
        muito obrigado por usar nossos serviços, qualquer duvida acesso o suporte😁
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 350,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
