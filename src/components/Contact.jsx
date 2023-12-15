function Contact() {
  return (
    <div>
      <h1 className="mx-4 mt-2">Contact</h1>

      <div className="flex flex-col">
        <div className="mx-4">
          <p className="text-lg"><a href="mailto:anewgard41@gmail.com"></a></p>
          <form action="submit">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
            <input type="submit" value="Submit" />
          </form>
      </div>
    </div>

    </div>

  )
}

export default Contact;