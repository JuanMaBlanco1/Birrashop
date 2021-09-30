import { UserContext } from "../components/context/UserContext";
const Context = () => {
    return (
      <div style={{ minHeight: "calc(100vh - 100px)" }}>
        <h1>Context</h1>
        <Square1 />
      </div>
    );
  };
  
  export default Context;


const Square1 = () => {
    const [ÜserName, setUserName] = React.useState("")

    return(
        <div className="square square1">
         <p>1</p>
         <UserContext.Provider value={userName}>
             <Square1/>
         </UserContext.Provider>
        </div>
    );
};
