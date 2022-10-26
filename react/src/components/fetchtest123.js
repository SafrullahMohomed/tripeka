
function fetchtest(){
    
    const [authors, setAuthors] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        const result = await fetch('http://localhost:3001/authors')
        const jsonResult = await result.json()
  
        setAuthors(jsonResult)
      }
  
      fetchData()
    }, [])

   


return (
    <div className='authors__container'>
      <button onClick={submitAuthor}>Submit a new one</button>
      <h2>Authors:</h2>
      {authors.map(author =>
        <div key={author.id} className='authors__item'>
          <img className='authors__image' src={author.avatar}/>
          <h3>{author.name}</h3>
        </div>)}
    </div>
  )
}

export default fetchtest;