export const request = async (
    url,
    method = "GET",
    body = null,
    headers = {}
) => {
    const response = await fetch(url, { method, body, headers });
    if (!response.ok)
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
    return response.json();
};
