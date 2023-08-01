

export const MainPage = () => {

    return (
        <main>

            <aside>
                <h4><span style={{ color: 'orange' }}>Dev</span>challenges.io</h4>
                <ul>
                    <li>Colors</li>
                    <li>Typography</li>
                    <li>Spaces</li>
                    <li>Buttons</li>
                    <li className="inputs-list-item">Inputs</li>
                    <li>Grid</li>
                </ul>
            </aside>

            <section>
                <h1>Buttons</h1>
                <div className="default-buttons">
                    <div className="default-btn">
                        <p>{'<Button/>'}</p>
                        <button>Default</button>
                    </div>
                    <div className="hover-focus-btn-1">
                        <p>{'&:hover, &:focus'}</p>
                        <button>Default</button>
                    </div>
                    <div className="variant-outline-btn">
                        <div> <p>{'<Button variant="outline"  />'}</p></div>
                        <button>Default</button>
                    </div>
                    <div className="hover-focus-btn-2">
                        <p>{'&:hover, &:focus'}</p>
                        <button>Default</button>
                    </div>
                    <div className="variant-text-btn">
                        <p>{'<Button variant="text"  />'}</p>
                        <button>Default</button>
                    </div>
                    <div className="hover-focus-btn-3">
                        <p>{'&:hover, &:focus'}</p>
                        <button>Default</button>
                    </div>

                </div>

                <div className="disableShadow-btn">
                    <p>{'<Button disableShadow />'}</p>
                    <button>Default</button>
                </div>
                <div className="disabled">
                    <div className="disabled-btn-1">
                        <p>{'<Button disabled />'}</p>
                        <button>Disabled</button>
                    </div>
                    <div className="disabled-btn-2">
                        <p>{'<Button variant="text" disabled  />'}</p>
                        <button>Disabled</button>
                    </div>
                </div>

                <div className="icons-btn">
                    <div className="start-icon-btn">
                        <p>{'<Button startIcon="local_grocery_store" />'}</p>
                        <button>
                            <span className="material-icons">
                                add_shopping_cart
                            </span>
                            Default
                        </button>
                    </div>
                    <div className="end-icon-btn">
                        <p>{'<Button endIcon="local_grocery_store" />'}</p>
                        <button>
                            Default
                            <span className="material-icons">
                                add_shopping_cart
                            </span>
                        </button>
                    </div>
                </div>

                <div className="size-btn">
                    <div className="size-btn-sm">
                        <p>{'<Button size="sm"/>'}</p>
                        <button>Default</button>
                    </div>
                    <div className="size-btn-md">
                        <p>{'<Button size="md"/>'}</p>
                        <button>Default</button>
                    </div>
                    <div className="size-btn-lg">
                        <p>{'<Button size="lg"/>'}</p>
                        <button>Default</button>
                    </div>
                </div>

                <div className="colors-btn">
                    <div className="btn-color-default">
                        <p>{'<Button color="default"/>'}</p>
                        <button>Default</button>
                    </div>
                    <div className="btn-color-primary">
                        <p>{'<Button color="primary"/>'}</p>
                        <button>Default</button>
                    </div>
                    <div className="btn-color-secondary">
                        <p>{'<Button color="secondary"/>'}</p>
                        <button>Secondary</button>
                    </div>
                    <div className="btn-color-danger">
                        <p>{'<Button color="danger"/>'}</p>
                        <button>Danger</button>
                    </div>

                </div>

                <div className="colors-btn-2">
                    <div className="btn-color-default-2">
                        <p>{'&:hover, &:focus'}</p>
                        <button>Default</button>
                    </div>
                    <div className="btn-color-primary-2">
                        <button>Default</button>
                    </div>
                    <div className="btn-color-secondary-2">
                        <button>Secondary</button>
                    </div>
                    <div className="btn-color-danger-2">
                        <button>Danger</button>
                    </div>
                </div>

            </section>
            <footer>
                <p>create by <a href="https://devchallenges.io/portfolio/MatiasC5" target="_blank" rel="noreferrer">Matias</a> - devChallenges.io</p>
            </footer>
        </main>
    )

}