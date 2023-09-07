const Salut = () =>{
  return (<h1>Salutare</h1>)
}

const Maestrul = () =>{
  return(<img src="marius.jpg" id="marius"/>)
}

const IntroducereMarius = () =>{
  return(<div>
    <h3>El este maestrul Marius</h3>
    <h3>Marius este un maimutoi foarte inteligent</h3>
  </div>
  )
}

const NumarNorocos = numar =>{
  const {nrAles} = numar;

  return(<h1>Marius iti daruieste numarul lui de telefon {nrAles}</h1>)
}


const App = () => {
 return ( <div>
  <center>
    <Salut/>
    <Maestrul/>
    <IntroducereMarius/>
    <NumarNorocos nrAles={"23456787643"}/>
    </center>
 </div>
 );
};




export default App
