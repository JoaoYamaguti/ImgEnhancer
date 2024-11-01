export function Enhancer() {
    return (
        <>
            <main>
                <div className="enhancer">

                    <select name="options" id="options">
                        <option value="enhance">Enhance</option>
                        <option value="upscale">Upscale</option>
                    </select>

                    <div className="field">
                        <label htmlFor="file">Choose or drag a file</label>
                        <input type="file" name="file" id="file" multiple/>
                    </div>

                    <button>Enhance</button>

                </div>
            </main>
        </>
    )
}