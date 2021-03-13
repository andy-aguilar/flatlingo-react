const PaperHeader = ({ heading, height }) => {
    return(
        <div className="paper-header"  style={{height: height}}>
            <h3>{ heading }</h3>
        </div>
    )
}

export default PaperHeader