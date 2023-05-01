export default function MainMenu({route, title, content}){
    return (
        <a href={route} className="block p-6 ml-2 mr-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          <p className="mt-2 font-normal text-gray-700 dark:text-gray-400">{content}</p>
        </a>
    )
}