import React, { useState } from "react";


const BookReqForm = () => {
    const [formData, setFormData] = useState({

        name: "",
        age: "",
        email: "",
        address: "",
        bookGenre: "",
        bookTitle: "",
        bookAuthor: "",
        yearOfPublication: "",

    });

    const handleChange = (e) => {
        const{name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.bookGenre && !formData.bookTitle && !formData.bookAuthor && !formData.yearOfPublication){
            alert("Please fill out book details before submitting");
            return;
        }

        // Send data to the server
        try {
            const response = await fetch("https://pedrayaapi.azurewebsites.net/submit", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData), // Convert formData to JSON
            });
            
        if (response.ok) {
            const data = await response.json();
            alert("Form submitted successfully");
            console.log("API Response:", response.status);
            console.log("Submitted Form", data);

            // Reset the form after successful submission

            setFormData({
                name: "",
                age: "",
                email: "",
                address: "",
                bookGenre: "",
                bookTitle: "",
                bookAuthor: "",
                yearOfPublication: "",
            });
    
        } else {
            alert("Failed to submit form. Please try again")
            console.error("API Error", response.statusText);
            
        }
    } catch (error) {
        alert("An error occurred while submitting the form.");
        console.error("Error", error);
    }
    };

return (
    
    <section className="form-section">
        <div className="form-card">
            <h1>Book Request Form</h1>
            <p>Fill out the details below to request your desired book</p>
            <form onSubmit={handleSubmit}>

                {/* Name Input Field */}
                <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Age Input Field */}
                <div className="form-field">
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        placeholder="Enter your age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Email Input Field */}
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Address Input Field */}
                <div className="form-field">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Enter your address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Book Genre Input Field */}
                <div className="form-field">
                    <label htmlFor="bookGenre">Book Genre</label>
                    <input
                        type="text"
                        id="bookGenre"
                        name="bookGenre"
                        placeholder="Enter the book genre"
                        value={formData.bookGenre}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Book Title Input Field */}
                <div className="form-field">
                    <label htmlFor="bookTitle">Title of Book</label>
                    <input
                        type="text"
                        id="bookTitle"
                        name="bookTitle"
                        placeholder="Enter the title of the book"
                        value={formData.bookTitle}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Book Author Input Field */}
                <div className="form-field">
                    <label htmlFor="bookAuthor">Author of Book</label>
                    <input
                        type="text"
                        id="bookAuthor"
                        name="bookAuthor"
                        placeholder="Enter the author of the book"
                        value={formData.bookAuthor}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Year of Publication Input Field */}
                <div className="form-field">
                    <label htmlFor="yearOfPublication">Year of Publication</label>
                    <input
                        type="text"
                        id="yearOfPublication"
                        name="yearOfPublication"
                        placeholder="Enter the year of publication"
                        value={formData.yearOfPublication}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="Submit-Button">Submit</button>
            </form>
        </div>

    </section>

);
    
};

export default BookReqForm;