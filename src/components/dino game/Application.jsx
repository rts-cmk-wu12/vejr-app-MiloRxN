export default function Application() {
    return (
        <div role="application" tabIndex={0} title="Dino game copy" className="runner-container">
            <canvas className="runner-canvas" width={1200} height={300} style={"width: 600px; height: 150px;"} />
            <span className="offline-runner-live-region" aria-live="assertive">Game started</span>
        </div>
    )
}