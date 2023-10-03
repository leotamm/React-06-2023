import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import allSavedArticles from '../assets/all_articles.json'

function SingleArticle() {

    const { userId } = useParams();
    const [selectedArticle, setSelectedArticle] = useState();

    useEffect(() => {
        fetch('https://midaiganes.irw.ee/api/list?limit=500')
            .then(res => res.json())
            .then((data) =>
                [setSelectedArticle(data.list.find(singleArticle => singleArticle.id === userId)),
                console.log('Using API data')]
            )
    }, []);

    if (selectedArticle.length === 0) {
        setSelectedArticle(allSavedArticles);
        console.log('Using saved text');
    }
    
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