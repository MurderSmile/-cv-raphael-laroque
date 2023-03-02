function Descriptif(project) {
    return (
        <div className="fond">
            <div className="Descriptif">

                <div className="apercu">
                    <h2>{project.name}</h2>
                    <img src={project.image} alt="" />
                </div>
                <p>{project.description}</p>
                <div className="acces">
                    <button onClick={() => { window.location.replace(project.github) }}>GitHub</button>
                    <button onClick={() => { alert("en développement") }}>Lien vers site</button>
                </div>
            </div>
        </div>
    )
}

export default Descriptif