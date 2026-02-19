import Login from "../components/Login"

export default function HomePage() {

    return (<>
        <h1>Memolink</h1>
        <p>Memolink is an interactive, high speed memory training application designed to challenge and improve cognitive visual-spatial association. Unlike traditional memory games that focus on matching identical pairs, Memolink introduces a cross-modal challenge: users must associate a visual image with its textual representation.
            The application provides a seamless, gamified experience where players memorize a grid of diverse images, which are then concealed. The system prompts the user with a specific keyword (e.g., "Banana"), and the player must accurately locate the corresponding hidden image.
        </p>
        <Login />
    </>)
}