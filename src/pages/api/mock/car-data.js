export default function handler(req, res) {

    const resJson = [
        {
            content: "안녕하세요1."
        },
        {
            content: "안녕하세요2."
        },
        {
            content: "안녕하세요3."
        },
    ]

    res.status(200).json(resJson)
}