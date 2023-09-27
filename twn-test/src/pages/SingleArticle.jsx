import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import savedText from '../assets/article_text.json'
import DOMPurify from 'dompurify'


function SingleArticle() {

    const { userId } = useParams();

    const [article, setArticle] = useState({ title: '', body: '', intro: '' });

    useEffect(() => {

        fetch('https://midaiganes.irw.ee/api/list/972d2b8a')
            .then(res => res.json())
            .then((data) =>
                setArticle({
                    title: DOMPurify.sanitize(data.title) || '',
                    body: DOMPurify.sanitize(data.body) || '',
                    intro: DOMPurify.sanitize(data.intro) || '',
                }))
    }, []);

    if (article.length === 0) {
        setArticle(savedText);
    }


    return (
        <div>SingleArticle</div>
    )
}

export default SingleArticle