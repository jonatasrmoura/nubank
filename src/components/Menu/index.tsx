import React from 'react';
import QRcode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated } from 'react-native';

import { Container, Code, Nav, NavItem, NavText, SignOutBotton, SignOutBottonText } from './styles';

interface IProps {
    translateY: Animated.Value;
}

export default function Menu({ translateY }: IProps) {

    return (
        <Container
            style={{
                opacity: translateY.interpolate({
                    inputRange: [0, 150],
                    outputRange: [0, 1],
                }),
            }}>
                
            <Code>
                <QRcode 
                    value="https://rocketseat.com.br"
                    size={80}
                    color="#8B10AE"
                    backgroundColor="#FFF"
                />
            </Code>

            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#FFF" />
                    <NavText>Me ajuda</NavText>
                </NavItem>

                <NavItem>
                    <Icon name="person-outline" size={20} color="#FFF" />
                    <NavText>Perfil</NavText>
                </NavItem>

                <NavItem>
                    <Icon name="credit-card" size={20} color="#FFF" />
                    <NavText>Configurar cartão</NavText>
                </NavItem>

                <NavItem>
                    <Icon name="smartphone" size={20} color="#FFF" />
                    <NavText>Configurações do app</NavText>
                </NavItem>
            </Nav>

            <SignOutBotton onPress={() => {}}>
                <SignOutBottonText>SAIR DO APP</SignOutBottonText>
            </SignOutBotton>
        </Container>
    );
}