const ContactForm = () => {
    return (
      <div className="flex flex-col items-center justify-center py-1">
        <div className="bg-[hsl(var(--card))] p-4 md:p-5 rounded-xl shadow-md w-full max-w-md border border-[hsl(var(--border))]">
          <h2 className="text-xl font-semibold text-center text-[hsl(var(--foreground))] mb-4">
            Contact Me
          </h2>
  
          <form className="space-y-3">
            <div>
              <label className="block text-[hsl(var(--muted-foreground))] text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 bg-[hsl(var(--input))] text-[hsl(var(--foreground))] border border-[hsl(var(--border))] rounded-md text-sm focus:ring-[hsl(var(--ring))] focus:ring-2 focus:outline-none"
              />
            </div>
  
            <div>
              <label className="block text-[hsl(var(--muted-foreground))] text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                name="message"
                id="message-1"
                placeholder="Write a message..."
                rows={3}
                className="w-full px-3 py-2 bg-[hsl(var(--input))] text-[hsl(var(--foreground))] border border-[hsl(var(--border))] rounded-md text-sm focus:ring-[hsl(var(--ring))] focus:ring-2 focus:outline-none"
              ></textarea>
            </div>
  
            <button
              type="submit"
              className="w-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-medium text-sm py-2 rounded-md hover:brightness-110 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default ContactForm;
  