import Image from "next/image";
import Head from "next/head"

export default function Home() {
  return (
<>
      <Head>
        <title>ChatApp - Connect Instantly</title>
        <meta name="description" content="ChatApp - The best way to stay connected with your friends and family." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between py-20">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                  Connect with the World <br />
                  <span className="text-yellow-300">Anytime, Anywhere</span>
                </h1>
                <p className="mt-4 text-lg sm:text-xl text-gray-100">
                  ChatApp makes it easy to stay connected with your loved ones, colleagues, and communities. 
                  Fast, secure, and user-friendly.
                </p>
                <div className="mt-6 flex justify-center lg:justify-start space-x-4">
                  <a
                    href="https://growing-mite-98.accounts.dev/sign-up"
                    className="px-6 py-3 bg-yellow-300 text-gray-900 font-medium rounded-lg shadow-md hover:bg-yellow-400"
                  >
                    Get Started
                  </a>
                  <a
                    href="/features"
                    className="px-6 py-3 bg-gray-100 text-blue-600 font-medium rounded-lg shadow-md hover:bg-gray-200"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* Right Image */}
              <div className="mt-10 lg:mt-0">
                <Image
                  src="/chatapplogo.jpg" // Replace with your own image or illustration
                  alt="ChatApp Hero Illustration"
                  width={200}
                  height={200}
                  className="w-full max-w-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center">
              Why Choose ChatApp?
            </h2>
            <p className="mt-4 text-lg text-gray-600 text-center">
              Discover the features that make ChatApp the best choice for seamless communication.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center">
                <Image
                  src="/instantmessaging.jpeg"
                  alt="Feature 1"
                  height={40}
                  width={40}
                  className="w-16 h-16 mx-auto"
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Instant Messaging</h3>
                <p className="mt-2 text-gray-600">
                  Chat with friends and family in real-time with blazing fast speed.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center">
                <Image
                  src="/secureimage.png"
                  alt="Feature 2"
                  height={40}
                  width={40}
                  className="w-16 h-16 mx-auto"
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Secure Conversations</h3>
                <p className="mt-2 text-gray-600">
                  End-to-end encryption ensures your chats are safe and private.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center">
                <Image
                  src="/groupchat.jpg"
                  alt="Feature 3"
                  height={40}
                  width={40}
                  className="w-16 h-16 mx-auto"
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Group Chats</h3>
                <p className="mt-2 text-gray-600">
                  Create and manage groups for seamless collaboration and fun.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export const metadata={
   title:'Home - Chatapp',
   description:"Chatapp helps you connect with people"
}
