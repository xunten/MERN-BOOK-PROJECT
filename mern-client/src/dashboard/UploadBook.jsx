import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Nonfiction",
    "Horror",
    "History",
    "Fantasy",
    "Romantasy",
    "History & Biography",
    "Science Fiction",
    "Memoir",
    "Self-help",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design"
  ]
  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }

  // handle book submission
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    
    const bookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
    }

    console.log(bookObj);

    // send data to DB

    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObj)
    }).then(res => res.json()).then(data => {
      // console.log(data)
      alert("Book upload sucessfully!!!")
      form.reset();
    })
  }
  return (
    <div className='px-4 mt-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A book</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
        <div className="flex gap-8">

          {/* book title */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="bookTitle">Book Title</Label>
            </div>
            <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Book name" required />
          </div>

          {/* authorName */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="authorName">Author Name</Label>
            </div>
            <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name" required />
          </div>

        </div>
        
        {/* 2 nd row */}
        <div className="flex gap-8">

          {/* book image */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL">Book Image URL</Label>
            </div>
            <TextInput id="imageURL" name="imageURL" type="text" placeholder="Book Image URL" required />
          </div>

          {/* Category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category">Book Category</Label>
            </div>

            <Select id='inputState' name='categoryName' className="w-full rounded" value={selectedBookCategory}
            onChange={handleChangeSelectedValue}>
              {
                bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
              }
            </Select>
          </div>
        </div>

        {/* book description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription">Book Description</Label>
          </div>
          <Textarea id="bookDescription" name="bookDescription" placeholder="Wirte your book description..." required rows={6} className="w-full" />
        </div>

        {/* book pdf link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL">Book PDF URL</Label>
          </div>
          <TextInput id="bookPDFURL" name="bookPDFURL" type="text" placeholder="book pdf url" required shadow />
        </div>

        <Button type="submit" className="mt-5">Upload Book</Button>

      </form>
    </div>
  )
}

export default UploadBook