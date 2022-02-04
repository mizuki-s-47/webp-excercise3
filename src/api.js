export async function fetchImages(count) {
    const response = await fetch(
        `https://dog.ceo/api/breeds/image/random/${count}`
    );
    const data = await response.json();
    return data.message;
}