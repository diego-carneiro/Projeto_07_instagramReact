export default function Header() {

  return (
  
  
    <div class="barra-topo">
      <ion-icon class="icone-topo" name="logo-instagram" id="minilogo"></ion-icon>
      <div class="barra-vertical-topo">
      </div>
      <div class="conteudo-barra-topo">
        <img class="logo-insta" src="assets/img/logo.png" />
        <input placeholder="Pesquisar" name="espaço-pesquisa" id="espaço-pesquisa"/>
        <div class="caixa-icones">
          <ion-icon class="icone-topo" name="paper-plane-outline"></ion-icon>
          <ion-icon class="icone-topo" name="compass-outline" id="mobileDelete"></ion-icon>
          <ion-icon class="icone-topo" name="heart-outline" id="mobileDelete"></ion-icon>
          <ion-icon class="icone-topo" name="person-outline" id="mobileDelete"></ion-icon>
        </div>
      </div>
    </div>

  );
}
