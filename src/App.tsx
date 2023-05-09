import { Grid, GridItem, Show } from '@chakra-ui/react'

function App() {

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem pl='2' bg='orange.300' area='nav'>Nav</GridItem>
      <Show above='lg'>
        <GridItem pl='2' bg='gray' area='aside'>Aside</GridItem>
      </Show>
      <GridItem pl='2' bg='blue' area='main'>Main</GridItem>
    </Grid>
  )
}

export default App