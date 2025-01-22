import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const topics = [
    {
        text: "Stock Market",
        img: "/sm.jpg",
        desc: "Let's discuss about the stock market",
        slug:"StockMarket"
    },
    {
        text: "Web Development",
        img: "/webd.png",
        desc: "Explore the world of web development and build amazing websites.",
        slug:"WebDev"
    },
    {
        text: "Data Structures & Algorithms",
        img: "/dsa.png",
        desc: "Dive into DSA to sharpen your problem-solving skills.",
        slug:"Data_Structure_and_Algorithm"
    },
    {
        text: "Artificial Intelligence",
        img: "/ai.jpg",
        desc: "Discuss the future of AI and its applications in real-world scenarios.",
        slug:"AI"
    },
    {
        text: "Blockchain",
        img: "/blockchain.jpeg",
        desc: "Learn about blockchain technology and its impact on industries.",
        slug:"Blockchain"
    },
    {
        text: "Personal Finance",
        img: "/finance.jpg",
        desc: "Master the art of managing your finances and building wealth.",
        slug:"FinanceManagement"
    },
];


const forums = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Discussion Forums
      </h1>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              <Image
                src={topic.img}
                alt={topic.text}
                width={34}
                height={34}
                className="w-20 h-20 mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                {topic.text}
              </h2>
              <p className="text-gray-600 mt-2">{topic.desc}</p>
              <Link href={`/forum/${topic.slug}`}>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Discuss now
              </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default forums