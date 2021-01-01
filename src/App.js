import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import {Container,Menu,PageBody} from './AppStyled';
import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';
import MenuItem from './components/MenuItem';
import Cart from './components/Cart';
import PrivateRoute from './components/PrivateRoute';
export default () => {
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
            <Container>
                <Menu>
                    <MenuItem icon="./assets/store.png" link="/"/>
                    <MenuItem icon="./assets/order.png" link="/orders"/>
                    <MenuItem icon="./assets/profile.png" link="/profile"/>
                </Menu>
                <PageBody>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>
                        <PrivateRoute path="/orders">
                            <div>PEDIDOS</div>
                        </PrivateRoute>
                        <PrivateRoute path="/profile">
                            <div>perfil</div>
                        </PrivateRoute>
                        <Route path="/tela2/:nome">
                            <Tela2Screen />
                        </Route>
                    </Switch>
                </PageBody>
                <Cart/>
            </Container>
        </BrowserRouter>
    );
}