import Thumbnail from "./Thumbnail"

const Content = ({results}) => {
    return (
        <div>
            {results.map(result=>(
                <Thumbnail key={results.id} result={result} />
            ))}
        </div>
    )
}

export default Content
