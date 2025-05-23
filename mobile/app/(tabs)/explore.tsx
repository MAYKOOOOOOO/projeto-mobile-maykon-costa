import { StyleSheet, Image, Platform, Button } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#blue', dark: '#1887ab'}}
      headerImage={
        
        <IconSymbol
          size={310}
          color="#1887ab"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">SUPORTE</ThemedText>
      </ThemedView>
      <ThemedText>TEM ALGUMA DUVIDA?</ThemedText>
      <Collapsible title="nao consegue acessar seu saldo?">
        <ThemedText>
          tente fazer o seguuinte:{' '}
        </ThemedText>
        <ThemedText>
          clicar no simbolo de casinha para recarregar a pagina
          se ainda tiver duvidas entre em contato pelo numero 99515937.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="o app funciona em outros dispositivos?">
        <ThemedText>
          como usar o app em outro aparelho? instale no Android, iOS, na web.
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
      </Collapsible>
      <Collapsible title="numero da empresa: 99518937">
      </Collapsible>
      <Collapsible title="como funciona os empréstimos em nossos serviços?">
        <ThemedText>
          Open <ThemedText type="defaultSemiBold">instale pela play story, app store ou acesse no navegador</ThemedText> {' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>

          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="denunciar algum roubo ou fraude?">
        <ThemedText>
          acesse o numero 190 para denunciar{' '}
          <ThemedText type="defaultSemiBold"></ThemedText> 
          
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="assistente IA">
        <ThemedText>
          para falar com a nossa assistente IA acesse o site " assistente.domaykopix.com.br" e tire suas duvidas{' '}

          <ThemedText type="defaultSemiBold"><col /></ThemedText> 
          <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          <Button
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="chat de IA maykopix"
/>
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
