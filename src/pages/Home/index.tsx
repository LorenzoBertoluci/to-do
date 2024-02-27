import BotaoAdicionar from '../../components/BoataoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral mostrarFIltros />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
