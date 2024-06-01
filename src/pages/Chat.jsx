import React, { useState } from 'react'
import { FormField } from '../components'

const Chat = () => {
    const [userText, setUserText] = useState("");
    const [generating, setGenerating] = useState(false);
    const [responseData, setResponseData] = useState([
        {
            prompt: "hello",
            response: "hello"
        }
    ]);

    const handleChange = (e) => {
        setUserText(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (userText) {
            try {
                setGenerating(true);

                const response = await fetch("http://localhost:5555/api/v1/chat", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ userText })
                })

                if (response.ok) {
                    const data = await response.json();

                    setResponseData(prevResponses => [...prevResponses, {
                        prompt: userText,
                        response: data.response.choices[0].message.content
                    }])
                }
            } catch (error) {
                alert("Error in response from Chat-GPT");
            } finally {
                setGenerating(false);
            }
        } else {
            alert("Please enter input to ask Chat-GPT")
        }

    }

    return (
        <div className='h-full min-h-[calc(100vh-130px)] max-w-7xl flex flex-col justify-between  mx-auto p-4'>
            <div className="flex-grow">
                <h2 className="text-2xl font-bold mb-4 text-center">Ask Chat-GPT</h2>
                {responseData && responseData.map(res => (
                    <>
                        <p className='inline-block bg-[#e8e8e8] p-4 rounded mb-4 text-left justify-end'>
                            {res.prompt}
                        </p>
                        <p className="mb-4 max-w-3xl mx-auto text-left px-4">
                            {res.response}
                        </p>
                    </>

                ))}
            </div>
            <div className='mb-4'>
                <FormField
                    LabelName="Ask"
                    type="text"
                    name="userText"
                    placeholder="e.g. Fun fact about the Roman Empire"
                    value={userText}
                    handleChange={handleChange}
                />
                {generating ? (
                    <div className='flex items-center justify-center'>
                        <button className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md mt-2 self-center'>
                            Generating...
                        </button>
                    </div>
                ) : (
                    <div className='flex items-center justify-center'>
                        <button
                            className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md mt-2 self-center'
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Generate
                        </button>
                    </div>
                )}


                <p className='text-sm mt-2 text-center'>
                    ChatGPT can make mistakes. Check important info.
                </p>
            </div>

        </div>
    )
}

export default Chat