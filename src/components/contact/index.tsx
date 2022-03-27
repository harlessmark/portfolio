const Contact: React.FC = (): JSX.Element => {
  return (
    <div className="contact" data-testid="contact">
      <h2>Contact</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque numquam
        mollitia maxime earum laudantium ullam et iusto temporibus accusantium
        doloremque explicabo commodi a similique reiciendis nam, consectetur
        quaerat aliquid sit necessitatibus magni? Quas porro molestias, odio
        magnam nobis unde nesciunt.
      </p>

      <div className="socials"></div>

      <footer>
        <p>&copy; {new Date().getFullYear()} Mark Harless</p>
      </footer>
    </div>
  );
};

export default Contact;
