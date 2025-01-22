import Head from 'next/head';

export default function Features() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Head>
                <title>ChatApp - About</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>


            <main className="container mx-auto px-4 py-10">
                {/* Hero Section */}
                <section className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to ChatApp</h2>
                    <p className="text-gray-600 text-lg">The ultimate platform for seamless and secure communication.</p>
                    <div className="mt-6">
                        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600">Get Started</button>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="mb-12">
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white shadow-md rounded-lg p-6 text-center">
                            <h4 className="text-xl font-semibold text-gray-800">Real-Time Messaging</h4>
                            <p className="text-gray-600 mt-2">Experience instant and uninterrupted communication.</p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 text-center">
                            <h4 className="text-xl font-semibold text-gray-800">End-to-End Encryption</h4>
                            <p className="text-gray-600 mt-2">Your conversations are private and secure.</p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 text-center">
                            <h4 className="text-xl font-semibold text-gray-800">Group Chats</h4>
                            <p className="text-gray-600 mt-2">Connect with multiple people in organized groups.</p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 text-center">
                            <h4 className="text-xl font-semibold text-gray-800">File Sharing</h4>
                            <p className="text-gray-600 mt-2">Share images, videos, and documents effortlessly.</p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 text-center">
                            <h4 className="text-xl font-semibold text-gray-800">Custom Themes</h4>
                            <p className="text-gray-600 mt-2">Personalize your chat experience with beautiful themes.</p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 text-center">
                            <h4 className="text-xl font-semibold text-gray-800">Cross-Platform Support</h4>
                            <p className="text-gray-600 mt-2">Available on web, iOS, and Android devices.</p>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="mb-12">
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">About ChatApp</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        ChatApp is designed to make communication easy, secure, and accessible for everyone. Whether you're chatting with friends, collaborating with colleagues, or connecting with family, ChatApp provides the tools you need to stay connected. Our mission is to bring people closer together through technology.
                    </p>
                </section>

                {/* Contact Section */}
                <section id="contact" className="mb-12">
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h3>
                    <p className="text-gray-600 text-lg mb-4">
                        Have questions or feedback? We'd love to hear from you!
                    </p>
                    <form className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                            <input type="text" id="name" className="w-full border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                            <input type="email" id="email" className="w-full border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                            <textarea id="message" rows="4" className="w-full border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                            Send Message
                        </button>
                    </form>
                </section>
            </main>

            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2025 ChatApp. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
