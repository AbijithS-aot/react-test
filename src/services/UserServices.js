import Keycloak from "keycloak-js";

export const initKeycloak = (url,realm,clientId,done) => {
 let keycloakConfig ={
    url,
    realm,
    clientId
  }
const KeycloakData = new Keycloak(keycloakConfig);
  KeycloakData.init({
    onLoad: "check-sso",
    promiseType: "native",
    silentCheckSsoRedirectUri:
    window.location.origin + "/silent-check-sso.html",
    pkceMethod: "S256",
    checkLoginIframe: false,
  }).then((authenticated)=>{
    if(authenticated){
            console.log("aunthenicated")
    }else{
        KeycloakData.login();
    }
  }).catch(err=>console.error("error",err))
};



