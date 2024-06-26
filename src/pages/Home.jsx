import React, { useState, useEffect } from 'react'
import { Loader, Card, FormField } from '../components'

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />)
  }

  return (
    <h2 className='mt-5 font-bold text-[#6449ff] text-xl uppercase'>
      {title}
    </h2>
  )
}


const Home = ({ mode }) => {

  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  const [searchText, setSearchText] = useState('');
  const [searchedResults, setSearchedResults] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      try {
        const response = await fetch("https://openaiclone.stephen-blevins.dev/api/v1/post", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (response.ok) {
          const result = await response.json();

          setAllPosts(result.data.reverse());
        }
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [])

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResults = allPosts.filter((post) =>
          post.name.toLowerCase().includes(searchText.toLowerCase())
          || post.prompt.toLowerCase().includes(searchText.toLowerCase())
        );

        setSearchedResults(searchResults);
      }, 500)
    );
  }

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className={`${mode == "light" ? "text-[#222328]" : "text-white"} font-extrabold text-[#222328] text-[32px]`}>
          The Community Showcase
        </h1>
        <p className={`${mode == "light" ? "text-[#666e75]" : "text-text-dark"} mt-2 text-[16px] max-w-[500px]`}>
          Browse through a collection of imaginative and visually stunning images generated by DALL-E AI
        </p>
      </div>

      <div className='mt-16'>
        <FormField
          LabelName="Search posts"
          type="text"
          name="text"
          placeholder="Search Posts"
          value={searchText}
          handleChange={handleSearchChange}
          mode={mode}
        />
      </div>

      <div className='mt-10'>
        {loading ? (
          <div className='flex justify-center items-center'>
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className={`${mode == "light" ? "text-[#666e75]" : "text-text-dark"} font-medium text-xl mb-3`}>
                Showing results for {" "}
                <span className='text-[#222328]'>
                  {searchText}
                </span>
              </h2>
            )}
            <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
              {searchText ? (
                <RenderCards
                  data={searchedResults}
                  title="No search results found"
                />
              ) : (
                <RenderCards
                  data={allPosts}
                  title="No posts found"
                />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Home