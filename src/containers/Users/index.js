import React, { useState, useEffect } from 'react'
import Peopletrio from '../../assets/peopletrio.svg'
import Arrow from '../../assets/arrow.svg'
import Lixo from '../../assets/lixeira.svg'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Container, Image, User } from "./styles"
import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'
import Button from '../../components/Button'


function Users() {

  const [users, setUsers] = useState([])
  const history = useHistory()

  useEffect(() => {
    async function fetchUsers() {

      const { data: newUsers } = await axios.get("https://git.heroku.com/api-add-users-age.git")

      setUsers(newUsers)
    }

    fetchUsers()
  }, [])



  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }

  function goBackPage(){
    history.push("/")
  }

  return (
    <Container>

      <Image alt='logo-image' src={Peopletrio} />

      <ContainerItens isBlur={true}>

        <H1>Usuários</H1>

        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img alt='lixeira' src={Lixo} /></button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage} > <img alt='seta' src={Arrow} /> Voltar</Button>

      </ContainerItens>

    </Container>
  );

}

export default Users;
