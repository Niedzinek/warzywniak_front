import Keycloak from "keycloak-js";

const keycloak = Keycloak({
    realm: 'demo-app-relm',
    url: 'http://localhost:8180/realms/master/protocol/openid-connect/auth',
    clientId: 'demo-app-front'
})

export default keycloak;