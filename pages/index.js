import Menu from '../src/components/commons/Menu';
import Footer from '../src/components/commons/Footer';

export default function Home() {
  return (//os parenteses aqui são opcionais, é so pra ficar mais organizado
    <div style={{//este estilo joga o footer pra baixo
      flex: '1',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  )
}
