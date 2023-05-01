export default function BoardContent({content}) {
    return (
        <div className="max-w-sm m-3 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <p className="font-normal text-gray-500 dark:text-gray-400">{content}</p>
        </div>
    )
}