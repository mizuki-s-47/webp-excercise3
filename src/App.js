import { useEffect, useState } from "react";
import { fetchImages } from "./api"

function Header() {
    return (
        <header className="hero is-info">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Dog Images</h1>
                </div>
            </div>
        </header>
    );
}

function Image(props) {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image">
                    <img src={props.src} alt="cute dog" />
                </figure>
            </div>
        </div>
    );
}

function Loading() {
    return <p>Now Loading...</p>;
}

function Gallery(props) {
    const { urls } = props;
    if (urls == null) {
        return <Loading />;
    }
    return (
        <div className="columns is-vcentered is-multiline">
            {urls.map((url) => {
                return (
                    <div key={url} className="column is-3">
                        <Image src={url} />
                    </div>
                );
            })}
        </div>
    );
}

function Main() {
    const [urls, setUrls] = useState(null);
    useEffect(() => {
        fetchImages(5).then((urls) => {
            setUrls(urls);
        });
    }, []);
    
    return (
        <main>
            <section className="section">
                <div className="container">
                    <Gallery urls={urls} />
                </div>
            </section>
        </main>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>5420052 須賀美月</p>
                <p>このサイトは日本大学文理学部情報科学科 Webプログラミングの演習課題のために作成されました</p>
                <p>画像は<a href="https://dog.ceo/dog-api/about">Dog API</a>から取得しています</p>
            </div>
        </footer>
    );
}

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;