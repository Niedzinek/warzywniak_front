import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Keycloak from 'keycloak-js';
import AuthLoginForm from "./pages/AuthLoginForm";
import Oferta from "./pages/Oferta";
import ClientLayout from "./layouts/ClientLayout";
import AuthRegistryForm from "./pages/AuthRegistryForm";
import Podsumowanie from "./pages/Podsumowanie";
import { doLogin, selectCurrentToken, selectCurrentUser } from "./store/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import Menu from "./Menu/Menu";
import PurchasesList from "./pages/PurchasesList";



const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientLayout/>,
    children: [
  {
    path: "/oferta",
    element: <Oferta/>
  },
  {
    path: "/register",
    element: <AuthRegistryForm/>
  },
  {
    path: "/podsumowanie",
    element: <Podsumowanie/>
  },
  {
    path: "/zamowienia",
    element: <PurchasesList/>
  }
]
},
]);

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const dispatch = useDispatch();
  const isRun = useRef(false);

  useEffect(() => {
    if(isRun.current) return;

    isRun.current = true;
    
    const keycloak = new Keycloak({
      realm: 'demo-app-relm',
      url: 'http://localhost:8180/', // Poprawiono adres URL Keycloak
      clientId: 'demo-app-front'
    },[]);
    keycloak.init({ onLoad: 'login-required' })
      .then(authenticated => {
        console.log(authenticated ? 'authenticated' : 'not authenticated');
        if(authenticated){
          const token = keycloak.token;
          console.log(token)
          keycloak.loadUserInfo().then(userInfo => {
            dispatch(doLogin({
              user: userInfo,
              accessToken: token
            }))
            
          })
          setIsAuthenticated(true);
          // console.log(doLogin.token)
        }
      })
      .catch(error => {
        console.error('Initialization error:', error);
      });
      
    // Zwróć funkcję czyszczącą w celu wywołania przy odmontowaniu komponentu
    return () => {
      // Tutaj możesz dodać kod do czyszczenia (jeśli jest potrzebny)
    };
  }, []);
  // const x = useSelector(selectCurrentToken);
  // useEffect(() =>{
  //   setIsAuthenticated(true)

  // },[x])

  // if(!isAuthenticated){
  //   return <div>Loading...</div>
  // }

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
