import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
function Texto(props) {//componente react
  return <p>{props.children}</p>
}

export default function Home() {
  return <div><Title>My page</Title><Texto>Props aqui, isso é um teste</Texto></div>
}
