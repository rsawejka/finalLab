import React from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"

const Root = ({state} ) => {
    const data = state.source.get(state.router.link)
    return (
        <>
            <h1>Frontity Workshop</h1>
            <p>Current URL: {state.router.link}</p>
            <nav>
                <Link link="/">Home</Link>
                <br />
                <Link link="/books-martin-likes">Books Martin Likes</Link>
                <br />
                <Link link="/all-books">All Books</Link>
            </nav>
            <hr />
            <main>
                <Switch>
                    <div when={data.isArchive}>This is a list</div>
                    <div when={data.isPost}>This is a post</div>
                    <div when={data.isPage}>This is a page</div>
                </Switch>
            </main>
        </>
    )
}

export default connect(Root)