// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  Image,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  CodePane,
  Code
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import soCoolGif from '../assets/soCool.gif';
import notCoolGif from '../assets/notcool.gif';
import dexterAngry from '../assets/dexterAngry.gif';
import docsifyLogo from '../assets/docsify.svg';
import docsifyInit from '../assets/init.png';

// Require CSS
require("normalize.css");

const theme = createTheme({
  white: "white",
  red: '#e53935',
  blue: "#2962ff",
  blueLight: "#768fff",
  blueDark: "#0039cb",
  green: "#7cb342",
  teal: '#00796b',
  orange: "#ffa726",
  greyDark: "#263238",
  greyDarker: "#212121",
  black: 'black',
  primary: '#263238',
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
  });

const iframeStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
};


export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} bgColor="greyDark" transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="greyDark">
          <Heading fit fill>J'ai intégré API_NAME hier...</Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="red">
          <Heading fit textColor="white">[...] pas de doc, c'est de la m**** !</Heading>
          <Image src={dexterAngry} width={500} margin="80px auto"></Image>
        </Slide>

        <Slide transition={["zoom"]} bgColor="blueDark">
          <Heading size={1} fit caps bold lineHeight={1} textColor="blueLighter">
            Clément Le Biez
          </Heading>
          <Text caps fit margin="50px 0 0" textColor="orange" size={3} bold>
            Front end developer @ Yousign
          </Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="teal">
          <Image src={docsifyLogo} width={350}></Image>
          <Heading caps size={3} textColor="green" margin="100px 0 0" >Docsify</Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="greyDarker">
          <Text caps fit textColor="green" size={1} bold>
            Markdown
          </Text>
          <Appear>
            <Text caps fit textColor="orange" size={1} bold>
              On the fly
            </Text>
          </Appear>
          <Appear>
            <Text caps fit textColor="red" size={1} bold>
              Look and feel
          </Text>
          </Appear>
          <Appear>
            <Text caps fit textColor="white" size={1} bold>
              Customisable
            </Text>
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="greyDark">
          <Heading>Installation</Heading>
          <List>
            <Appear>
              <ListItem fit bold textColor="blueLight" margin="80px auto">npm i -g docsify-cli</ListItem>
            </Appear>
            <Appear>
              <ListItem fit bold textColor="orange" margin="80px auto">docsify init docs</ListItem>
            </Appear>
            <Appear>
              <ListItem fit bold textColor="green" margin="80px auto">docsify serve docs</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="teal">
          <Heading fit fill>J'ai intégré API_NAME hier..</Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="green">
          <Heading fit textColor="white">[...] la doc est bien faite, c'est génial !</Heading>
          <Image src={soCoolGif} width={500} margin="80px auto"></Image>
        </Slide>


      </Deck>
    );
  }
}
