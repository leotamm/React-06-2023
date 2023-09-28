import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import allSavedArticles from '../assets/all_articles.json'

function SingleArticle() {

    useEffect(() => {
        alert('Reached single article page');
    }, []);

    const { userId } = useParams();

    const [articles, setArticles] = useState([]);
    const [selectedArticle, setSelectedArticle] = useState();

    useEffect(() => {
        fetch('https://midaiganes.irw.ee/api/list?limit=500')
            .then(res => res.json())
            .then((data) =>
                [setArticles(data.list || []),
                console.log('Using API data')]
            )
    }, []);

    if (articles.length === 0) {
        setArticles(allSavedArticles);
        console.log('Using saved text');
    }

    setSelectedArticle(articles.find(singleArticle => singleArticle.id === userId));
    
    return (
        <div className='page'>
            {selectedArticle !== undefined && <div>
                <h1>{selectedArticle.title}</h1>
                <p dangerouslySetInnerHTML={{ __html: selectedArticle.intro }} />
                <img className='doggy-pic' src={selectedArticle.image.large} alt={selectedArticle.image.alt} />
                <p dangerouslySetInnerHTML={{ __html: selectedArticle.body }} />
                <button className='custom-button'>amet</button>
            </div>}
            {selectedArticle === undefined && <div>Article not found</div>}
        </div>
    )
}

export default SingleArticle