import { RefObject, createContext } from "react";
interface IappContect {
    mainProjectListRefState: RefObject<HTMLDivElement>,
    setMainProjectListRefState: (a: any)=>void
}

export const AppContext = createContext({} as IappContect)