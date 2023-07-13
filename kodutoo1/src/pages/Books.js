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

    const sortByWordCountIncreasing = () => {
        // CGPT lahendus - teha ajutine objekt algstringidest ja eraldi stringideks eraldatud objektidest ning sorteerida sõnade arvu järgi
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

    const sortByWordCountDecreasing = () => {
        const booksWithWordCounts = books.map((oneBook) => {
            const words = oneBook.split(' ');
            return { name: oneBook, wordCount: words.length };
        });
        // console.log(booksWithWordCounts);
        booksWithWordCounts.sort((a, b) => b.wordCount - a.wordCount);
        const sortedBookNames = booksWithWordCounts.map((book) => book.name);
        refreshBooks(sortedBookNames.slice());
    }

    const sortByLastButOneCharacterAZ = () => {
        // tuleatud CGPT sortByWordCountIncreasing lahendusest - sorteerime vaheobjekti eraldatud eelviimaste tähtede alusel
        const lastButOneCharacter = books.map((oneBook) => {
            const character = oneBook[oneBook.length - 2];
            return { name: oneBook, theCharacter: character }
        });
        lastButOneCharacter.sort((a, b) => a.theCharacter.localeCompare(b.theCharacter));
        const sortedBookNames = lastButOneCharacter.map((book) => book.name);
        refreshBooks(sortedBookNames.slice());
    }

    const sortByLastButOneCharacterZA = () => {
        const lastButOneCharacter = books.map((oneBook) => {
            const character = oneBook[oneBook.length - 2];
            return { name: oneBook, theCharacter: character }
        });
        lastButOneCharacter.sort((a, b) => b.theCharacter.localeCompare(a.theCharacter));
        const sortedBookNames = lastButOneCharacter.map((book) => book.name);
        refreshBooks(sortedBookNames.slice());
    }

    const filterStartingWithThe = () => {
        const filteredBooks = books.filter(oneBook => oneBook.startsWith("The"));
        refreshBooks(filteredBooks);
    }

    const filterContainsAnd = () => {
        const filteredBooks = books.filter(oneBook => oneBook.toLowerCase().includes("and"));
        refreshBooks(filteredBooks);
    }

    const filterOver10Characters = () => {
        const filteredBooks = books.filter(oneBook => oneBook.length > 10);
        refreshBooks(filteredBooks);
    }

    const filterLesshan7Characters = () => {
        const filteredBooks = books.filter(oneBook => oneBook.length < 7);
        refreshBooks(filteredBooks);
    }

    const filterEqualOrMoreThan3Words = () => {
        const filteredBooks = books.filter((oneBook) => {
            const words = oneBook.split(' ');
            return words.length >= 3;
          });
          refreshBooks(filteredBooks);
    }

    const filterLastButOneChracterIsC = () => {
        const filteredBooks = books.filter((oneBook) => {
            const character = oneBook[oneBook.length - 2];
            return character === 'c';
        })
        refreshBooks(filteredBooks);
    }

    return (
        <div>
            <br />
            <button onClick={resetList}>Nimekirja reset</button>
            <div>Raamatuid kokku: {books.length}</div><br />
            {books.map(oneBook => <div key={oneBook}>{oneBook}</div>)}<br />
            <button onClick={sortByFirstCharacterAZ}>Sorteeri esimese tähe järgi A-Z</button>
            <button onClick={sortByFirstCharacterZA}>Sorteeri esimese tähe järgi Z-A</button>
            <button onClick={sortByNameLengthIncreasing}>Sorteeri nime pikkuse järgi kasvavalt</button>
            <button onClick={sortByNameLengthDecreasing}>Sorteeri nime pikkuse järgi kahanevalt</button>
            <button onClick={sortBySecondCharacterAZ}>Sorteeri teise tähe järgi A-Z</button>
            <button onClick={sortBySecondCharacterZA}>Sorteeri teise tähe järgi Z-A</button>
            <button onClick={sortByWordCountIncreasing}>Sorteeri tühikute järgi kasvavalt</button>
            <button onClick={sortByWordCountDecreasing}>Sorteeri tühikute järgi kahanevalt</button>
            <button onClick={sortByLastButOneCharacterAZ}>Sorteeri eelviimase tähe järgi A-Z</button>
            <button onClick={sortByLastButOneCharacterZA}>Sorteeri eelviimase tähe järgi Z-A</button><br /><br />
            <button onClick={filterStartingWithThe}>Filtreeri "the" algusega</button>
            <button onClick={filterContainsAnd}>Filtreeri "and" sisaldavad</button>
            <button onClick={filterOver10Characters}>Filtreeri enam kui 10 tähemärgiga</button>
            <button onClick={filterLesshan7Characters}>Filtreeri vähem kui 7 tähemärgiga</button>
            <button onClick={filterEqualOrMoreThan3Words}>Filtreeri enam kui 3-sõnalised</button>
            <button onClick={filterLastButOneChracterIsC}>Filtreeri eelviimane täht "c"</button>
        </div>
    )
}

export default Books