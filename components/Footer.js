/* eslint-disable @next/next/no-img-element */
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center">
            <p>&copy; 2023 LABTI - Pemrograman Web. Muhamad Ibnu Khaidar Hafiz - 50421867 - 3IA15.</p>
            <div className="mt-4 flex items-center justify-center">
                <p className="mr-2">GitHub repository:</p>
                <img
                    src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                    alt="GitHub Repository"
                    className="h-5 w-5 ml-2"
                />
                <a
                    href="https://github.com/Cleign1/next-labti-50421867"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white pl-1"
                >
                    <strong>Repo</strong>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
