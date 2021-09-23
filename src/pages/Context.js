import { UserContext } from "../components/context/UserContext";


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
