export const fetchBooks = async (url: string) => {
  try {
    const response = await fetch('http://localhost:8080/books/' + url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    console.log('Response text:', text);
    let books;

    try {
      books = JSON.parse(text);
    } catch {
      console.error('Received data is not in JSON format');
      return;
    }

    console.log('Data from fetch:', books);
    return books;
  } catch (error) {
    console.error('There was a problem with the fetch operation: ', error);
  }
};
