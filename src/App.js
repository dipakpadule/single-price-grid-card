import './App.scss';

function App() {
  return (
    <article className='price-card'>
      <section className='pc-header'>
        <h1>Join our community</h1>
        <summary>30-day, hassle-free money back guarantee</summary>
        <p>Gain access to our full library of tutorials along with expert code reviews. 
        Perfect for any developers who are serious about honing their skills.</p>
      </section>
      <section className='pc-item pc-main'> 
        <h1>Monthly Subscription</h1>
        <summary><span>&#36;29 </span><sup>per month</sup></summary>
        <p>Full access for less than &#36;1 a day</p>
        <button>Sign Up</button>
      </section>
      <section className='pc-item pc-footer'>
        <h1>Why Us</h1>
        <ul>
          <li><a href="/">Tutorials by industry experts</a></li>
          <li><a href="/">Peer & expert code review Coding exercises</a></li>
          <li><a href="/"> Access to our GitHub repos</a></li>
          <li><a href="/">Community forum Flashcard decks</a></li>
          <li><a href="/">New videos every week</a></li>
        </ul>
      </section>
    </article>
  );
}

export default App;
