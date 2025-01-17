import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Componentes
import App from './App';
import Principal from './Views/Principal/Principal';
import Formulario from './Views/SolicitudInformacion/Formulario';
import Informacion from './Views/PresupuestoCiudadano/InformacionPC';
import Presupuesto from './Views/PresupuestoCiudadano/Presupuesto';
import Contacto from './Views/Contacto/Contacto';
import Noticia from './Views/LeerNoticia/LeerNoticia';
import Page404 from './Componentes/Page404/Page404';

const AppRoutes = () => 
<App>
        <Switch>
        <Route exact path="/" component={Principal}/>
        <Route exact path="/SolicitudInformacion" component={Formulario}/>
        <Route exact path="/Informacion" component={Informacion}/>
        <Route exact path="/Presupuesto" component={Presupuesto}/>
        <Route exact path="/Contacto" component={Contacto}/>
        <Route exact path="/Noticias/:id" component={Noticia}/>
        <Route component={Page404}/>
        </Switch>    
</App>

export default AppRoutes;