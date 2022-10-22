import React, { useRef, useState } from 'react'
import People from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Container, Image, InputLabel, Input} from "./styles"
import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'
import Button from '../../components/Button'

function App() {

  const [users, setUsers] = useState([])
  const InputName = useRef()
  const InputAge = useRef()
  const history = useHistory()

  async function addNewUser() {
    const { data: newUser } = await axios.post("https://api-add-users.netlify.app", {
      name: InputName.current.value,
      age: InputAge.current.value
    });

    setUsers([...users, newUser])

    history.push("/usuarios")

  }


  return (
    <Container>

      <Image alt='logo-image' src={People} />

      <ContainerItens>

        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={InputName} placeholder='Nome ' />

        <InputLabel>Idade</InputLabel>
        <Input ref={InputAge} placeholder='Idade' />

        <Button onClick={addNewUser}>Cadastrar <img alt='seta' src={Arrow} /> </Button>

      </ContainerItens>

    </Container>
  );

}

export default App;
