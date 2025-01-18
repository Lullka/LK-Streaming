import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Teste = () => {
    const [URLPath, setURLPath] = useState<string>(window.location.pathname);
    const [URLRote, setURLRote] = useState<string>(window.location.pathname);
    const [URLOutro, setURLOutro] = useState<string>(window.location.pathname);
    const [URLa, setURLa] = useState<string>(window.location.pathname);
    const [URLpathname, setURpathname] = useState<string>(window.location.pathname);

    const History = useNavigate();

    useEffect(() => {
        setURLPath(window.location.host);
        setURLRote(window.location.hostname);
        setURLOutro(window.location.origin);
        setURLa(window.location.protocol);
        setURpathname(window.location.pathname);
    }, [History]);
    return(
        <>
            <h2 style={{color: "white", fontSize: "40px"}}>Host: {URLPath}</h2>
            <h2 style={{color: "white", fontSize: "40px"}}>PathName: {URLRote}</h2>
            <h2 style={{color: "white", fontSize: "40px"}}>rota: {URLOutro}</h2>
            <h2 style={{color: "white", fontSize: "40px"}}>rota: {URLa}</h2>
            <h2 style={{color: "white", fontSize: "40px"}}>rota: {URLpathname}</h2>
        </>
    )
}