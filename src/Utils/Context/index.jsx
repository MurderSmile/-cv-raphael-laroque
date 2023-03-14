import { createContext, useState } from "react";

export const ProjectContext = createContext()

export const ProjectProvider = ({ children }) => {

    const [project, setProject] = useState(null)

    return (
        <ProjectContext.Provider value={{ project, setProject }}>
            {children}
        </ProjectContext.Provider>
    )
}