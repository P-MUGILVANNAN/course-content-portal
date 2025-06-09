import React from 'react'

function Multimedia() {
    return (
        <section id="multimedia" className="mb-5">
            <h2 className="h2 mb-3"><i className="bi bi-play-circle"></i> Multimedia</h2>
            <h3 className="h4 mb-2"><i className="bi bi-film"></i> Video Tag</h3>
            <p className="mb-3">The <code>{`<video>`}</code> tag embeds videos.</p>
            <p>Attributes: <code>controls</code>, <code>src</code>, <code>width</code>, <code>height</code>, <code>autoplay</code>, <code>muted</code></p>
            <pre className="mb-3"><code>{`<video src="videoplayback.mp4" controls autoplay muted height="400px" width="50%"></video>`}</code></pre>
            <h3 className="h4 mb-2"><i className="bi bi-music-note-beamed"></i> Audio Tag</h3>
            <p className="mb-3">The <code>{`<audio>`}</code> tag embeds audio.</p>
            <p>Attributes: <code>controls</code>, <code>autoplay</code>, <code>muted</code></p>
            <pre className="mb-3"><code>{`<audio src="Vaa-Kannamma-MassTamilan.dev.mp3" controls autoplay muted></audio>`}</code></pre>
        </section>
    )
}

export default Multimedia