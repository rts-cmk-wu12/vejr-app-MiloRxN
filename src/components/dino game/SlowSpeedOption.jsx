export default function SlowSpeedOption() {

    return(
        <>
            <label className="slow-speed-option hidden">
                Start slower
                <input type="checkbox" title="start slower" tabIndex={0} checked />
                <span className="slow-speed-toggle"></span>
            </label>
        </>
    )
}