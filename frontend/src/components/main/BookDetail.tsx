class Book {
  title: string;
  cover: string;
  genre: string;
  author: string;
  publisher: string;
  rating: number;
  available: string;
  publishedDate: string;
  description: string;
  numberOfPages: number;

  constructor(title: string, cover: string, genre: string, author: string, publisher: string, rating: number, available: string, publishedDate: string, description: string, numberOfPages: number) {
    this.title = title;
    this.cover = cover;
    this.genre = genre;
    this.author = author;
    this.publisher = publisher;
    this.rating = rating;
    this.available = available;
    this.publishedDate = publishedDate;
    this.description = description;
    this.numberOfPages = numberOfPages;
  }
}

export default function BookDetail({
                                     title,
                                     cover,
                                     genre,
                                     author,
                                     publisher,
                                     rating,
                                     available,
                                     publishedDate,
                                     description,
                                     numberOfPages,
                                   }: Book) {
  return (
    <div className="flex bg-white w-full h-full p-36 items-center">
      <div className=" w-2/5 h-full flex items-center">
        <img src={cover} alt="book cover" className=" h-auto w-fit object-contain" />
      </div>
      <div className="flex flex-col w-full h-full items-center justify-around p-20 item ">
        <h1 className="text-5xl font-extrabold dark:text-white">{title}</h1>
        <h2 className="text-4xl font-bold dark:text-white">by {author}</h2>
        <h3>Genres: <strong>{genre}</strong></h3>
        <p>Published: <strong>{publishedDate}</strong></p>
        <p>Available: <strong>{available}</strong></p>
        <p>Rating: <strong>{rating}</strong></p>
        <p>Publisher: <strong>{publisher}</strong></p>
        <p>Pages: <strong>{numberOfPages}</strong></p>
        <p><strong>Description: </strong></p>
        <p className="text-center">{description}</p>
        <button type="button"
                className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
          Borrow
        </button>
      </div>
    </div>
  );
}