import React, { useState } from 'react'
import bookFile from '../data/bookList.json'

function Books() {

    const [books, refreshBooks] = useState(bookFile);

    const resetList = () => {
        refreshBooks(bookFile);
    }

    const sortByFirstCharacterAZ = () => {
        books.sort((a, b) => a[0].localeCompare(b[0], 'et')); // tõstab ÕÖ 'o' kohale ja ä 'a' kohale
        refreshBooks(books.slice());
    }

    const sortByFirstCharacterZA = () => {
        books.sort((a, b) => b[0].localeCompare(a[0]));
        refreshBooks(books.slice());
    }

    const sortByNameLengthIncreasing = () => {
        books.sort((a, b) => a.length - b.length);
        refreshBooks(books.slice());
    }

    const sortByNameLengthDecreasing = () => {
        books.sort((a, b) => b.length - a.length);
        refreshBooks(books.slice());
    }

    const sortBySecondCharacterAZ = () => {
        books.sort((a, b) => a[1].localeCompare(b[1], 'et'));
        refreshBooks(books.slice());
    }

    const sortBySecondCharacterZA = () => {
        books.sort((a, b) => b[1].localeCompare(a[1]));
        refreshBooks(books.slice());
    }

    function sortByWordCountIncreasing() {
        // Create a new array to store the book names along with their respective word counts
        const booksWithWordCounts = books.map((oneBook) => {
            const words = oneBook.split(' ');
            return { name: oneBook, wordCount: words.length };
        });

        // Sort the books based on their word counts
        booksWithWordCounts.sort((a, b) => a.wordCount - b.wordCount);

        // Extract only the book names from the sorted array and return it
        const sortedBookNames = booksWithWordCounts.map((book) => book.name);
        //return sortedBookNames;
        refreshBooks(sortedBookNames.slice());
    }

    function sortByWordCountDecreasing() {
        const booksWithWordCounts = books.map((oneBook) => {
            const words = oneBook.split(' ');
            return { name: oneBook, wordCount: words.length };
        });
        // console.log(booksWithWordCounts);
        booksWithWordCounts.sort((a, b) => b.wordCount - a.wordCount);
        const sortedBookNames = booksWithWordCounts.map((book) => book.name);
        refreshBooks(sortedBookNames.slice());
    }

    function sortByLastButOneCharacterAZ() {
        const lastButOneCharacter = books.map((oneBook) => {
            const character = oneBook[oneBook.length - 2];
            console.log(character);
            return { name: oneBook, theCharacter: character }
        });
        console.log(lastButOneCharacter);
        lastButOneCharacter.sort((a, b) => a.theCharacter.localeCompare(b.theCharacter));
        const sortedBookNames = lastButOneCharacter.map((book) => book.name);
        refreshBooks(sortedBookNames.slice());

    }
    function sortByLastButOneCharacterZA() {
        const lastButOneCharacter = books.map((oneBook) => {
            const character = oneBook[oneBook.length - 2];
            console.log(character);
            return { name: oneBook, theCharacter: character }
        });
        console.log(lastButOneCharacter);
        lastButOneCharacter.sort((a, b) => b.theCharacter.localeCompare(a.theCharacter));
        const sortedBookNames = lastButOneCharacter.map((book) => book.name);
        refreshBooks(sortedBookNames.slice());
    }



    return (
        <div>
            <br />
            <button onClick={resetList}>Reset book list</button>
            <div>Raamatuid kokku: {books.length}</div>

            <br />
            {books.map(oneBook => <div key={oneBook}>{oneBook}</div>)}
            <button onClick={sortByFirstCharacterAZ}>Sorteeri esimese tähe järgi A-Z</button>
            <button onClick={sortByFirstCharacterZA}>Sorteeri esimese tähe järgi Z-A</button>
            <button onClick={sortByNameLengthIncreasing}>Sorteeri nime pikkuse järgi kasvavalt</button>
            <button onClick={sortByNameLengthDecreasing}>Sorteeri nime pikkuse järgi kahanevalt</button>
            <button onClick={sortBySecondCharacterAZ}>Sorteeri teise tähe järgi A-Z</button>
            <button onClick={sortBySecondCharacterZA}>Sorteeri teise tähe järgi Z-A</button>
            <button onClick={sortByWordCountIncreasing}>Sorteeri tühikute järgi kasvavalt</button>
            <button onClick={sortByWordCountDecreasing}>Sorteeri tühikute järgi kahanevalt</button>
            <button onClick={sortByLastButOneCharacterAZ}>Sorteeri eelviimase tähe järgi A-Z</button>
            <button onClick={sortByLastButOneCharacterZA}>Sorteeri eelviimase tähe järgi Z-A</button><br />
            <button disabled onClick={sortByLastButOneCharacterZA}>Filtreeri "the" algusega</button>
            <button disabled onClick={sortByLastButOneCharacterZA}>Filtreeri "and" sisaldavad</button>
            <button disabled onClick={sortByLastButOneCharacterZA}>Filtreeri enam kui 10 tähemärgiga</button>
            <button disabled onClick={sortByLastButOneCharacterZA}>Filtreeri vähem kui 7 tähemärgiga</button>
            <button disabled onClick={sortByLastButOneCharacterZA}>Filtreeri enam kui 3-sõnalised</button>
            <button disabled onClick={sortByLastButOneCharacterZA}>Filtreeri eelviimane täht "c"</button>


        </div>

    )
}

export default Books