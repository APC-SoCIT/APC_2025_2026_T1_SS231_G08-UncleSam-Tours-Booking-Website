export default function Footer() {
    return (
        <footer className="border-t bg-gray-50">
            <div className="container mx-auto flex flex-col items-center p-6 text-sm text-gray-600">
                <p>&copy; {new Date().getFullYear()} Uncle Sam Tours. All rights reserved.</p>
                <p className="mt-2">Made with <span className="text-red-500">&hearts;</span> in Japan</p>
            </div>
        </footer>
    );
}
