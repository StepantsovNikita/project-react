import styles from "./styled.module.css"
import {Route, Switch} from 'react-router'
import Home from '../home'
import TestApi from '../test-api'
import CrossZero from '../cross-zero'
import Chat from '../chat/Chat'
const Main = () => {
    return(
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/chat' component={Chat} />
                <Route path='/test' component={TestApi} />
                <Route path='/cross-zero' component={CrossZero} />
            </Switch>
        </div>
    )
}

export default Main



