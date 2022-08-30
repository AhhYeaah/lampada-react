import './style.css'

function Lampada(props : any) {

  //Default
  let imagePath = './src/img/lampada-quebrada.png'
  let lampadaClass = 'foto-quebrada';

  //Se a lampada estiver quebrada deve voltar pro default, se não mudar pra imagem certa
  if(!props.isBroken){
    imagePath = props.lampadaState
    ? "./src/img/lampada-ligada.png"
    : "./src/img/lampada-apagada.png";

    lampadaClass = props.lampadaState
    ? "foto-esticada"
    : "foto"; 
  }
  

  return (
    <img
      src={imagePath}
      alt="lampada"
      className={ lampadaClass }
    />
  );
}

export default Lampada;
