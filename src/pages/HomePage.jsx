import Login from "../components/Login"
import "./HomePage.css";

export default function HomePage() {

    return (<>
        <h1>Memolink</h1>
        <p> MemoLink is a fast-paced memory training app where players memorize a grid of images, which then get hidden. <br />
            The system prompts a keyword (e.g., "Banana"), and the player must locate the matching hidden image.</p>
        <Login />
    </>)
}