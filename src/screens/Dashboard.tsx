import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

type TypeDashboardProps = {
  navigation: any;
}

export default function Dashboard({ 
  navigation
}: TypeDashboardProps) {
  return (
    <Background>
      <Logo />
      <Header>Lets start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
          editing this project.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button>
    </Background>
  )
}
