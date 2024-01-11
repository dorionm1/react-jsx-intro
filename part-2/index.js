const Tweet = (props) => {
    return (
        <div id="tweet">
            <p>Username: {props.username}</p>
            <p>Name: {props.name}</p>
            <p>Tweet: {props.message}</p>
        </div>
    );
}

const App = () => {
    return (
        <div>
            <Tweet username="dmitchell1" name="Dorion Mitchell" message="This is my 1st Tweet"/>
            <Tweet username="dmitchell1" name="Dorion Mitchell" message="This is my 2nd Tweet"/>
            <Tweet username="dmitchell1" name="Dorion Mitchell" message="This is my 3rd Tweet"/>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));