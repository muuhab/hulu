import Thumbnail from "./Thumbnail"

const Content = ({results}) => {
    return (
        <div>
            {results.map(item=>(
                <Thumbnail/>
            ))}
        </div>
    )
}

export default Content
