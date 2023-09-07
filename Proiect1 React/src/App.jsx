const Salut = () =>{
  return (<h1>Salutare</h1>)
}


const Maestrul = () =>{
  return(<img src="marius.jpg" id="marius"/>)
}

const IntroducereMarius = () =>{
  return(<div>
    <h3>El este maestrul Marius maimuta</h3>
    <h3>Marius este un maimutoi foarte inteligent</h3>
  </div>
  )
}





const App = () => {
 return ( <div>
  <center>
    <Salut/>
    <Maestrul/>
    <IntroducereMarius/>
    </center>
 </div>
 );
};




export default App
