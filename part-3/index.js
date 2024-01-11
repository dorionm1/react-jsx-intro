const Person = (props) => {
    const voteQualify = props.age <= 18
    const nameMax = (props.name).length > 8
    const concatName = (props.name).substring(0,8)
    return (
        <div>
            <p>Learn some information about this person</p>
            <p>{nameMax ? concatName + '...' : props.name }</p>
            <p>{props.age}</p>
            <ul>{props.hobbies.map(hobby => <li>{hobby}</li>)}</ul>
            <h1>{voteQualify ? "You must be 18 or Older" : "Please Go Vote!"}</h1>
        </div>
    );
}

const App = () => {
    return (
        <div>
            <Person name="Dorion Mitchell" age="28" hobbies={["jumping","dancing","swimming"]} />
            <Person name="Moriah Mitchell" age="16" hobbies={["jumping","eating","swimming"]}/>
            <Person name="Malcolm Mitchell" age="1" hobbies={["sleeping","dancing","swimming"]} />
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));