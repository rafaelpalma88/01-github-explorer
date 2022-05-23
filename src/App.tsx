import './styles/global.scss'
import RepositoryList from './components/RepositoryList'
// import Counter from './components/Counter'

export function App() {

    // throw new Error('Eita Giovana o forninho caiu!'); 

    return (
        <div>
            <h1>Hello ReactJS Batata Banana</h1>

            <RepositoryList />

            {/* <Counter /> Usamos este componente para aprender sobre o estado no React */}
        </div>
    ) 
}
